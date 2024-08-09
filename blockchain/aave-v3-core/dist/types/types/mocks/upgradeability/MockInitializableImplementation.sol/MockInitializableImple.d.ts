import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface MockInitializableImpleInterface extends utils.Interface {
    functions: {
        "REVISION()": FunctionFragment;
        "initialize(uint256,string,uint256[])": FunctionFragment;
        "setValue(uint256)": FunctionFragment;
        "setValueViaProxy(uint256)": FunctionFragment;
        "text()": FunctionFragment;
        "value()": FunctionFragment;
        "values(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "REVISION" | "initialize" | "setValue" | "setValueViaProxy" | "text" | "value" | "values"): FunctionFragment;
    encodeFunctionData(functionFragment: "REVISION", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "setValue", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setValueViaProxy", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "text", values?: undefined): string;
    encodeFunctionData(functionFragment: "value", values?: undefined): string;
    encodeFunctionData(functionFragment: "values", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "REVISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setValueViaProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "text", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "values", data: BytesLike): Result;
    events: {};
}
export interface MockInitializableImple extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockInitializableImpleInterface;
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
        REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(val: PromiseOrValue<BigNumberish>, txt: PromiseOrValue<string>, vals: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setValue(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setValueViaProxy(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        text(overrides?: CallOverrides): Promise<[string]>;
        value(overrides?: CallOverrides): Promise<[BigNumber]>;
        values(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    REVISION(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(val: PromiseOrValue<BigNumberish>, txt: PromiseOrValue<string>, vals: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setValue(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setValueViaProxy(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    text(overrides?: CallOverrides): Promise<string>;
    value(overrides?: CallOverrides): Promise<BigNumber>;
    values(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        REVISION(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(val: PromiseOrValue<BigNumberish>, txt: PromiseOrValue<string>, vals: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        setValue(newValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setValueViaProxy(newValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        text(overrides?: CallOverrides): Promise<string>;
        value(overrides?: CallOverrides): Promise<BigNumber>;
        values(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        REVISION(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(val: PromiseOrValue<BigNumberish>, txt: PromiseOrValue<string>, vals: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setValue(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setValueViaProxy(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        text(overrides?: CallOverrides): Promise<BigNumber>;
        value(overrides?: CallOverrides): Promise<BigNumber>;
        values(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(val: PromiseOrValue<BigNumberish>, txt: PromiseOrValue<string>, vals: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setValue(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setValueViaProxy(newValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        text(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        value(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        values(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MockInitializableImple.d.ts.map