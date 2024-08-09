import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface MockPeripheryContractV1Interface extends utils.Interface {
    functions: {
        "getManager()": FunctionFragment;
        "initialize(address,uint256)": FunctionFragment;
        "setManager(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getManager" | "initialize" | "setManager"): FunctionFragment;
    encodeFunctionData(functionFragment: "getManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setManager", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "getManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setManager", data: BytesLike): Result;
    events: {};
}
export interface MockPeripheryContractV1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockPeripheryContractV1Interface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        getManager(overrides?: CallOverrides): Promise<[string]>;
        initialize(manager: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setManager(newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getManager(overrides?: CallOverrides): Promise<string>;
    initialize(manager: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setManager(newManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getManager(overrides?: CallOverrides): Promise<string>;
        initialize(manager: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setManager(newManager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getManager(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(manager: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setManager(newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(manager: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setManager(newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MockPeripheryContractV1.d.ts.map