import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface PoolLogicInterface extends utils.Interface {
    functions: {};
    events: {
        "IsolationModeTotalDebtUpdated(address,uint256)": EventFragment;
        "MintedToTreasury(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "IsolationModeTotalDebtUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MintedToTreasury"): EventFragment;
}
export interface IsolationModeTotalDebtUpdatedEventObject {
    asset: string;
    totalDebt: BigNumber;
}
export type IsolationModeTotalDebtUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], IsolationModeTotalDebtUpdatedEventObject>;
export type IsolationModeTotalDebtUpdatedEventFilter = TypedEventFilter<IsolationModeTotalDebtUpdatedEvent>;
export interface MintedToTreasuryEventObject {
    reserve: string;
    amountMinted: BigNumber;
}
export type MintedToTreasuryEvent = TypedEvent<[
    string,
    BigNumber
], MintedToTreasuryEventObject>;
export type MintedToTreasuryEventFilter = TypedEventFilter<MintedToTreasuryEvent>;
export interface PoolLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PoolLogicInterface;
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
        "IsolationModeTotalDebtUpdated(address,uint256)"(asset?: PromiseOrValue<string> | null, totalDebt?: null): IsolationModeTotalDebtUpdatedEventFilter;
        IsolationModeTotalDebtUpdated(asset?: PromiseOrValue<string> | null, totalDebt?: null): IsolationModeTotalDebtUpdatedEventFilter;
        "MintedToTreasury(address,uint256)"(reserve?: PromiseOrValue<string> | null, amountMinted?: null): MintedToTreasuryEventFilter;
        MintedToTreasury(reserve?: PromiseOrValue<string> | null, amountMinted?: null): MintedToTreasuryEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
//# sourceMappingURL=PoolLogic.d.ts.map