import { Signer, ContractFactory, PayableOverrides, BytesLike } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { UpgradeabilityProxy, UpgradeabilityProxyInterface } from "../../../../dependencies/openzeppelin/upgradeability/UpgradeabilityProxy";
type UpgradeabilityProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UpgradeabilityProxy__factory extends ContractFactory {
    constructor(...args: UpgradeabilityProxyConstructorParams);
    deploy(_logic: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<UpgradeabilityProxy>;
    getDeployTransaction(_logic: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): UpgradeabilityProxy;
    connect(signer: Signer): UpgradeabilityProxy__factory;
    static readonly bytecode = "0x60806040526040516103be3803806103be833981016040819052610022916101d1565b61004d60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd61029f565b60008051602061039e83398151915214610069576100696102c4565b610072826100ea565b8051156100e3576000826001600160a01b03168260405161009391906102da565b600060405180830381855af49150503d80600081146100ce576040519150601f19603f3d011682016040523d82523d6000602084013e6100d3565b606091505b50509050806100e157600080fd5b505b50506102f6565b6100fd8161018560201b61003b1760201c565b6101735760405162461bcd60e51b815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e747261637420616464726573730000000000606482015260840160405180910390fd5b60008051602061039e83398151915255565b3b151590565b634e487b7160e01b600052604160045260246000fd5b60005b838110156101bc5781810151838201526020016101a4565b838111156101cb576000848401525b50505050565b600080604083850312156101e457600080fd5b82516001600160a01b03811681146101fb57600080fd5b60208401519092506001600160401b038082111561021857600080fd5b818501915085601f83011261022c57600080fd5b81518181111561023e5761023e61018b565b604051601f8201601f19908116603f011681019083821181831017156102665761026661018b565b8160405282815288602084870101111561027f57600080fd5b6102908360208301602088016101a1565b80955050505050509250929050565b6000828210156102bf57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b600082516102ec8184602087016101a1565b9190910192915050565b609a806103046000396000f3fe6080604052600a600c565b005b603960357f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6041565b565b3b151590565b3660008037600080366000845af43d6000803e808015605f573d6000f35b3d6000fdfea26469706673582212206335f4f8dec32191f9e9dca10e71a27c37cfa64a1e5ea4affa4fb840917af2d164736f6c634300080a0033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc";
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
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
    })[];
    static createInterface(): UpgradeabilityProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UpgradeabilityProxy;
}
export {};
//# sourceMappingURL=UpgradeabilityProxy__factory.d.ts.map