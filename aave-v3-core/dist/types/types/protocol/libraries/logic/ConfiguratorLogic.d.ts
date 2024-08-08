import type { BaseContract, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface ConfiguratorLogicInterface extends utils.Interface {
    functions: {};
    events: {
        "ATokenUpgraded(address,address,address)": EventFragment;
        "ReserveInitialized(address,address,address,address,address)": EventFragment;
        "StableDebtTokenUpgraded(address,address,address)": EventFragment;
        "VariableDebtTokenUpgraded(address,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ATokenUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StableDebtTokenUpgraded"): EventFragment;
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
export interface ConfiguratorLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ConfiguratorLogicInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "ATokenUpgraded(address,address,address)"(asset?: PromiseOrValue<string> | null, proxy?: PromiseOrValue<string> | null, implementation?: PromiseOrValue<string> | null): ATokenUpgradedEventFilter;
        ATokenUpgraded(asset?: PromiseOrValue<string> | null, proxy?: PromiseOrValue<string> | null, implementation?: PromiseOrValue<string> | null): ATokenUpgradedEventFilter;
        "ReserveInitialized(address,address,address,address,address)"(asset?: PromiseOrValue<string> | null, aToken?: PromiseOrValue<string> | null, stableDebtToken?: null, variableDebtToken?: null, interestRateStrategyAddress?: null): ReserveInitializedEventFilter;
        ReserveInitialized(asset?: PromiseOrValue<string> | null, aToken?: PromiseOrValue<string> | null, stableDebtToken?: null, variableDebtToken?: null, interestRateStrategyAddress?: null): ReserveInitializedEventFilter;
        "StableDebtTokenUpgraded(address,address,address)"(asset?: PromiseOrValue<string> | null, proxy?: PromiseOrValue<string> | null, implementation?: PromiseOrValue<string> | null): StableDebtTokenUpgradedEventFilter;
        StableDebtTokenUpgraded(asset?: PromiseOrValue<string> | null, proxy?: PromiseOrValue<string> | null, implementation?: PromiseOrValue<string> | null): StableDebtTokenUpgradedEventFilter;
        "VariableDebtTokenUpgraded(address,address,address)"(asset?: PromiseOrValue<string> | null, proxy?: PromiseOrValue<string> | null, implementation?: PromiseOrValue<string> | null): VariableDebtTokenUpgradedEventFilter;
        VariableDebtTokenUpgraded(asset?: PromiseOrValue<string> | null, proxy?: PromiseOrValue<string> | null, implementation?: PromiseOrValue<string> | null): VariableDebtTokenUpgradedEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
//# sourceMappingURL=ConfiguratorLogic.d.ts.map