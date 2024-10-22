import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { MockReentrantInitializableImple, MockReentrantInitializableImpleInterface } from "../../../../mocks/upgradeability/MockInitializableImplementation.sol/MockReentrantInitializableImple";
type MockReentrantInitializableImpleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockReentrantInitializableImple__factory extends ContractFactory {
    constructor(...args: MockReentrantInitializableImpleConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockReentrantInitializableImple>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockReentrantInitializableImple;
    connect(signer: Signer): MockReentrantInitializableImple__factory;
    static readonly bytecode = "0x60806040526000805534801561001457600080fd5b5061024c806100246000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633fa4f24514610046578063dde43cba14610061578063fe4b84df14610069575b600080fd5b61004f60345481565b60405190815260200160405180910390f35b61004f600281565b61007c6100773660046101be565b61007e565b005b60015460029060ff16806100915750303b155b8061009d575060005481115b61012d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201527f656e20696e697469616c697a6564000000000000000000000000000000000000606482015260840160405180910390fd5b60015460ff1615801561016a57600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168117905560008290555b6034839055600283101561018a5761018a603454600161007791906101d7565b80156101b957600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b505050565b6000602082840312156101d057600080fd5b5035919050565b60008219821115610211577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b50019056fea264697066735822122081ac8aefe5b335fe1b90e2f58dd932add504aa6819d0177e896a574fb7c1ea0d64736f6c634300080a0033";
    static readonly abi: ({
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): MockReentrantInitializableImpleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockReentrantInitializableImple;
}
export {};
//# sourceMappingURL=MockReentrantInitializableImple__factory.d.ts.map