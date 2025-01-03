/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockReserveInterestRateStrategy,
  MockReserveInterestRateStrategyInterface,
} from "../../../mocks/tests/MockReserveInterestRateStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "optimalUsageRatio",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "baseVariableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableRateSlope1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableRateSlope2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stableRateSlope1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stableRateSlope2",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_EXCESS_USAGE_RATIO",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OPTIMAL_USAGE_RATIO",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "unbacked",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidityAdded",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidityTaken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalStableDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalVariableDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "averageStableBorrowRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveFactor",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "reserve",
            type: "address",
          },
          {
            internalType: "address",
            name: "aToken",
            type: "address",
          },
        ],
        internalType: "struct DataTypes.CalculateInterestRatesParams",
        name: "",
        type: "tuple",
      },
    ],
    name: "calculateInterestRates",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableBorrowRate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBaseStableBorrowRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getBaseVariableBorrowRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxVariableBorrowRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStableRateExcessOffset",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getStableRateSlope1",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStableRateSlope2",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVariableRateSlope1",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVariableRateSlope2",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256",
      },
    ],
    name: "setLiquidityRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stableBorrowRate",
        type: "uint256",
      },
    ],
    name: "setStableBorrowRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "variableBorrowRate",
        type: "uint256",
      },
    ],
    name: "setVariableBorrowRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x61016060405234801561001157600080fd5b5060405161062d38038061062d83398101604081905261003091610061565b6080959095526001600160a01b0390951660a05260c09290925260e0526101005261012091909152610140526100ca565b600080600080600080600060e0888a03121561007c57600080fd5b87516001600160a01b038116811461009357600080fd5b602089015160408a015160608b015160808c015160a08d015160c0909d0151949e939d50919b909a50909850965090945092505050565b60805160a05160c05160e0516101005161012051610140516104f461013960003960006101a3015260006102a10152600081816102c701526102ef01526000818161017301526103130152600081816101c90152610334015260006101250152600061020701526104f46000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c8063a5898709116100b2578063bc62690811610081578063d5cd739111610066578063d5cd73911461029f578063f4202409146102c5578063fe5fd6981461022957600080fd5b8063bc62690814610285578063cecced511461028c57600080fd5b8063a589870914610239578063a9c622f814610229578063aa16fe3414610272578063acd786861461028557600080fd5b80633a244adf116100ee5780633a244adf146101ed57806354c365c6146102025780636fb925891461022957806380031e371461023157600080fd5b80630542975c146101205780630b3429a21461017157806314e32da4146101a157806334762ca5146101c7575b600080fd5b6101477f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b7f00000000000000000000000000000000000000000000000000000000000000005b604051908152602001610168565b7f0000000000000000000000000000000000000000000000000000000000000000610193565b7f0000000000000000000000000000000000000000000000000000000000000000610193565b6102006101fb366004610367565b600055565b005b6101937f000000000000000000000000000000000000000000000000000000000000000081565b610193600081565b6101936102eb565b6102576102473660046103fa565b6000546001546002549193909250565b60408051938452602084019290925290820152606001610168565b610200610280366004610367565b600255565b6000610193565b61020061029a366004610367565b600155565b7f0000000000000000000000000000000000000000000000000000000000000000610193565b7f0000000000000000000000000000000000000000000000000000000000000000610193565b60007f00000000000000000000000000000000000000000000000000000000000000006103587f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061047f565b610362919061047f565b905090565b60006020828403121561037957600080fd5b5035919050565b604051610120810167ffffffffffffffff811182821017156103cb577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405290565b803573ffffffffffffffffffffffffffffffffffffffff811681146103f557600080fd5b919050565b6000610120828403121561040d57600080fd5b610415610380565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015261046160e084016103d1565b60e08201526101006104748185016103d1565b908201529392505050565b600082198211156104b9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b50019056fea26469706673582212200293de1ee4476411ba3b9820dc176bc1e8cf7d4a5c4059f8b162f09014fddb4764736f6c634300080a0033";

type MockReserveInterestRateStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockReserveInterestRateStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockReserveInterestRateStrategy__factory extends ContractFactory {
  constructor(...args: MockReserveInterestRateStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    provider: PromiseOrValue<string>,
    optimalUsageRatio: PromiseOrValue<BigNumberish>,
    baseVariableBorrowRate: PromiseOrValue<BigNumberish>,
    variableRateSlope1: PromiseOrValue<BigNumberish>,
    variableRateSlope2: PromiseOrValue<BigNumberish>,
    stableRateSlope1: PromiseOrValue<BigNumberish>,
    stableRateSlope2: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockReserveInterestRateStrategy> {
    return super.deploy(
      provider,
      optimalUsageRatio,
      baseVariableBorrowRate,
      variableRateSlope1,
      variableRateSlope2,
      stableRateSlope1,
      stableRateSlope2,
      overrides || {}
    ) as Promise<MockReserveInterestRateStrategy>;
  }
  override getDeployTransaction(
    provider: PromiseOrValue<string>,
    optimalUsageRatio: PromiseOrValue<BigNumberish>,
    baseVariableBorrowRate: PromiseOrValue<BigNumberish>,
    variableRateSlope1: PromiseOrValue<BigNumberish>,
    variableRateSlope2: PromiseOrValue<BigNumberish>,
    stableRateSlope1: PromiseOrValue<BigNumberish>,
    stableRateSlope2: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      provider,
      optimalUsageRatio,
      baseVariableBorrowRate,
      variableRateSlope1,
      variableRateSlope2,
      stableRateSlope1,
      stableRateSlope2,
      overrides || {}
    );
  }
  override attach(address: string): MockReserveInterestRateStrategy {
    return super.attach(address) as MockReserveInterestRateStrategy;
  }
  override connect(signer: Signer): MockReserveInterestRateStrategy__factory {
    return super.connect(signer) as MockReserveInterestRateStrategy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockReserveInterestRateStrategyInterface {
    return new utils.Interface(
      _abi
    ) as MockReserveInterestRateStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockReserveInterestRateStrategy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockReserveInterestRateStrategy;
  }
}
