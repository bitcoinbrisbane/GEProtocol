//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {ISwitchboard} from "@switchboard-xyz/on-demand-solidity/ISwitchboard.sol";
import {Structs} from "@switchboard-xyz/on-demand-solidity/structs/Structs.sol";
import {IPriceOracle} from "./IPriceOracle.sol";
import {IPriceOracleSentinel} from "./IPriceOracleSentinel.sol";

contract Proxy is IPriceOracle, IPriceOracleSentinel {
    ISwitchboard switchboard;

    // Every Switchboard Feed has a unique feed ID derived from the OracleJob definition and Switchboard Queue ID.
    bytes32 feedId;

    // If the transaction fee is not paid, the update will fail.
    error InsufficientFee(uint256 expected, uint256 received);

    // If the feed result is invalid, this error will be emitted.
    error InvalidResult(int128 result);

    // If the Switchboard update succeeds, this event will be emitted with the latest price.
    event FeedData(int128 price);

    /**
     * @param _switchboard The address of the Switchboard contract
     * @param _feedId The feed ID for the feed you want to query
     */
    constructor(address _switchboard, bytes32 _feedId) {
        // Initialize the target _switchboard
        // Get the existing Switchboard contract address on your preferred network from the Switchboard Docs
        switchboard = ISwitchboard(_switchboard);
        feedId = _feedId;
    }

    /**
     * getFeedData is a function that uses an encoded Switchboard update
     * If the update is successful, it will read the latest price from the feed
     * See below for fetching encoded updates (e.g., using the Switchboard Typescript SDK)
     * @param updates Encoded feed updates to update the contract with the latest result
     */
    function getFeedData(bytes[] calldata updates) public payable {
        // Get the fee for updating the feeds. If the transaction fee is not paid, the update will fail.
        uint256 fee = switchboard.getFee(updates);
        if (msg.value < fee) {
            revert InsufficientFee(fee, msg.value);
        }

        // Submit the updates to the Switchboard contract
        switchboard.updateFeeds{value: fee}(updates);

        // Read the current value from a Switchboard feed.
        // This will fail if the feed doesn't have fresh updates ready (e.g. if the feed update failed)
        Structs.Update memory latestUpdate = switchboard.latestUpdate(feedId);

        // Get the latest feed result
        // This is encoded as decimal * 10^18 to avoid floating point issues
        // Some feeds require negative numbers, so results are int128's, but this example uses positive numbers
        int128 result = latestUpdate.result;

        // In this example, we revert if the result is negative
        if (result < 0) {
            revert InvalidResult(result);
        }

        // Emit the latest result from the feed
        emit FeedData(latestUpdate.result);
    }

    function getAssetPrice(address asset) external view returns (uint256) {
        // This function is not implemented in this example
        // It would be used to get the price of an asset from the feed
        // This function is required by the IPriceOracle interface
        return 0;
    }

    function setAssetPrice(address asset, uint256 price) external {
        // This function is not implemented in this example
        // It would be used to set the price of an asset in the feed
        // This function is required by the IPriceOracle interface
    }

    function ADDRESSES_PROVIDER() external view returns (IPoolAddressesProvider) {

    }


    function isBorrowAllowed() external view returns (bool) {

    }


    function isLiquidationAllowed() external view returns (bool) {

    }


    function setSequencerOracle(address newSequencerOracle) external {

    }

    function setGracePeriod(uint256 newGracePeriod) external {

    }

    function getSequencerOracle() external view returns (address) {

    }

    function getGracePeriod() external view returns (uint256) {
        
    }
}