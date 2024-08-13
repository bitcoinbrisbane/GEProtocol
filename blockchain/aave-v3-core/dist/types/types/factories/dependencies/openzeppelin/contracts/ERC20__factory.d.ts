import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { ERC20, ERC20Interface } from "../../../../dependencies/openzeppelin/contracts/ERC20";
type ERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20__factory extends ContractFactory {
    constructor(...args: ERC20ConstructorParams);
    deploy(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ERC20>;
    getDeployTransaction(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ERC20;
    connect(signer: Signer): ERC20__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162000d0d38038062000d0d8339810160408190526200003491620001e8565b81516200004990600390602085019062000075565b5080516200005f90600490602084019062000075565b50506005805460ff19166012179055506200028f565b828054620000839062000252565b90600052602060002090601f016020900481019282620000a75760008555620000f2565b82601f10620000c257805160ff1916838001178555620000f2565b82800160010185558215620000f2579182015b82811115620000f2578251825591602001919060010190620000d5565b506200010092915062000104565b5090565b5b8082111562000100576000815560010162000105565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200014357600080fd5b81516001600160401b03808211156200016057620001606200011b565b604051601f8301601f19908116603f011681019082821181831017156200018b576200018b6200011b565b81604052838152602092508683858801011115620001a857600080fd5b600091505b83821015620001cc5785820183015181830184015290820190620001ad565b83821115620001de5760008385830101525b9695505050505050565b60008060408385031215620001fc57600080fd5b82516001600160401b03808211156200021457600080fd5b620002228683870162000131565b935060208501519150808211156200023957600080fd5b50620002488582860162000131565b9150509250929050565b600181811c908216806200026757607f821691505b602082108114156200028957634e487b7160e01b600052602260045260246000fd5b50919050565b610a6e806200029f6000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d71461019a578063a9059cbb146101ad578063dd62ed3e146101c057600080fd5b8063395093511461014957806370a082311461015c57806395d89b411461019257600080fd5b806318160ddd116100b257806318160ddd1461010f57806323b872dd14610121578063313ce5671461013457600080fd5b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d6610206565b6040516100e3919061081a565b60405180910390f35b6100ff6100fa3660046108b6565b610298565b60405190151581526020016100e3565b6002545b6040519081526020016100e3565b6100ff61012f3660046108e0565b6102af565b60055460405160ff90911681526020016100e3565b6100ff6101573660046108b6565b610325565b61011361016a36600461091c565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100d6610368565b6100ff6101a83660046108b6565b610377565b6100ff6101bb3660046108b6565b6103d3565b6101136101ce36600461093e565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60606003805461021590610971565b80601f016020809104026020016040519081016040528092919081815260200182805461024190610971565b801561028e5780601f106102635761010080835404028352916020019161028e565b820191906000526020600020905b81548152906001019060200180831161027157829003601f168201915b5050505050905090565b60006102a53384846103e0565b5060015b92915050565b60006102bc848484610599565b61031b8433610316856040518060600160405280602881526020016109ec6028913973ffffffffffffffffffffffffffffffffffffffff8a16600090815260016020908152604080832033845290915290205491906107c3565b6103e0565b5060019392505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916102a5918590610316908661080a565b60606004805461021590610971565b60006102a5338461031685604051806060016040528060258152602001610a146025913933600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8d16845290915290205491906107c3565b60006102a5338484610599565b73ffffffffffffffffffffffffffffffffffffffff8316610487576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661052a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161047e565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff831661063c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161047e565b73ffffffffffffffffffffffffffffffffffffffff82166106df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161047e565b610729816040518060600160405280602681526020016109c66026913973ffffffffffffffffffffffffffffffffffffffff861660009081526020819052604090205491906107c3565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054610765908261080a565b73ffffffffffffffffffffffffffffffffffffffff8381166000818152602081815260409182902094909455518481529092918616917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910161058c565b8183038184821115610802576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047e919061081a565b509392505050565b808201828110156102a957600080fd5b600060208083528351808285015260005b818110156108475785810183015185820160400152820161082b565b81811115610859576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146108b157600080fd5b919050565b600080604083850312156108c957600080fd5b6108d28361088d565b946020939093013593505050565b6000806000606084860312156108f557600080fd5b6108fe8461088d565b925061090c6020850161088d565b9150604084013590509250925092565b60006020828403121561092e57600080fd5b6109378261088d565b9392505050565b6000806040838503121561095157600080fd5b61095a8361088d565b91506109686020840161088d565b90509250929050565b600181811c9082168061098557607f821691505b602082108114156109bf577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fe45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122078107621747d2147e06f26c9d211b983ba51de8d8b59b0fbb9fdc704079a3c6864736f6c634300080a0033";
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
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20;
}
export {};
//# sourceMappingURL=ERC20__factory.d.ts.map