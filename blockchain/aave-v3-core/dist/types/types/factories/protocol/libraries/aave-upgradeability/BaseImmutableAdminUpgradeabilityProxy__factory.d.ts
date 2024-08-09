import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { BaseImmutableAdminUpgradeabilityProxy, BaseImmutableAdminUpgradeabilityProxyInterface } from "../../../../protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy";
type BaseImmutableAdminUpgradeabilityProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BaseImmutableAdminUpgradeabilityProxy__factory extends ContractFactory {
    constructor(...args: BaseImmutableAdminUpgradeabilityProxyConstructorParams);
    deploy(admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<BaseImmutableAdminUpgradeabilityProxy>;
    getDeployTransaction(admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): BaseImmutableAdminUpgradeabilityProxy;
    connect(signer: Signer): BaseImmutableAdminUpgradeabilityProxy__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b506040516106b23803806106b283398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516106046100ae600039600081816101210152818161017301528181610246015281816102b7015281816102e0015261031a01526106046000f3fe60806040526004361061003f5760003560e01c80633659cfe6146100495780634f1ef286146100695780635c60da1b1461007c578063f851a440146100ba575b6100476100cf565b005b34801561005557600080fd5b50610047610064366004610519565b610109565b61004761007736600461053b565b61015b565b34801561008857600080fd5b5061009161022c565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100c657600080fd5b5061009161029d565b6100d7610302565b6101076101027f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6103cd565b565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016141561015357610150816103f1565b50565b6101506100cf565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016141561021f576101a2836103f1565b60008373ffffffffffffffffffffffffffffffffffffffff1683836040516101cb9291906105be565b600060405180830381855af49150503d8060008114610206576040519150601f19603f3d011682016040523d82523d6000602084013e61020b565b606091505b505090508061021957600080fd5b50505050565b6102276100cf565b505050565b60003373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016141561029257507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b61029a6100cf565b90565b60003373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016141561029257507f000000000000000000000000000000000000000000000000000000000000000090565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161415610107576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e20667260448201527f6f6d207468652070726f78792061646d696e000000000000000000000000000060648201526084015b60405180910390fd5b3660008037600080366000845af43d6000803e8080156103ec573d6000f35b3d6000fd5b6103fa8161043e565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b6104cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e74726163742061646472657373000000000060648201526084016103c4565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b803573ffffffffffffffffffffffffffffffffffffffff8116811461051457600080fd5b919050565b60006020828403121561052b57600080fd5b610534826104f0565b9392505050565b60008060006040848603121561055057600080fd5b610559846104f0565b9250602084013567ffffffffffffffff8082111561057657600080fd5b818601915086601f83011261058a57600080fd5b81358181111561059957600080fd5b8760208285010111156105ab57600080fd5b6020830194508093505050509250925092565b818382376000910190815291905056fea2646970667358221220e82eb5db7a922c0abbee6f27200b3a3683020e1f521120f9bedf4dd21641994464736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
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
        anonymous?: undefined;
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
        anonymous?: undefined;
    })[];
    static createInterface(): BaseImmutableAdminUpgradeabilityProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BaseImmutableAdminUpgradeabilityProxy;
}
export {};
//# sourceMappingURL=BaseImmutableAdminUpgradeabilityProxy__factory.d.ts.map