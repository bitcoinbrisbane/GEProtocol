import type { BaseContract, BigNumber, BigNumberish, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface BorrowLogicInterface extends utils.Interface {
    functions: {};
    events: {
        "Borrow(address,address,address,uint256,uint8,uint256,uint16)": EventFragment;
        "IsolationModeTotalDebtUpdated(address,uint256)": EventFragment;
        "RebalanceStableBorrowRate(address,address)": EventFragment;
        "Repay(address,address,address,uint256,bool)": EventFragment;
        "SwapBorrowRateMode(address,address,uint8)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IsolationModeTotalDebtUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RebalanceStableBorrowRate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SwapBorrowRateMode"): EventFragment;
}
export interface BorrowEventObject {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    interestRateMode: number;
    borrowRate: BigNumber;
    referralCode: number;
}
export type BorrowEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number,
    BigNumber,
    number
], BorrowEventObject>;
export type BorrowEventFilter = TypedEventFilter<BorrowEvent>;
export interface IsolationModeTotalDebtUpdatedEventObject {
    asset: string;
    totalDebt: BigNumber;
}
export type IsolationModeTotalDebtUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], IsolationModeTotalDebtUpdatedEventObject>;
export type IsolationModeTotalDebtUpdatedEventFilter = TypedEventFilter<IsolationModeTotalDebtUpdatedEvent>;
export interface RebalanceStableBorrowRateEventObject {
    reserve: string;
    user: string;
}
export type RebalanceStableBorrowRateEvent = TypedEvent<[
    string,
    string
], RebalanceStableBorrowRateEventObject>;
export type RebalanceStableBorrowRateEventFilter = TypedEventFilter<RebalanceStableBorrowRateEvent>;
export interface RepayEventObject {
    reserve: string;
    user: string;
    repayer: string;
    amount: BigNumber;
    useATokens: boolean;
}
export type RepayEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    boolean
], RepayEventObject>;
export type RepayEventFilter = TypedEventFilter<RepayEvent>;
export interface SwapBorrowRateModeEventObject {
    reserve: string;
    user: string;
    interestRateMode: number;
}
export type SwapBorrowRateModeEvent = TypedEvent<[
    string,
    string,
    number
], SwapBorrowRateModeEventObject>;
export type SwapBorrowRateModeEventFilter = TypedEventFilter<SwapBorrowRateModeEvent>;
export interface BorrowLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BorrowLogicInterface;
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
        "Borrow(address,address,address,uint256,uint8,uint256,uint16)"(reserve?: PromiseOrValue<string> | null, user?: null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, interestRateMode?: null, borrowRate?: null, referralCode?: PromiseOrValue<BigNumberish> | null): BorrowEventFilter;
        Borrow(reserve?: PromiseOrValue<string> | null, user?: null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, interestRateMode?: null, borrowRate?: null, referralCode?: PromiseOrValue<BigNumberish> | null): BorrowEventFilter;
        "IsolationModeTotalDebtUpdated(address,uint256)"(asset?: PromiseOrValue<string> | null, totalDebt?: null): IsolationModeTotalDebtUpdatedEventFilter;
        IsolationModeTotalDebtUpdated(asset?: PromiseOrValue<string> | null, totalDebt?: null): IsolationModeTotalDebtUpdatedEventFilter;
        "RebalanceStableBorrowRate(address,address)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): RebalanceStableBorrowRateEventFilter;
        RebalanceStableBorrowRate(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): RebalanceStableBorrowRateEventFilter;
        "Repay(address,address,address,uint256,bool)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, repayer?: PromiseOrValue<string> | null, amount?: null, useATokens?: null): RepayEventFilter;
        Repay(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, repayer?: PromiseOrValue<string> | null, amount?: null, useATokens?: null): RepayEventFilter;
        "SwapBorrowRateMode(address,address,uint8)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, interestRateMode?: null): SwapBorrowRateModeEventFilter;
        SwapBorrowRateMode(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, interestRateMode?: null): SwapBorrowRateModeEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
//# sourceMappingURL=BorrowLogic.d.ts.map