import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface LiquidationLogicInterface extends utils.Interface {
    functions: {
        "CLOSE_FACTOR_HF_THRESHOLD()": FunctionFragment;
        "MAX_LIQUIDATION_CLOSE_FACTOR()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CLOSE_FACTOR_HF_THRESHOLD" | "MAX_LIQUIDATION_CLOSE_FACTOR"): FunctionFragment;
    encodeFunctionData(functionFragment: "CLOSE_FACTOR_HF_THRESHOLD", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_LIQUIDATION_CLOSE_FACTOR", values?: undefined): string;
    decodeFunctionResult(functionFragment: "CLOSE_FACTOR_HF_THRESHOLD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_LIQUIDATION_CLOSE_FACTOR", data: BytesLike): Result;
    events: {
        "LiquidationCall(address,address,address,uint256,uint256,address,bool)": EventFragment;
        "ReserveUsedAsCollateralDisabled(address,address)": EventFragment;
        "ReserveUsedAsCollateralEnabled(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiquidationCall"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveUsedAsCollateralDisabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveUsedAsCollateralEnabled"): EventFragment;
}
export interface LiquidationCallEventObject {
    collateralAsset: string;
    debtAsset: string;
    user: string;
    debtToCover: BigNumber;
    liquidatedCollateralAmount: BigNumber;
    liquidator: string;
    receiveAToken: boolean;
}
export type LiquidationCallEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    boolean
], LiquidationCallEventObject>;
export type LiquidationCallEventFilter = TypedEventFilter<LiquidationCallEvent>;
export interface ReserveUsedAsCollateralDisabledEventObject {
    reserve: string;
    user: string;
}
export type ReserveUsedAsCollateralDisabledEvent = TypedEvent<[
    string,
    string
], ReserveUsedAsCollateralDisabledEventObject>;
export type ReserveUsedAsCollateralDisabledEventFilter = TypedEventFilter<ReserveUsedAsCollateralDisabledEvent>;
export interface ReserveUsedAsCollateralEnabledEventObject {
    reserve: string;
    user: string;
}
export type ReserveUsedAsCollateralEnabledEvent = TypedEvent<[
    string,
    string
], ReserveUsedAsCollateralEnabledEventObject>;
export type ReserveUsedAsCollateralEnabledEventFilter = TypedEventFilter<ReserveUsedAsCollateralEnabledEvent>;
export interface LiquidationLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LiquidationLogicInterface;
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
        CLOSE_FACTOR_HF_THRESHOLD(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_LIQUIDATION_CLOSE_FACTOR(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    CLOSE_FACTOR_HF_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_LIQUIDATION_CLOSE_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        CLOSE_FACTOR_HF_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_LIQUIDATION_CLOSE_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "LiquidationCall(address,address,address,uint256,uint256,address,bool)"(collateralAsset?: PromiseOrValue<string> | null, debtAsset?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, debtToCover?: null, liquidatedCollateralAmount?: null, liquidator?: null, receiveAToken?: null): LiquidationCallEventFilter;
        LiquidationCall(collateralAsset?: PromiseOrValue<string> | null, debtAsset?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, debtToCover?: null, liquidatedCollateralAmount?: null, liquidator?: null, receiveAToken?: null): LiquidationCallEventFilter;
        "ReserveUsedAsCollateralDisabled(address,address)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralDisabledEventFilter;
        ReserveUsedAsCollateralDisabled(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralDisabledEventFilter;
        "ReserveUsedAsCollateralEnabled(address,address)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralEnabledEventFilter;
        ReserveUsedAsCollateralEnabled(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralEnabledEventFilter;
    };
    estimateGas: {
        CLOSE_FACTOR_HF_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_LIQUIDATION_CLOSE_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        CLOSE_FACTOR_HF_THRESHOLD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_LIQUIDATION_CLOSE_FACTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=LiquidationLogic.d.ts.map