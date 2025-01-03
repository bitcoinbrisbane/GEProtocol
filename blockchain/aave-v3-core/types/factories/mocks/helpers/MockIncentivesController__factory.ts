/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockIncentivesController,
  MockIncentivesControllerInterface,
} from "../../../mocks/helpers/MockIncentivesController";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "handleAction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060c18061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806331873e2e14602d575b600080fd5b603d6038366004603f565b505050565b005b600080600060608486031215605357600080fd5b833573ffffffffffffffffffffffffffffffffffffffff81168114607657600080fd5b9560208501359550604090940135939250505056fea2646970667358221220c8aea5b2f0f79d20c8d43eb83844f385685a0dd278834d37cd56f47a0c05b3e564736f6c634300080a0033";

type MockIncentivesControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockIncentivesControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockIncentivesController__factory extends ContractFactory {
  constructor(...args: MockIncentivesControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockIncentivesController> {
    return super.deploy(overrides || {}) as Promise<MockIncentivesController>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockIncentivesController {
    return super.attach(address) as MockIncentivesController;
  }
  override connect(signer: Signer): MockIncentivesController__factory {
    return super.connect(signer) as MockIncentivesController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockIncentivesControllerInterface {
    return new utils.Interface(_abi) as MockIncentivesControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockIncentivesController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockIncentivesController;
  }
}
