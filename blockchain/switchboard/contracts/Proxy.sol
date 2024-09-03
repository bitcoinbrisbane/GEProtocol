//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {ISwitchboard} from "@switchboard-xyz/on-demand-solidity/ISwitchboard.sol";
import {Structs} from "@switchboard-xyz/on-demand-solidity/structs/Structs.sol";
import {IPriceOracle} from "./IPriceOracle.sol";
import {IPriceOracleSentinel} from "./IPriceOracleSentinel.sol";
import {IPoolAddressesProvider} from './IPoolAddressesProvider.sol';

contract Proxy is IPriceOracle, IPriceOracleSentinel {
    ISwitchboard private switchboard;

    // Every Switchboard Feed has a unique feed ID derived from the OracleJob definition and Switchboard Queue ID.
    bytes32 private feedId;
    IPoolAddressesProvider public immutable override ADDRESSES_PROVIDER;
    // ISequencerOracle internal _sequencerOracle;
    uint256 internal _gracePeriod;

    struct Update {
        bytes32 oracleId; // The publisher of the update
        int128 result; // The value of the recorded update
        uint256 timestamp; // The timestamp of the update
    }

    constructor(address _switchboard, bytes32 _feedId, IPoolAddressesProvider provider, uint256 gracePeriod) {
        // Initialize the target _switchboard
        // Get the existing Switchboard contract address on your preferred network from the Switchboard Docs
        switchboard = ISwitchboard(_switchboard);
        feedId = _feedId;

        ADDRESSES_PROVIDER = provider;
        // _sequencerOracle = oracle;
        _gracePeriod = gracePeriod;
    }

    // /**
    //  * getFeedData is a function that uses an encoded Switchboard update
    //  * If the update is successful, it will read the latest price from the feed
    //  * See below for fetching encoded updates (e.g., using the Switchboard Typescript SDK)
    //  * @param updates Encoded feed updates to update the contract with the latest result
    //  */
    // function getFeedData(bytes[] calldata updates) public payable {
    //     // Get the fee for updating the feeds. If the transaction fee is not paid, the update will fail.
    //     uint256 fee = switchboard.getFee(updates);
    //     if (msg.value < fee) {
    //         revert InsufficientFee(fee, msg.value);
    //     }

    //     // Submit the updates to the Switchboard contract
    //     switchboard.updateFeeds{value: fee}(updates);

    //     // Read the current value from a Switchboard feed.
    //     // This will fail if the feed doesn't have fresh updates ready (e.g. if the feed update failed)
    //     Structs.Update memory latestUpdate = switchboard.latestUpdate(feedId);

    //     // Get the latest feed result
    //     // This is encoded as decimal * 10^18 to avoid floating point issues
    //     // Some feeds require negative numbers, so results are int128's, but this example uses positive numbers
    //     int128 result = latestUpdate.result;

    //     // In this example, we revert if the result is negative
    //     if (result < 0) {
    //         revert InvalidResult(result);
    //     }

    //     // Emit the latest result from the feed
    //     emit FeedData(latestUpdate.result);
    // }

    // function getAssetPrice(address asset) external view returns (uint256) {
    //     return assetPrices[asset];
    // }

    // function setAssetPrice(address asset, uint256 price) external {
    //     assetPrices[asset] = price;

    //     // emit?
    // }

    function isBorrowAllowed() public view override returns (bool) {
        return _isUpAndGracePeriodPassed();
    }

    function isLiquidationAllowed() public view override returns (bool) {
        return _isUpAndGracePeriodPassed();
    }

    function _isUpAndGracePeriodPassed() internal view returns (bool) {
        (, int256 answer, , uint256 lastUpdateTimestamp, ) = _sequencerOracle.latestRoundData();
        return answer == 0 && block.timestamp - lastUpdateTimestamp > _gracePeriod;
    }

    function setSequencerOracle(address newSequencerOracle) public onlyPoolAdmin {
        switchboard = ISwitchboard(newSequencerOracle);
        emit SequencerOracleUpdated(newSequencerOracle);
    }

    function setGracePeriod(uint256 newGracePeriod) public onlyRiskOrPoolAdmins {
        _gracePeriod = newGracePeriod;
        emit GracePeriodUpdated(newGracePeriod);
    }

    function getSequencerOracle() public view returns (address) {
        return address(switchboard);
    }

    function getGracePeriod() public view returns (uint256) {
        return _gracePeriod;
    }

    modifier onlyPoolAdmin() {
        IACLManager aclManager = IACLManager(
            ADDRESSES_PROVIDER.getACLManager()
        );
        require(
            aclManager.isPoolAdmin(msg.sender),
            Errors.CALLER_NOT_POOL_ADMIN
        );
        _;
    }

    modifier onlyRiskOrPoolAdmins() {
        IACLManager aclManager = IACLManager(
            ADDRESSES_PROVIDER.getACLManager()
        );
        require(
            aclManager.isRiskAdmin(msg.sender) ||
                aclManager.isPoolAdmin(msg.sender),
            Errors.CALLER_NOT_RISK_OR_POOL_ADMIN
        );
        _;
    }

      // If the transaction fee is not paid, the update will fail.
    error InsufficientFee(uint256 expected, uint256 received);

    // If the feed result is invalid, this error will be emitted.
    error InvalidResult(int128 result);

    // If the Switchboard update succeeds, this event will be emitted with the latest price.
    event FeedData(int128 price);
}
