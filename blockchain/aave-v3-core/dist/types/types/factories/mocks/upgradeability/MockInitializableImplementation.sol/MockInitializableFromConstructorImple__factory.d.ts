import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { MockInitializableFromConstructorImple, MockInitializableFromConstructorImpleInterface } from "../../../../mocks/upgradeability/MockInitializableImplementation.sol/MockInitializableFromConstructorImple";
type MockInitializableFromConstructorImpleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockInitializableFromConstructorImple__factory extends ContractFactory {
    constructor(...args: MockInitializableFromConstructorImpleConstructorParams);
    deploy(val: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockInitializableFromConstructorImple>;
    getDeployTransaction(val: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockInitializableFromConstructorImple;
    connect(signer: Signer): MockInitializableFromConstructorImple__factory;
    static readonly bytecode = "0x60806040526000805534801561001457600080fd5b5060405161031c38038061031c83398101604081905261003391610102565b61003c81610042565b5061011b565b60015460029060ff16806100555750303b155b80610061575060005481115b6100c85760405162461bcd60e51b815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201526d195b881a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b60015460ff161580156100e7576001805460ff19168117905560008290555b603483905580156100fd576001805460ff191690555b505050565b60006020828403121561011457600080fd5b5051919050565b6101f28061012a6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633fa4f24514610046578063dde43cba14610061578063fe4b84df14610069575b600080fd5b61004f60345481565b60405190815260200160405180910390f35b61004f600281565b61007c6100773660046101a3565b61007e565b005b60015460029060ff16806100915750303b155b8061009d575060005481115b61012d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201527f656e20696e697469616c697a6564000000000000000000000000000000000000606482015260840160405180910390fd5b60015460ff1615801561016a57600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168117905560008290555b6034839055801561019e57600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b505050565b6000602082840312156101b557600080fd5b503591905056fea2646970667358221220a2bc2435d5ad67391d31646737c640530fb0e18e55c4e0ad7e41a33496dc9c2c64736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
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
    static createInterface(): MockInitializableFromConstructorImpleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockInitializableFromConstructorImple;
}
export {};
//# sourceMappingURL=MockInitializableFromConstructorImple__factory.d.ts.map