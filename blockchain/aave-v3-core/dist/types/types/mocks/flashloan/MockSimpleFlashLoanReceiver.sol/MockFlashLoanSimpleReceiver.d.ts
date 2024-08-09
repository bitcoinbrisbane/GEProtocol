import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface MockFlashLoanSimpleReceiverInterface extends utils.Interface {
    functions: {
        "ADDRESSES_PROVIDER()": FunctionFragment;
        "POOL()": FunctionFragment;
        "executeOperation(address,uint256,uint256,address,bytes)": FunctionFragment;
        "getAmountToApprove()": FunctionFragment;
        "setAmountToApprove(uint256)": FunctionFragment;
        "setFailExecutionTransfer(bool)": FunctionFragment;
        "setSimulateEOA(bool)": FunctionFragment;
        "simulateEOA()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ADDRESSES_PROVIDER" | "POOL" | "executeOperation" | "getAmountToApprove" | "setAmountToApprove" | "setFailExecutionTransfer" | "setSimulateEOA" | "simulateEOA"): FunctionFragment;
    encodeFunctionData(functionFragment: "ADDRESSES_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeOperation", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getAmountToApprove", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAmountToApprove", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setFailExecutionTransfer", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setSimulateEOA", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "simulateEOA", values?: undefined): string;
    decodeFunctionResult(functionFragment: "ADDRESSES_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeOperation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountToApprove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAmountToApprove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFailExecutionTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSimulateEOA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "simulateEOA", data: BytesLike): Result;
    events: {
        "ExecutedWithFail(address,uint256,uint256)": EventFragment;
        "ExecutedWithSuccess(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ExecutedWithFail"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutedWithSuccess"): EventFragment;
}
export interface ExecutedWithFailEventObject {
    asset: string;
    amount: BigNumber;
    premium: BigNumber;
}
export type ExecutedWithFailEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], ExecutedWithFailEventObject>;
export type ExecutedWithFailEventFilter = TypedEventFilter<ExecutedWithFailEvent>;
export interface ExecutedWithSuccessEventObject {
    asset: string;
    amount: BigNumber;
    premium: BigNumber;
}
export type ExecutedWithSuccessEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], ExecutedWithSuccessEventObject>;
export type ExecutedWithSuccessEventFilter = TypedEventFilter<ExecutedWithSuccessEvent>;
export interface MockFlashLoanSimpleReceiver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockFlashLoanSimpleReceiverInterface;
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
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;
        POOL(overrides?: CallOverrides): Promise<[string]>;
        executeOperation(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, premium: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAmountToApprove(overrides?: CallOverrides): Promise<[BigNumber]>;
        setAmountToApprove(amountToApprove: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFailExecutionTransfer(fail: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSimulateEOA(flag: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        simulateEOA(overrides?: CallOverrides): Promise<[boolean]>;
    };
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
    POOL(overrides?: CallOverrides): Promise<string>;
    executeOperation(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, premium: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAmountToApprove(overrides?: CallOverrides): Promise<BigNumber>;
    setAmountToApprove(amountToApprove: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFailExecutionTransfer(fail: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSimulateEOA(flag: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    simulateEOA(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
        POOL(overrides?: CallOverrides): Promise<string>;
        executeOperation(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, premium: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        getAmountToApprove(overrides?: CallOverrides): Promise<BigNumber>;
        setAmountToApprove(amountToApprove: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setFailExecutionTransfer(fail: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setSimulateEOA(flag: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        simulateEOA(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "ExecutedWithFail(address,uint256,uint256)"(asset?: null, amount?: null, premium?: null): ExecutedWithFailEventFilter;
        ExecutedWithFail(asset?: null, amount?: null, premium?: null): ExecutedWithFailEventFilter;
        "ExecutedWithSuccess(address,uint256,uint256)"(asset?: null, amount?: null, premium?: null): ExecutedWithSuccessEventFilter;
        ExecutedWithSuccess(asset?: null, amount?: null, premium?: null): ExecutedWithSuccessEventFilter;
    };
    estimateGas: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;
        POOL(overrides?: CallOverrides): Promise<BigNumber>;
        executeOperation(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, premium: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAmountToApprove(overrides?: CallOverrides): Promise<BigNumber>;
        setAmountToApprove(amountToApprove: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFailExecutionTransfer(fail: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSimulateEOA(flag: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        simulateEOA(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeOperation(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, premium: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAmountToApprove(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAmountToApprove(amountToApprove: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFailExecutionTransfer(fail: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSimulateEOA(flag: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        simulateEOA(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MockFlashLoanSimpleReceiver.d.ts.map