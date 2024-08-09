import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface MockReentrantInitializableImpleInterface extends utils.Interface {
    functions: {
        "REVISION()": FunctionFragment;
        "initialize(uint256)": FunctionFragment;
        "value()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "REVISION" | "initialize" | "value"): FunctionFragment;
    encodeFunctionData(functionFragment: "REVISION", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "value", values?: undefined): string;
    decodeFunctionResult(functionFragment: "REVISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
    events: {};
}
export interface MockReentrantInitializableImple extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockReentrantInitializableImpleInterface;
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
        initialize(val: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        value(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    REVISION(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(val: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    value(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        REVISION(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(val: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        value(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        REVISION(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(val: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        value(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(val: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        value(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MockReentrantInitializableImple.d.ts.map