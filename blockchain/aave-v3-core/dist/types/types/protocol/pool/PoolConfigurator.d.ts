import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace ConfiguratorInputTypes {
    type InitReserveInputStruct = {
        aTokenImpl: PromiseOrValue<string>;
        stableDebtTokenImpl: PromiseOrValue<string>;
        variableDebtTokenImpl: PromiseOrValue<string>;
        underlyingAssetDecimals: PromiseOrValue<BigNumberish>;
        interestRateStrategyAddress: PromiseOrValue<string>;
        underlyingAsset: PromiseOrValue<string>;
        treasury: PromiseOrValue<string>;
        incentivesController: PromiseOrValue<string>;
        aTokenName: PromiseOrValue<string>;
        aTokenSymbol: PromiseOrValue<string>;
        variableDebtTokenName: PromiseOrValue<string>;
        variableDebtTokenSymbol: PromiseOrValue<string>;
        stableDebtTokenName: PromiseOrValue<string>;
        stableDebtTokenSymbol: PromiseOrValue<string>;
        params: PromiseOrValue<BytesLike>;
    };
    type InitReserveInputStructOutput = [
        string,
        string,
        string,
        number,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        aTokenImpl: string;
        stableDebtTokenImpl: string;
        variableDebtTokenImpl: string;
        underlyingAssetDecimals: number;
        interestRateStrategyAddress: string;
        underlyingAsset: string;
        treasury: string;
        incentivesController: string;
        aTokenName: string;
        aTokenSymbol: string;
        variableDebtTokenName: string;
        variableDebtTokenSymbol: string;
        stableDebtTokenName: string;
        stableDebtTokenSymbol: string;
        params: string;
    };
    type UpdateATokenInputStruct = {
        asset: PromiseOrValue<string>;
        treasury: PromiseOrValue<string>;
        incentivesController: PromiseOrValue<string>;
        name: PromiseOrValue<string>;
        symbol: PromiseOrValue<string>;
        implementation: PromiseOrValue<string>;
        params: PromiseOrValue<BytesLike>;
    };
    type UpdateATokenInputStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        asset: string;
        treasury: string;
        incentivesController: string;
        name: string;
        symbol: string;
        implementation: string;
        params: string;
    };
    type UpdateDebtTokenInputStruct = {
        asset: PromiseOrValue<string>;
        incentivesController: PromiseOrValue<string>;
        name: PromiseOrValue<string>;
        symbol: PromiseOrValue<string>;
        implementation: PromiseOrValue<string>;
        params: PromiseOrValue<BytesLike>;
    };
    type UpdateDebtTokenInputStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        asset: string;
        incentivesController: string;
        name: string;
        symbol: string;
        implementation: string;
        params: string;
    };
}
export interface PoolConfiguratorInterface extends utils.Interface {
    functions: {
        "CONFIGURATOR_REVISION()": FunctionFragment;
        "configureReserveAsCollateral(address,uint256,uint256,uint256)": FunctionFragment;
        "dropReserve(address)": FunctionFragment;
        "initReserves((address,address,address,uint8,address,address,address,address,string,string,string,string,string,string,bytes)[])": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "setAssetEModeCategory(address,uint8)": FunctionFragment;
        "setBorrowCap(address,uint256)": FunctionFragment;
        "setBorrowableInIsolation(address,bool)": FunctionFragment;
        "setDebtCeiling(address,uint256)": FunctionFragment;
        "setEModeCategory(uint8,uint16,uint16,uint16,address,string)": FunctionFragment;
        "setLiquidationProtocolFee(address,uint256)": FunctionFragment;
        "setPoolPause(bool)": FunctionFragment;
        "setReserveActive(address,bool)": FunctionFragment;
        "setReserveBorrowing(address,bool)": FunctionFragment;
        "setReserveFactor(address,uint256)": FunctionFragment;
        "setReserveFlashLoaning(address,bool)": FunctionFragment;
        "setReserveFreeze(address,bool)": FunctionFragment;
        "setReserveInterestRateStrategyAddress(address,address)": FunctionFragment;
        "setReservePause(address,bool)": FunctionFragment;
        "setReserveStableRateBorrowing(address,bool)": FunctionFragment;
        "setSiloedBorrowing(address,bool)": FunctionFragment;
        "setSupplyCap(address,uint256)": FunctionFragment;
        "setUnbackedMintCap(address,uint256)": FunctionFragment;
        "updateAToken((address,address,address,string,string,address,bytes))": FunctionFragment;
        "updateBridgeProtocolFee(uint256)": FunctionFragment;
        "updateFlashloanPremiumToProtocol(uint128)": FunctionFragment;
        "updateFlashloanPremiumTotal(uint128)": FunctionFragment;
        "updateStableDebtToken((address,address,string,string,address,bytes))": FunctionFragment;
        "updateVariableDebtToken((address,address,string,string,address,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CONFIGURATOR_REVISION" | "configureReserveAsCollateral" | "dropReserve" | "initReserves" | "initialize" | "setAssetEModeCategory" | "setBorrowCap" | "setBorrowableInIsolation" | "setDebtCeiling" | "setEModeCategory" | "setLiquidationProtocolFee" | "setPoolPause" | "setReserveActive" | "setReserveBorrowing" | "setReserveFactor" | "setReserveFlashLoaning" | "setReserveFreeze" | "setReserveInterestRateStrategyAddress" | "setReservePause" | "setReserveStableRateBorrowing" | "setSiloedBorrowing" | "setSupplyCap" | "setUnbackedMintCap" | "updateAToken" | "updateBridgeProtocolFee" | "updateFlashloanPremiumToProtocol" | "updateFlashloanPremiumTotal" | "updateStableDebtToken" | "updateVariableDebtToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "CONFIGURATOR_REVISION", values?: undefined): string;
    encodeFunctionData(functionFragment: "configureReserveAsCollateral", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "dropReserve", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initReserves", values: [ConfiguratorInputTypes.InitReserveInputStruct[]]): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setAssetEModeCategory", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setBorrowCap", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setBorrowableInIsolation", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setDebtCeiling", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setEModeCategory", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "setLiquidationProtocolFee", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setPoolPause", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setReserveActive", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setReserveBorrowing", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setReserveFactor", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setReserveFlashLoaning", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setReserveFreeze", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setReserveInterestRateStrategyAddress", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setReservePause", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setReserveStableRateBorrowing", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setSiloedBorrowing", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setSupplyCap", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setUnbackedMintCap", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateAToken", values: [ConfiguratorInputTypes.UpdateATokenInputStruct]): string;
    encodeFunctionData(functionFragment: "updateBridgeProtocolFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateFlashloanPremiumToProtocol", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateFlashloanPremiumTotal", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateStableDebtToken", values: [ConfiguratorInputTypes.UpdateDebtTokenInputStruct]): string;
    encodeFunctionData(functionFragment: "updateVariableDebtToken", values: [ConfiguratorInputTypes.UpdateDebtTokenInputStruct]): string;
    decodeFunctionResult(functionFragment: "CONFIGURATOR_REVISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "configureReserveAsCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dropReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAssetEModeCategory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBorrowCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBorrowableInIsolation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDebtCeiling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEModeCategory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidationProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReserveActive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReserveBorrowing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReserveFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReserveFlashLoaning", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReserveFreeze", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReserveInterestRateStrategyAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReservePause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReserveStableRateBorrowing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSiloedBorrowing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSupplyCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUnbackedMintCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBridgeProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFlashloanPremiumToProtocol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFlashloanPremiumTotal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateStableDebtToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateVariableDebtToken", data: BytesLike): Result;
    events: {
        "ATokenUpgraded(address,address,address)": EventFragment;
        "BorrowCapChanged(address,uint256,uint256)": EventFragment;
        "BorrowableInIsolationChanged(address,bool)": EventFragment;
        "BridgeProtocolFeeUpdated(uint256,uint256)": EventFragment;
        "CollateralConfigurationChanged(address,uint256,uint256,uint256)": EventFragment;
        "DebtCeilingChanged(address,uint256,uint256)": EventFragment;
        "EModeAssetCategoryChanged(address,uint8,uint8)": EventFragment;
        "EModeCategoryAdded(uint8,uint256,uint256,uint256,address,string)": EventFragment;
        "FlashloanPremiumToProtocolUpdated(uint128,uint128)": EventFragment;
        "FlashloanPremiumTotalUpdated(uint128,uint128)": EventFragment;
        "LiquidationProtocolFeeChanged(address,uint256,uint256)": EventFragment;
        "ReserveActive(address,bool)": EventFragment;
        "ReserveBorrowing(address,bool)": EventFragment;
        "ReserveDropped(address)": EventFragment;
        "ReserveFactorChanged(address,uint256,uint256)": EventFragment;
        "ReserveFlashLoaning(address,bool)": EventFragment;
        "ReserveFrozen(address,bool)": EventFragment;
        "ReserveInitialized(address,address,address,address,address)": EventFragment;
        "ReserveInterestRateStrategyChanged(address,address,address)": EventFragment;
        "ReservePaused(address,bool)": EventFragment;
        "ReserveStableRateBorrowing(address,bool)": EventFragment;
        "SiloedBorrowingChanged(address,bool,bool)": EventFragment;
        "StableDebtTokenUpgraded(address,address,address)": EventFragment;
        "SupplyCapChanged(address,uint256,uint256)": EventFragment;
        "UnbackedMintCapChanged(address,uint256,uint256)": EventFragment;
        "VariableDebtTokenUpgraded(address,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ATokenUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BorrowCapChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BorrowableInIsolationChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeProtocolFeeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CollateralConfigurationChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DebtCeilingChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EModeAssetCategoryChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EModeCategoryAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlashloanPremiumToProtocolUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlashloanPremiumTotalUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidationProtocolFeeChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveActive"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveBorrowing"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveDropped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveFactorChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveFlashLoaning"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveFrozen"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveInterestRateStrategyChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReservePaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveStableRateBorrowing"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SiloedBorrowingChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StableDebtTokenUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SupplyCapChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnbackedMintCapChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VariableDebtTokenUpgraded"): EventFragment;
}
export interface ATokenUpgradedEventObject {
    asset: string;
    proxy: string;
    implementation: string;
}
export type ATokenUpgradedEvent = TypedEvent<[
    string,
    string,
    string
], ATokenUpgradedEventObject>;
export type ATokenUpgradedEventFilter = TypedEventFilter<ATokenUpgradedEvent>;
export interface BorrowCapChangedEventObject {
    asset: string;
    oldBorrowCap: BigNumber;
    newBorrowCap: BigNumber;
}
export type BorrowCapChangedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], BorrowCapChangedEventObject>;
export type BorrowCapChangedEventFilter = TypedEventFilter<BorrowCapChangedEvent>;
export interface BorrowableInIsolationChangedEventObject {
    asset: string;
    borrowable: boolean;
}
export type BorrowableInIsolationChangedEvent = TypedEvent<[
    string,
    boolean
], BorrowableInIsolationChangedEventObject>;
export type BorrowableInIsolationChangedEventFilter = TypedEventFilter<BorrowableInIsolationChangedEvent>;
export interface BridgeProtocolFeeUpdatedEventObject {
    oldBridgeProtocolFee: BigNumber;
    newBridgeProtocolFee: BigNumber;
}
export type BridgeProtocolFeeUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], BridgeProtocolFeeUpdatedEventObject>;
export type BridgeProtocolFeeUpdatedEventFilter = TypedEventFilter<BridgeProtocolFeeUpdatedEvent>;
export interface CollateralConfigurationChangedEventObject {
    asset: string;
    ltv: BigNumber;
    liquidationThreshold: BigNumber;
    liquidationBonus: BigNumber;
}
export type CollateralConfigurationChangedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], CollateralConfigurationChangedEventObject>;
export type CollateralConfigurationChangedEventFilter = TypedEventFilter<CollateralConfigurationChangedEvent>;
export interface DebtCeilingChangedEventObject {
    asset: string;
    oldDebtCeiling: BigNumber;
    newDebtCeiling: BigNumber;
}
export type DebtCeilingChangedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], DebtCeilingChangedEventObject>;
export type DebtCeilingChangedEventFilter = TypedEventFilter<DebtCeilingChangedEvent>;
export interface EModeAssetCategoryChangedEventObject {
    asset: string;
    oldCategoryId: number;
    newCategoryId: number;
}
export type EModeAssetCategoryChangedEvent = TypedEvent<[
    string,
    number,
    number
], EModeAssetCategoryChangedEventObject>;
export type EModeAssetCategoryChangedEventFilter = TypedEventFilter<EModeAssetCategoryChangedEvent>;
export interface EModeCategoryAddedEventObject {
    categoryId: number;
    ltv: BigNumber;
    liquidationThreshold: BigNumber;
    liquidationBonus: BigNumber;
    oracle: string;
    label: string;
}
export type EModeCategoryAddedEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
], EModeCategoryAddedEventObject>;
export type EModeCategoryAddedEventFilter = TypedEventFilter<EModeCategoryAddedEvent>;
export interface FlashloanPremiumToProtocolUpdatedEventObject {
    oldFlashloanPremiumToProtocol: BigNumber;
    newFlashloanPremiumToProtocol: BigNumber;
}
export type FlashloanPremiumToProtocolUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], FlashloanPremiumToProtocolUpdatedEventObject>;
export type FlashloanPremiumToProtocolUpdatedEventFilter = TypedEventFilter<FlashloanPremiumToProtocolUpdatedEvent>;
export interface FlashloanPremiumTotalUpdatedEventObject {
    oldFlashloanPremiumTotal: BigNumber;
    newFlashloanPremiumTotal: BigNumber;
}
export type FlashloanPremiumTotalUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], FlashloanPremiumTotalUpdatedEventObject>;
export type FlashloanPremiumTotalUpdatedEventFilter = TypedEventFilter<FlashloanPremiumTotalUpdatedEvent>;
export interface LiquidationProtocolFeeChangedEventObject {
    asset: string;
    oldFee: BigNumber;
    newFee: BigNumber;
}
export type LiquidationProtocolFeeChangedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], LiquidationProtocolFeeChangedEventObject>;
export type LiquidationProtocolFeeChangedEventFilter = TypedEventFilter<LiquidationProtocolFeeChangedEvent>;
export interface ReserveActiveEventObject {
    asset: string;
    active: boolean;
}
export type ReserveActiveEvent = TypedEvent<[
    string,
    boolean
], ReserveActiveEventObject>;
export type ReserveActiveEventFilter = TypedEventFilter<ReserveActiveEvent>;
export interface ReserveBorrowingEventObject {
    asset: string;
    enabled: boolean;
}
export type ReserveBorrowingEvent = TypedEvent<[
    string,
    boolean
], ReserveBorrowingEventObject>;
export type ReserveBorrowingEventFilter = TypedEventFilter<ReserveBorrowingEvent>;
export interface ReserveDroppedEventObject {
    asset: string;
}
export type ReserveDroppedEvent = TypedEvent<[
    string
], ReserveDroppedEventObject>;
export type ReserveDroppedEventFilter = TypedEventFilter<ReserveDroppedEvent>;
export interface ReserveFactorChangedEventObject {
    asset: string;
    oldReserveFactor: BigNumber;
    newReserveFactor: BigNumber;
}
export type ReserveFactorChangedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], ReserveFactorChangedEventObject>;
export type ReserveFactorChangedEventFilter = TypedEventFilter<ReserveFactorChangedEvent>;
export interface ReserveFlashLoaningEventObject {
    asset: string;
    enabled: boolean;
}
export type ReserveFlashLoaningEvent = TypedEvent<[
    string,
    boolean
], ReserveFlashLoaningEventObject>;
export type ReserveFlashLoaningEventFilter = TypedEventFilter<ReserveFlashLoaningEvent>;
export interface ReserveFrozenEventObject {
    asset: string;
    frozen: boolean;
}
export type ReserveFrozenEvent = TypedEvent<[
    string,
    boolean
], ReserveFrozenEventObject>;
export type ReserveFrozenEventFilter = TypedEventFilter<ReserveFrozenEvent>;
export interface ReserveInitializedEventObject {
    asset: string;
    aToken: string;
    stableDebtToken: string;
    variableDebtToken: string;
    interestRateStrategyAddress: string;
}
export type ReserveInitializedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string
], ReserveInitializedEventObject>;
export type ReserveInitializedEventFilter = TypedEventFilter<ReserveInitializedEvent>;
export interface ReserveInterestRateStrategyChangedEventObject {
    asset: string;
    oldStrategy: string;
    newStrategy: string;
}
export type ReserveInterestRateStrategyChangedEvent = TypedEvent<[
    string,
    string,
    string
], ReserveInterestRateStrategyChangedEventObject>;
export type ReserveInterestRateStrategyChangedEventFilter = TypedEventFilter<ReserveInterestRateStrategyChangedEvent>;
export interface ReservePausedEventObject {
    asset: string;
    paused: boolean;
}
export type ReservePausedEvent = TypedEvent<[
    string,
    boolean
], ReservePausedEventObject>;
export type ReservePausedEventFilter = TypedEventFilter<ReservePausedEvent>;
export interface ReserveStableRateBorrowingEventObject {
    asset: string;
    enabled: boolean;
}
export type ReserveStableRateBorrowingEvent = TypedEvent<[
    string,
    boolean
], ReserveStableRateBorrowingEventObject>;
export type ReserveStableRateBorrowingEventFilter = TypedEventFilter<ReserveStableRateBorrowingEvent>;
export interface SiloedBorrowingChangedEventObject {
    asset: string;
    oldState: boolean;
    newState: boolean;
}
export type SiloedBorrowingChangedEvent = TypedEvent<[
    string,
    boolean,
    boolean
], SiloedBorrowingChangedEventObject>;
export type SiloedBorrowingChangedEventFilter = TypedEventFilter<SiloedBorrowingChangedEvent>;
export interface StableDebtTokenUpgradedEventObject {
    asset: string;
    proxy: string;
    implementation: string;
}
export type StableDebtTokenUpgradedEvent = TypedEvent<[
    string,
    string,
    string
], StableDebtTokenUpgradedEventObject>;
export type StableDebtTokenUpgradedEventFilter = TypedEventFilter<StableDebtTokenUpgradedEvent>;
export interface SupplyCapChangedEventObject {
    asset: string;
    oldSupplyCap: BigNumber;
    newSupplyCap: BigNumber;
}
export type SupplyCapChangedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], SupplyCapChangedEventObject>;
export type SupplyCapChangedEventFilter = TypedEventFilter<SupplyCapChangedEvent>;
export interface UnbackedMintCapChangedEventObject {
    asset: string;
    oldUnbackedMintCap: BigNumber;
    newUnbackedMintCap: BigNumber;
}
export type UnbackedMintCapChangedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], UnbackedMintCapChangedEventObject>;
export type UnbackedMintCapChangedEventFilter = TypedEventFilter<UnbackedMintCapChangedEvent>;
export interface VariableDebtTokenUpgradedEventObject {
    asset: string;
    proxy: string;
    implementation: string;
}
export type VariableDebtTokenUpgradedEvent = TypedEvent<[
    string,
    string,
    string
], VariableDebtTokenUpgradedEventObject>;
export type VariableDebtTokenUpgradedEventFilter = TypedEventFilter<VariableDebtTokenUpgradedEvent>;
export interface PoolConfigurator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PoolConfiguratorInterface;
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
        CONFIGURATOR_REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;
        configureReserveAsCollateral(asset: PromiseOrValue<string>, ltv: PromiseOrValue<BigNumberish>, liquidationThreshold: PromiseOrValue<BigNumberish>, liquidationBonus: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        dropReserve(asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initReserves(input: ConfiguratorInputTypes.InitReserveInputStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(provider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAssetEModeCategory(asset: PromiseOrValue<string>, newCategoryId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBorrowCap(asset: PromiseOrValue<string>, newBorrowCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBorrowableInIsolation(asset: PromiseOrValue<string>, borrowable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDebtCeiling(asset: PromiseOrValue<string>, newDebtCeiling: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEModeCategory(categoryId: PromiseOrValue<BigNumberish>, ltv: PromiseOrValue<BigNumberish>, liquidationThreshold: PromiseOrValue<BigNumberish>, liquidationBonus: PromiseOrValue<BigNumberish>, oracle: PromiseOrValue<string>, label: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setLiquidationProtocolFee(asset: PromiseOrValue<string>, newFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPoolPause(paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReserveActive(asset: PromiseOrValue<string>, active: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReserveBorrowing(asset: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReserveFactor(asset: PromiseOrValue<string>, newReserveFactor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReserveFlashLoaning(asset: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReserveFreeze(asset: PromiseOrValue<string>, freeze: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReserveInterestRateStrategyAddress(asset: PromiseOrValue<string>, newRateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReservePause(asset: PromiseOrValue<string>, paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReserveStableRateBorrowing(asset: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSiloedBorrowing(asset: PromiseOrValue<string>, newSiloed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSupplyCap(asset: PromiseOrValue<string>, newSupplyCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUnbackedMintCap(asset: PromiseOrValue<string>, newUnbackedMintCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateAToken(input: ConfiguratorInputTypes.UpdateATokenInputStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateBridgeProtocolFee(newBridgeProtocolFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateFlashloanPremiumToProtocol(newFlashloanPremiumToProtocol: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateFlashloanPremiumTotal(newFlashloanPremiumTotal: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateStableDebtToken(input: ConfiguratorInputTypes.UpdateDebtTokenInputStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateVariableDebtToken(input: ConfiguratorInputTypes.UpdateDebtTokenInputStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    CONFIGURATOR_REVISION(overrides?: CallOverrides): Promise<BigNumber>;
    configureReserveAsCollateral(asset: PromiseOrValue<string>, ltv: PromiseOrValue<BigNumberish>, liquidationThreshold: PromiseOrValue<BigNumberish>, liquidationBonus: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    dropReserve(asset: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initReserves(input: ConfiguratorInputTypes.InitReserveInputStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(provider: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAssetEModeCategory(asset: PromiseOrValue<string>, newCategoryId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBorrowCap(asset: PromiseOrValue<string>, newBorrowCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBorrowableInIsolation(asset: PromiseOrValue<string>, borrowable: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDebtCeiling(asset: PromiseOrValue<string>, newDebtCeiling: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEModeCategory(categoryId: PromiseOrValue<BigNumberish>, ltv: PromiseOrValue<BigNumberish>, liquidationThreshold: PromiseOrValue<BigNumberish>, liquidationBonus: PromiseOrValue<BigNumberish>, oracle: PromiseOrValue<string>, label: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setLiquidationProtocolFee(asset: PromiseOrValue<string>, newFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPoolPause(paused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReserveActive(asset: PromiseOrValue<string>, active: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReserveBorrowing(asset: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReserveFactor(asset: PromiseOrValue<string>, newReserveFactor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReserveFlashLoaning(asset: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReserveFreeze(asset: PromiseOrValue<string>, freeze: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReserveInterestRateStrategyAddress(asset: PromiseOrValue<string>, newRateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReservePause(asset: PromiseOrValue<string>, paused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReserveStableRateBorrowing(asset: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSiloedBorrowing(asset: PromiseOrValue<string>, newSiloed: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSupplyCap(asset: PromiseOrValue<string>, newSupplyCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUnbackedMintCap(asset: PromiseOrValue<string>, newUnbackedMintCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateAToken(input: ConfiguratorInputTypes.UpdateATokenInputStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateBridgeProtocolFee(newBridgeProtocolFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateFlashloanPremiumToProtocol(newFlashloanPremiumToProtocol: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateFlashloanPremiumTotal(newFlashloanPremiumTotal: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateStableDebtToken(input: ConfiguratorInputTypes.UpdateDebtTokenInputStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateVariableDebtToken(input: ConfiguratorInputTypes.UpdateDebtTokenInputStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        CONFIGURATOR_REVISION(overrides?: CallOverrides): Promise<BigNumber>;
        configureReserveAsCollateral(asset: PromiseOrValue<string>, ltv: PromiseOrValue<BigNumberish>, liquidationThreshold: PromiseOrValue<BigNumberish>, liquidationBonus: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        dropReserve(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        initReserves(input: ConfiguratorInputTypes.InitReserveInputStruct[], overrides?: CallOverrides): Promise<void>;
        initialize(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setAssetEModeCategory(asset: PromiseOrValue<string>, newCategoryId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setBorrowCap(asset: PromiseOrValue<string>, newBorrowCap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setBorrowableInIsolation(asset: PromiseOrValue<string>, borrowable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setDebtCeiling(asset: PromiseOrValue<string>, newDebtCeiling: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setEModeCategory(categoryId: PromiseOrValue<BigNumberish>, ltv: PromiseOrValue<BigNumberish>, liquidationThreshold: PromiseOrValue<BigNumberish>, liquidationBonus: PromiseOrValue<BigNumberish>, oracle: PromiseOrValue<string>, label: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setLiquidationProtocolFee(asset: PromiseOrValue<string>, newFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPoolPause(paused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setReserveActive(asset: PromiseOrValue<string>, active: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setReserveBorrowing(asset: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setReserveFactor(asset: PromiseOrValue<string>, newReserveFactor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setReserveFlashLoaning(asset: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setReserveFreeze(asset: PromiseOrValue<string>, freeze: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setReserveInterestRateStrategyAddress(asset: PromiseOrValue<string>, newRateStrategyAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setReservePause(asset: PromiseOrValue<string>, paused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setReserveStableRateBorrowing(asset: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setSiloedBorrowing(asset: PromiseOrValue<string>, newSiloed: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setSupplyCap(asset: PromiseOrValue<string>, newSupplyCap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setUnbackedMintCap(asset: PromiseOrValue<string>, newUnbackedMintCap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateAToken(input: ConfiguratorInputTypes.UpdateATokenInputStruct, overrides?: CallOverrides): Promise<void>;
        updateBridgeProtocolFee(newBridgeProtocolFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateFlashloanPremiumToProtocol(newFlashloanPremiumToProtocol: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateFlashloanPremiumTotal(newFlashloanPremiumTotal: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateStableDebtToken(input: ConfiguratorInputTypes.UpdateDebtTokenInputStruct, overrides?: CallOverrides): Promise<void>;
        updateVariableDebtToken(input: ConfiguratorInputTypes.UpdateDebtTokenInputStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ATokenUpgraded(address,address,address)"(asset?: PromiseOrValue<string> | null, proxy?: PromiseOrValue<string> | null, implementation?: PromiseOrValue<string> | null): ATokenUpgradedEventFilter;
        ATokenUpgraded(asset?: PromiseOrValue<string> | null, proxy?: PromiseOrValue<string> | null, implementation?: PromiseOrValue<string> | null): ATokenUpgradedEventFilter;
        "BorrowCapChanged(address,uint256,uint256)"(asset?: PromiseOrValue<string> | null, oldBorrowCap?: null, newBorrowCap?: null): BorrowCapChangedEventFilter;
        BorrowCapChanged(asset?: PromiseOrValue<string> | null, oldBorrowCap?: null, newBorrowCap?: null): BorrowCapChangedEventFilter;
        "BorrowableInIsolationChanged(address,bool)"(asset?: null, borrowable?: null): BorrowableInIsolationChangedEventFilter;
        BorrowableInIsolationChanged(asset?: null, borrowable?: null): BorrowableInIsolationChangedEventFilter;
        "BridgeProtocolFeeUpdated(uint256,uint256)"(oldBridgeProtocolFee?: null, newBridgeProtocolFee?: null): BridgeProtocolFeeUpdatedEventFilter;
        BridgeProtocolFeeUpdated(oldBridgeProtocolFee?: null, newBridgeProtocolFee?: null): BridgeProtocolFeeUpdatedEventFilter;
        "CollateralConfigurationChanged(address,uint256,uint256,uint256)"(asset?: PromiseOrValue<string> | null, ltv?: null, liquidationThreshold?: null, liquidationBonus?: null): CollateralConfigurationChangedEventFilter;
        CollateralConfigurationChanged(asset?: PromiseOrValue<string> | null, ltv?: null, liquidationThreshold?: null, liquidationBonus?: null): CollateralConfigurationChangedEventFilter;
        "DebtCeilingChanged(address,uint256,uint256)"(asset?: PromiseOrValue<string> | null, oldDebtCeiling?: null, newDebtCeiling?: null): DebtCeilingChangedEventFilter;
        DebtCeilingChanged(asset?: PromiseOrValue<string> | null, oldDebtCeiling?: null, newDebtCeiling?: null): DebtCeilingChangedEventFilter;
        "EModeAssetCategoryChanged(address,uint8,uint8)"(asset?: PromiseOrValue<string> | null, oldCategoryId?: null, newCategoryId?: null): EModeAssetCategoryChangedEventFilter;
        EModeAssetCategoryChanged(asset?: PromiseOrValue<string> | null, oldCategoryId?: null, newCategoryId?: null): EModeAssetCategoryChangedEventFilter;
        "EModeCategoryAdded(uint8,uint256,uint256,uint256,address,string)"(categoryId?: PromiseOrValue<BigNumberish> | null, ltv?: null, liquidationThreshold?: null, liquidationBonus?: null, oracle?: null, label?: null): EModeCategoryAddedEventFilter;
        EModeCategoryAdded(categoryId?: PromiseOrValue<BigNumberish> | null, ltv?: null, liquidationThreshold?: null, liquidationBonus?: null, oracle?: null, label?: null): EModeCategoryAddedEventFilter;
        "FlashloanPremiumToProtocolUpdated(uint128,uint128)"(oldFlashloanPremiumToProtocol?: null, newFlashloanPremiumToProtocol?: null): FlashloanPremiumToProtocolUpdatedEventFilter;
        FlashloanPremiumToProtocolUpdated(oldFlashloanPremiumToProtocol?: null, newFlashloanPremiumToProtocol?: null): FlashloanPremiumToProtocolUpdatedEventFilter;
        "FlashloanPremiumTotalUpdated(uint128,uint128)"(oldFlashloanPremiumTotal?: null, newFlashloanPremiumTotal?: null): FlashloanPremiumTotalUpdatedEventFilter;
        FlashloanPremiumTotalUpdated(oldFlashloanPremiumTotal?: null, newFlashloanPremiumTotal?: null): FlashloanPremiumTotalUpdatedEventFilter;
        "LiquidationProtocolFeeChanged(address,uint256,uint256)"(asset?: PromiseOrValue<string> | null, oldFee?: null, newFee?: null): LiquidationProtocolFeeChangedEventFilter;
        LiquidationProtocolFeeChanged(asset?: PromiseOrValue<string> | null, oldFee?: null, newFee?: null): LiquidationProtocolFeeChangedEventFilter;
        "ReserveActive(address,bool)"(asset?: PromiseOrValue<string> | null, active?: null): ReserveActiveEventFilter;
        ReserveActive(asset?: PromiseOrValue<string> | null, active?: null): ReserveActiveEventFilter;
        "ReserveBorrowing(address,bool)"(asset?: PromiseOrValue<string> | null, enabled?: null): ReserveBorrowingEventFilter;
        ReserveBorrowing(asset?: PromiseOrValue<string> | null, enabled?: null): ReserveBorrowingEventFilter;
        "ReserveDropped(address)"(asset?: PromiseOrValue<string> | null): ReserveDroppedEventFilter;
        ReserveDropped(asset?: PromiseOrValue<string> | null): ReserveDroppedEventFilter;
        "ReserveFactorChanged(address,uint256,uint256)"(asset?: PromiseOrValue<string> | null, oldReserveFactor?: null, newReserveFactor?: null): ReserveFactorChangedEventFilter;
        ReserveFactorChanged(asset?: PromiseOrValue<string> | null, oldReserveFactor?: null, newReserveFactor?: null): ReserveFactorChangedEventFilter;
        "ReserveFlashLoaning(address,bool)"(asset?: PromiseOrValue<string> | null, enabled?: null): ReserveFlashLoaningEventFilter;
        ReserveFlashLoaning(asset?: PromiseOrValue<string> | null, enabled?: null): ReserveFlashLoaningEventFilter;
        "ReserveFrozen(address,bool)"(asset?: PromiseOrValue<string> | null, frozen?: null): ReserveFrozenEventFilter;
        ReserveFrozen(asset?: PromiseOrValue<string> | null, frozen?: null): ReserveFrozenEventFilter;
        "ReserveInitialized(address,address,address,address,address)"(asset?: PromiseOrValue<string> | null, aToken?: PromiseOrValue<string> | null, stableDebtToken?: null, variableDebtToken?: null, interestRateStrategyAddress?: null): ReserveInitializedEventFilter;
        ReserveInitialized(asset?: PromiseOrValue<string> | null, aToken?: PromiseOrValue<string> | null, stableDebtToken?: null, variableDebtToken?: null, interestRateStrategyAddress?: null): ReserveInitializedEventFilter;
        "ReserveInterestRateStrategyChanged(address,address,address)"(asset?: PromiseOrValue<string> | null, oldStrategy?: null, newStrategy?: null): ReserveInterestRateStrategyChangedEventFilter;
        ReserveInterestRateStrategyChanged(asset?: PromiseOrValue<string> | null, oldStrategy?: null, newStrategy?: null): ReserveInterestRateStrategyChangedEventFilter;
        "ReservePaused(address,bool)"(asset?: PromiseOrValue<string> | null, paused?: null): ReservePausedEventFilter;
        ReservePaused(asset?: PromiseOrValue<string> | null, paused?: null): ReservePausedEventFilter;
        "ReserveStableRateBorrowing(address,bool)"(asset?: PromiseOrValue<string> | null, enabled?: null): ReserveStableRateBorrowingEventFilter;
        ReserveStableRateBorrowing(asset?: PromiseOrValue<string> | null, enabled?: null): ReserveStableRateBorrowingEventFilter;
        "SiloedBorrowingChanged(address,bool,bool)"(asset?: PromiseOrValue<string> | null, oldState?: null, newState?: null): SiloedBorrowingChangedEventFilter;
        SiloedBorrowingChanged(asset?: PromiseOrValue<string> | null, oldState?: null, newState?: null): SiloedBorrowingChangedEventFilter;
        "StableDebtTokenUpgraded(address,address,address)"(asset?: PromiseOrValue<string> | null, proxy?: PromiseOrValue<string> | null, implementation?: PromiseOrValue<string> | null): StableDebtTokenUpgradedEventFilter;
        StableDebtTokenUpgraded(asset?: PromiseOrValue<string> | null, proxy?: PromiseOrValue<string> | null, implementation?: PromiseOrValue<string> | null): StableDebtTokenUpgradedEventFilter;
        "SupplyCapChanged(address,uint256,uint256)"(asset?: PromiseOrValue<string> | null, oldSupplyCap?: null, newSupplyCap?: null): SupplyCapChangedEventFilter;
        SupplyCapChanged(asset?: PromiseOrValue<string> | null, oldSupplyCap?: null, newSupplyCap?: null): SupplyCapChangedEventFilter;
        "UnbackedMintCapChanged(address,uint256,uint256)"(asset?: PromiseOrValue<string> | null, oldUnbackedMintCap?: null, newUnbackedMintCap?: null): UnbackedMintCapChangedEventFilter;
        UnbackedMintCapChanged(asset?: PromiseOrValue<string> | null, oldUnbackedMintCap?: null, newUnbackedMintCap?: null): UnbackedMintCapChangedEventFilter;
        "VariableDebtTokenUpgraded(address,address,address)"(asset?: PromiseOrValue<string> | null, proxy?: PromiseOrValue<string> | null, implementation?: PromiseOrValue<string> | null): VariableDebtTokenUpgradedEventFilter;
        VariableDebtTokenUpgraded(asset?: PromiseOrValue<string> | null, proxy?: PromiseOrValue<string> | null, implementation?: PromiseOrValue<string> | null): VariableDebtTokenUpgradedEventFilter;
    };
    estimateGas: {
        CONFIGURATOR_REVISION(overrides?: CallOverrides): Promise<BigNumber>;
        configureReserveAsCollateral(asset: PromiseOrValue<string>, ltv: PromiseOrValue<BigNumberish>, liquidationThreshold: PromiseOrValue<BigNumberish>, liquidationBonus: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        dropReserve(asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initReserves(input: ConfiguratorInputTypes.InitReserveInputStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(provider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAssetEModeCategory(asset: PromiseOrValue<string>, newCategoryId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBorrowCap(asset: PromiseOrValue<string>, newBorrowCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBorrowableInIsolation(asset: PromiseOrValue<string>, borrowable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDebtCeiling(asset: PromiseOrValue<string>, newDebtCeiling: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEModeCategory(categoryId: PromiseOrValue<BigNumberish>, ltv: PromiseOrValue<BigNumberish>, liquidationThreshold: PromiseOrValue<BigNumberish>, liquidationBonus: PromiseOrValue<BigNumberish>, oracle: PromiseOrValue<string>, label: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setLiquidationProtocolFee(asset: PromiseOrValue<string>, newFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPoolPause(paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReserveActive(asset: PromiseOrValue<string>, active: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReserveBorrowing(asset: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReserveFactor(asset: PromiseOrValue<string>, newReserveFactor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReserveFlashLoaning(asset: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReserveFreeze(asset: PromiseOrValue<string>, freeze: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReserveInterestRateStrategyAddress(asset: PromiseOrValue<string>, newRateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReservePause(asset: PromiseOrValue<string>, paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReserveStableRateBorrowing(asset: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSiloedBorrowing(asset: PromiseOrValue<string>, newSiloed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSupplyCap(asset: PromiseOrValue<string>, newSupplyCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUnbackedMintCap(asset: PromiseOrValue<string>, newUnbackedMintCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateAToken(input: ConfiguratorInputTypes.UpdateATokenInputStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateBridgeProtocolFee(newBridgeProtocolFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateFlashloanPremiumToProtocol(newFlashloanPremiumToProtocol: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateFlashloanPremiumTotal(newFlashloanPremiumTotal: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateStableDebtToken(input: ConfiguratorInputTypes.UpdateDebtTokenInputStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateVariableDebtToken(input: ConfiguratorInputTypes.UpdateDebtTokenInputStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        CONFIGURATOR_REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        configureReserveAsCollateral(asset: PromiseOrValue<string>, ltv: PromiseOrValue<BigNumberish>, liquidationThreshold: PromiseOrValue<BigNumberish>, liquidationBonus: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        dropReserve(asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initReserves(input: ConfiguratorInputTypes.InitReserveInputStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(provider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAssetEModeCategory(asset: PromiseOrValue<string>, newCategoryId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBorrowCap(asset: PromiseOrValue<string>, newBorrowCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBorrowableInIsolation(asset: PromiseOrValue<string>, borrowable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDebtCeiling(asset: PromiseOrValue<string>, newDebtCeiling: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEModeCategory(categoryId: PromiseOrValue<BigNumberish>, ltv: PromiseOrValue<BigNumberish>, liquidationThreshold: PromiseOrValue<BigNumberish>, liquidationBonus: PromiseOrValue<BigNumberish>, oracle: PromiseOrValue<string>, label: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidationProtocolFee(asset: PromiseOrValue<string>, newFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPoolPause(paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReserveActive(asset: PromiseOrValue<string>, active: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReserveBorrowing(asset: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReserveFactor(asset: PromiseOrValue<string>, newReserveFactor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReserveFlashLoaning(asset: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReserveFreeze(asset: PromiseOrValue<string>, freeze: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReserveInterestRateStrategyAddress(asset: PromiseOrValue<string>, newRateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReservePause(asset: PromiseOrValue<string>, paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReserveStableRateBorrowing(asset: PromiseOrValue<string>, enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSiloedBorrowing(asset: PromiseOrValue<string>, newSiloed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSupplyCap(asset: PromiseOrValue<string>, newSupplyCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUnbackedMintCap(asset: PromiseOrValue<string>, newUnbackedMintCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateAToken(input: ConfiguratorInputTypes.UpdateATokenInputStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateBridgeProtocolFee(newBridgeProtocolFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateFlashloanPremiumToProtocol(newFlashloanPremiumToProtocol: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateFlashloanPremiumTotal(newFlashloanPremiumTotal: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateStableDebtToken(input: ConfiguratorInputTypes.UpdateDebtTokenInputStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateVariableDebtToken(input: ConfiguratorInputTypes.UpdateDebtTokenInputStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=PoolConfigurator.d.ts.map