import type { BaseContract, BigNumber, BigNumberish, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface SupplyLogicInterface extends utils.Interface {
    functions: {};
    events: {
        "ReserveUsedAsCollateralDisabled(address,address)": EventFragment;
        "ReserveUsedAsCollateralEnabled(address,address)": EventFragment;
        "Supply(address,address,address,uint256,uint16)": EventFragment;
        "Withdraw(address,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ReserveUsedAsCollateralDisabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveUsedAsCollateralEnabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Supply"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
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
export interface SupplyEventObject {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    referralCode: number;
}
export type SupplyEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number
], SupplyEventObject>;
export type SupplyEventFilter = TypedEventFilter<SupplyEvent>;
export interface WithdrawEventObject {
    reserve: string;
    user: string;
    to: string;
    amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], WithdrawEventObject>;
export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface SupplyLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SupplyLogicInterface;
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
        "ReserveUsedAsCollateralDisabled(address,address)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralDisabledEventFilter;
        ReserveUsedAsCollateralDisabled(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralDisabledEventFilter;
        "ReserveUsedAsCollateralEnabled(address,address)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralEnabledEventFilter;
        ReserveUsedAsCollateralEnabled(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralEnabledEventFilter;
        "Supply(address,address,address,uint256,uint16)"(reserve?: PromiseOrValue<string> | null, user?: null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, referralCode?: PromiseOrValue<BigNumberish> | null): SupplyEventFilter;
        Supply(reserve?: PromiseOrValue<string> | null, user?: null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, referralCode?: PromiseOrValue<BigNumberish> | null): SupplyEventFilter;
        "Withdraw(address,address,address,uint256)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): WithdrawEventFilter;
        Withdraw(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): WithdrawEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
//# sourceMappingURL=SupplyLogic.d.ts.map