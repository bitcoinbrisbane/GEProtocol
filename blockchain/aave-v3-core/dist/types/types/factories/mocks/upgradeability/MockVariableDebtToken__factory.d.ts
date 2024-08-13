import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { MockVariableDebtToken, MockVariableDebtTokenInterface } from "../../../mocks/upgradeability/MockVariableDebtToken";
type MockVariableDebtTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockVariableDebtToken__factory extends ContractFactory {
    constructor(...args: MockVariableDebtTokenConstructorParams);
    deploy(pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockVariableDebtToken>;
    getDeployTransaction(pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockVariableDebtToken;
    connect(signer: Signer): MockVariableDebtToken__factory;
    static readonly bytecode = "0x60e0604052600080553480156200001557600080fd5b50604051620027c2380380620027c2833981016040819052620000389162000247565b80806040518060400160405280601881526020017f5641524941424c455f444542545f544f4b454e5f494d504c00000000000000008152506040518060400160405280601881526020017f5641524941424c455f444542545f544f4b454e5f494d504c0000000000000000815250600083838383838383834660808181525050836001600160a01b0316630542975c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620000f7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200011d919062000247565b6001600160a01b031660a05282516200013e90603b90602086019062000188565b5081516200015490603c90602085019062000188565b50603d805460ff191660ff9290921691909117905550506001600160a01b031660c05250620002ab98505050505050505050565b82805462000196906200026e565b90600052602060002090601f016020900481019282620001ba576000855562000205565b82601f10620001d557805160ff191683800117855562000205565b8280016001018555821562000205579182015b8281111562000205578251825591602001919060010190620001e8565b506200021392915062000217565b5090565b5b8082111562000213576000815560010162000218565b6001600160a01b03811681146200024457600080fd5b50565b6000602082840312156200025a57600080fd5b815162000267816200022e565b9392505050565b600181811c908216806200028357607f821691505b60208210811415620002a557634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c0516124bd620003056000396000818161037e01528181610a3901528181610b7f01528181610c4e01528181610e1401528181610f6f015261124f0152600061103b01526000610ab801526124bd6000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c80637ecebe0011610104578063b9a7b622116100a2578063e075398611610071578063e0753986146104ee578063e655dbd81461054a578063f3bfc7381461055d578063f5298aca1461058457600080fd5b8063b9a7b622146104b2578063c04a8a10146104ba578063c222ec8a146104cd578063dd62ed3e146104e057600080fd5b8063a9059cbb116100de578063a9059cbb146101fd578063b16a19de14610462578063b1bf962d14610480578063b3f1c93d1461048857600080fd5b80637ecebe001461042457806395d89b411461045a578063a457c2d7146101fd57600080fd5b8063313ce5671161017c57806370a082311161014b57806370a08231146103665780637535d2461461037957806375d26413146103c557806378160376146103e857600080fd5b8063313ce567146103035780633644e5151461031857806339509351146101fd5780636bd76d241461032057600080fd5b80630b52d558116101b85780630b52d5581461028257806318160ddd146102975780631da24f3e146102ad57806323b872dd146102f557600080fd5b806306fdde03146101df578063095ea7b3146101fd5780630afbcdc914610220575b600080fd5b6101e7610597565b6040516101f49190611e7b565b60405180910390f35b61021061020b366004611ec3565b610629565b60405190151581526020016101f4565b61026d61022e366004611eef565b73ffffffffffffffffffffffffffffffffffffffff16600090815260386020526040902054603a546fffffffffffffffffffffffffffffffff90911691565b604080519283526020830191909152016101f4565b610295610290366004611f1d565b610699565b005b61029f6109ea565b6040519081526020016101f4565b61029f6102bb366004611eef565b73ffffffffffffffffffffffffffffffffffffffff166000908152603860205260409020546fffffffffffffffffffffffffffffffff1690565b61021061020b366004611f8b565b603d5460405160ff90911681526020016101f4565b61029f610ab4565b61029f61032e366004611fcc565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260366020908152604080832093909416825291909152205490565b61029f610374366004611eef565b610aed565b6103a07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101f4565b603d54610100900473ffffffffffffffffffffffffffffffffffffffff166103a0565b6101e76040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525081565b61029f610432366004611eef565b73ffffffffffffffffffffffffffffffffffffffff1660009081526034602052604090205490565b6101e7610bf8565b60375473ffffffffffffffffffffffffffffffffffffffff166103a0565b61029f610c07565b61049b610496366004612005565b610c12565b6040805192151583526020830191909152016101f4565b61029f600181565b6102956104c8366004611ec3565b610d1b565b6102956104db36600461216e565b610d2a565b61029f61020b366004611fcc565b61029f6104fc366004611eef565b73ffffffffffffffffffffffffffffffffffffffff1660009081526038602052604090205470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1690565b610295610558366004611eef565b611037565b61029f7f323db0410fecc107e39e2af5908671f4c8d106123b35a51501bb805c5fa36aa081565b61029f610592366004612243565b611215565b6060603b80546105a690612278565b80601f01602080910402602001604051908101604052809291908181526020018280546105d290612278565b801561061f5780601f106105f45761010080835404028352916020019161061f565b820191906000526020600020905b81548152906001019060200180831161060257829003601f168201915b5050505050905090565b604080518082018252600281527f3830000000000000000000000000000000000000000000000000000000000000602082015290517f08c379a000000000000000000000000000000000000000000000000000000000815260009161069091600401611e7b565b60405180910390fd5b60408051808201909152600281527f3737000000000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff881661071b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106909190611e7b565b50834211156040518060400160405280600281526020017f37380000000000000000000000000000000000000000000000000000000000008152509061078e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106909190611e7b565b5073ffffffffffffffffffffffffffffffffffffffff8716600090815260346020526040812054906107be610ab4565b604080517f323db0410fecc107e39e2af5908671f4c8d106123b35a51501bb805c5fa36aa0602082015273ffffffffffffffffffffffffffffffffffffffff8b1691810191909152606081018990526080810184905260a0810188905260c001604051602081830303815290604052805190602001206040516020016108769291907f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8816918301919091526060820186905260808201859052915060019060a0016020604051602081039080840390855afa1580156108fc573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600281526020017f3739000000000000000000000000000000000000000000000000000000000000815250906109a2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106909190611e7b565b506109ae8260016122fb565b73ffffffffffffffffffffffffffffffffffffffff8a166000908152603460205260409020556109df8989896112da565b505050505050505050565b6037546040517f386497fd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820152600091610aaf917f00000000000000000000000000000000000000000000000000000000000000009091169063386497fd90602401602060405180830381865afa158015610a82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa69190612313565b603a5490611351565b905090565b60007f0000000000000000000000000000000000000000000000000000000000000000461415610ae5575060355490565b610aaf6113a8565b73ffffffffffffffffffffffffffffffffffffffff81166000908152603860205260408120546fffffffffffffffffffffffffffffffff1680610b335750600092915050565b6037546040517f386497fd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820152610bf1917f0000000000000000000000000000000000000000000000000000000000000000169063386497fd90602401602060405180830381865afa158015610bc6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bea9190612313565b8290611351565b9392505050565b6060603c80546105a690612278565b6000610aaf603a5490565b60408051808201909152600281527f323300000000000000000000000000000000000000000000000000000000000060208201526000908190337f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610cbb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106909190611e7b565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614610cfa57610cfa85878661146d565b610d068686868661152d565b610d0e610c07565b9150915094509492505050565b610d263383836112da565b5050565b60015460039060ff1680610d3d5750303b155b80610d49575060005481115b610dd5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201527f656e20696e697469616c697a65640000000000000000000000000000000000006064820152608401610690565b60015460ff16158015610e1257600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168117905560008290555b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600281526020017f383700000000000000000000000000000000000000000000000000000000000081525090610ecf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106909190611e7b565b50610ed98661176e565b610ee285611781565b603d80546037805473ffffffffffffffffffffffffffffffffffffffff8d81167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179091558a16610100027fffffffffffffffffffffff00000000000000000000000000000000000000000090911660ff8a1617179055610f676113a8565b6035819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff167f40251fbfb6656cfa65a00d7879029fec1fad21d28fdcff2f4f68f52795b74f2c8a8a8a8a8a8a604051610ff49695949392919061232c565b60405180910390a3801561102b57600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b50505050505050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110c891906123cc565b6040517f7be53ca100000000000000000000000000000000000000000000000000000000815233600482015290915073ffffffffffffffffffffffffffffffffffffffff821690637be53ca190602401602060405180830381865afa158015611135573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115991906123e9565b6040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250906111c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106909190611e7b565b5050603d805473ffffffffffffffffffffffffffffffffffffffff909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b60408051808201909152600281527f32330000000000000000000000000000000000000000000000000000000000006020820152600090337f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16146112bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106909190611e7b565b506112ca8460008585611794565b6112d2610c07565b949350505050565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526036602090815260408083208786168085529083529281902086905560375490518681529416939192917fda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e1910160405180910390a4505050565b600081157ffffffffffffffffffffffffffffffffffffffffffe6268e1b017bfe18bffffff8390048411151761138657600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6113d3611ab1565b8051602091820120604080518082018252600181527f310000000000000000000000000000000000000000000000000000000000000090840152805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b73ffffffffffffffffffffffffffffffffffffffff80841660009081526036602090815260408083209386168352929052908120546114ad90839061240b565b73ffffffffffffffffffffffffffffffffffffffff808616600081815260366020908152604080832089861680855292529182902085905560375491519495509216927fda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e19061151f9086815260200190565b60405180910390a450505050565b60008061153a8484611abb565b60408051808201909152600281527f32340000000000000000000000000000000000000000000000000000000000006020820152909150816115a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106909190611e7b565b5073ffffffffffffffffffffffffffffffffffffffff85166000908152603860205260408120546fffffffffffffffffffffffffffffffff8082169291611606918491700100000000000000000000000000000000900416611351565b6116108387611351565b61161a919061240b565b905061162585611afa565b73ffffffffffffffffffffffffffffffffffffffff8816600090815260386020526040902080546fffffffffffffffffffffffffffffffff92831670010000000000000000000000000000000002921691909117905561168d8761168885611afa565b611ba0565b600061169982886122fb565b90508773ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516116fb91815260200190565b60405180910390a3604080518281526020810184905290810187905273ffffffffffffffffffffffffffffffffffffffff808a1691908b16907f458f5fa412d0f69b08dd84872b0215675cc67bc1d5b6fd93300a1c3878b861969060600160405180910390a35050159695505050505050565b8051610d2690603b906020840190611d80565b8051610d2690603c906020840190611d80565b60006117a08383611abb565b60408051808201909152600281527f323500000000000000000000000000000000000000000000000000000000000060208201529091508161180f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106909190611e7b565b5073ffffffffffffffffffffffffffffffffffffffff85166000908152603860205260408120546fffffffffffffffffffffffffffffffff808216929161186c918491700100000000000000000000000000000000900416611351565b6118768386611351565b611880919061240b565b905061188b84611afa565b73ffffffffffffffffffffffffffffffffffffffff8816600090815260386020526040902080546fffffffffffffffffffffffffffffffff9283167001000000000000000000000000000000000292169190911790556118f3876118ee85611afa565b611d1c565b848111156119d2576000611907868361240b565b90508773ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161196991815260200190565b60405180910390a3604080518281526020810184905290810186905273ffffffffffffffffffffffffffffffffffffffff89169081907f458f5fa412d0f69b08dd84872b0215675cc67bc1d5b6fd93300a1c3878b861969060600160405180910390a350611aa8565b60006119de828761240b565b9050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611a4091815260200190565b60405180910390a3604080518281526020810184905290810186905273ffffffffffffffffffffffffffffffffffffffff80891691908a16907f4cf25bc1d991c17529c25213d3cc0cda295eeaad5f13f361969b12ea48015f909060600160405180910390a3505b50505050505050565b6060610aaf610597565b600081156b033b2e3c9fd0803ce800000060028404190484111715611adf57600080fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b60006fffffffffffffffffffffffffffffffff821115611b9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201527f32382062697473000000000000000000000000000000000000000000000000006064820152608401610690565b5090565b603a54611bbf6fffffffffffffffffffffffffffffffff8316826122fb565b603a5573ffffffffffffffffffffffffffffffffffffffff83166000908152603860205260409020546fffffffffffffffffffffffffffffffff16611c048382612422565b73ffffffffffffffffffffffffffffffffffffffff858116600090815260386020526040902080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff9390931692909217909155603d546101009004168015611d15576040517f31873e2e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152602482018590526fffffffffffffffffffffffffffffffff841660448301528216906331873e2e90606401600060405180830381600087803b158015611d0157600080fd5b505af11580156109df573d6000803e3d6000fd5b5050505050565b603a54611d3b6fffffffffffffffffffffffffffffffff83168261240b565b603a5573ffffffffffffffffffffffffffffffffffffffff83166000908152603860205260409020546fffffffffffffffffffffffffffffffff16611c048382612456565b828054611d8c90612278565b90600052602060002090601f016020900481019282611dae5760008555611df4565b82601f10611dc757805160ff1916838001178555611df4565b82800160010185558215611df4579182015b82811115611df4578251825591602001919060010190611dd9565b50611b9c9291505b80821115611b9c5760008155600101611dfc565b6000815180845260005b81811015611e3657602081850181015186830182015201611e1a565b81811115611e48576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610bf16020830184611e10565b73ffffffffffffffffffffffffffffffffffffffff81168114611eb057600080fd5b50565b8035611ebe81611e8e565b919050565b60008060408385031215611ed657600080fd5b8235611ee181611e8e565b946020939093013593505050565b600060208284031215611f0157600080fd5b8135610bf181611e8e565b803560ff81168114611ebe57600080fd5b600080600080600080600060e0888a031215611f3857600080fd5b8735611f4381611e8e565b96506020880135611f5381611e8e565b95506040880135945060608801359350611f6f60808901611f0c565b925060a0880135915060c0880135905092959891949750929550565b600080600060608486031215611fa057600080fd5b8335611fab81611e8e565b92506020840135611fbb81611e8e565b929592945050506040919091013590565b60008060408385031215611fdf57600080fd5b8235611fea81611e8e565b91506020830135611ffa81611e8e565b809150509250929050565b6000806000806080858703121561201b57600080fd5b843561202681611e8e565b9350602085013561203681611e8e565b93969395505050506040820135916060013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261208b57600080fd5b813567ffffffffffffffff808211156120a6576120a661204b565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156120ec576120ec61204b565b8160405283815286602085880101111561210557600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008083601f84011261213757600080fd5b50813567ffffffffffffffff81111561214f57600080fd5b60208301915083602082850101111561216757600080fd5b9250929050565b60008060008060008060008060e0898b03121561218a57600080fd5b883561219581611e8e565b975060208901356121a581611e8e565b96506121b360408a01611eb3565b95506121c160608a01611f0c565b9450608089013567ffffffffffffffff808211156121de57600080fd5b6121ea8c838d0161207a565b955060a08b013591508082111561220057600080fd5b61220c8c838d0161207a565b945060c08b013591508082111561222257600080fd5b5061222f8b828c01612125565b999c989b5096995094979396929594505050565b60008060006060848603121561225857600080fd5b833561226381611e8e565b95602085013595506040909401359392505050565b600181811c9082168061228c57607f821691505b602082108114156122c6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561230e5761230e6122cc565b500190565b60006020828403121561232557600080fd5b5051919050565b73ffffffffffffffffffffffffffffffffffffffff8716815260ff8616602082015260a06040820152600061236460a0830187611e10565b82810360608401526123768187611e10565b905082810360808401528381528385602083013760006020858301015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f860116820101915050979650505050505050565b6000602082840312156123de57600080fd5b8151610bf181611e8e565b6000602082840312156123fb57600080fd5b81518015158114610bf157600080fd5b60008282101561241d5761241d6122cc565b500390565b60006fffffffffffffffffffffffffffffffff80831681851680830382111561244d5761244d6122cc565b01949350505050565b60006fffffffffffffffffffffffffffffffff8381169083168181101561247f5761247f6122cc565b03939250505056fea264697066735822122000f4562bffe853f0ac0a29a385a30de82985a21e620daafd354694785019fc9964736f6c634300080a0033";
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
    static createInterface(): MockVariableDebtTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockVariableDebtToken;
}
export {};
//# sourceMappingURL=MockVariableDebtToken__factory.d.ts.map