import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface MockPeripheryContractV2Interface extends utils.Interface {
    functions: {
        "getAddressesProvider()": FunctionFragment;
        "getManager()": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "setManager(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAddressesProvider" | "getManager" | "initialize" | "setManager"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAddressesProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "getManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setManager", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "getAddressesProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setManager", data: BytesLike): Result;
    events: {};
}
export interface MockPeripheryContractV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockPeripheryContractV2Interface;
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
        getAddressesProvider(overrides?: CallOverrides): Promise<[string]>;
        getManager(overrides?: CallOverrides): Promise<[string]>;
        initialize(addressesProvider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setManager(newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getAddressesProvider(overrides?: CallOverrides): Promise<string>;
    getManager(overrides?: CallOverrides): Promise<string>;
    initialize(addressesProvider: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setManager(newManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getAddressesProvider(overrides?: CallOverrides): Promise<string>;
        getManager(overrides?: CallOverrides): Promise<string>;
        initialize(addressesProvider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setManager(newManager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getAddressesProvider(overrides?: CallOverrides): Promise<BigNumber>;
        getManager(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(addressesProvider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setManager(newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getAddressesProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(addressesProvider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setManager(newManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MockPeripheryContractV2.d.ts.map