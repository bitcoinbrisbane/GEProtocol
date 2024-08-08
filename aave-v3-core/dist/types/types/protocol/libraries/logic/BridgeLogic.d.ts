import type { BaseContract, BigNumber, BigNumberish, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface BridgeLogicInterface extends utils.Interface {
    functions: {};
    events: {
        "BackUnbacked(address,address,uint256,uint256)": EventFragment;
        "MintUnbacked(address,address,address,uint256,uint16)": EventFragment;
        "ReserveUsedAsCollateralEnabled(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BackUnbacked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MintUnbacked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveUsedAsCollateralEnabled"): EventFragment;
}
export interface BackUnbackedEventObject {
    reserve: string;
    backer: string;
    amount: BigNumber;
    fee: BigNumber;
}
export type BackUnbackedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], BackUnbackedEventObject>;
export type BackUnbackedEventFilter = TypedEventFilter<BackUnbackedEvent>;
export interface MintUnbackedEventObject {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    referralCode: number;
}
export type MintUnbackedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number
], MintUnbackedEventObject>;
export type MintUnbackedEventFilter = TypedEventFilter<MintUnbackedEvent>;
export interface ReserveUsedAsCollateralEnabledEventObject {
    reserve: string;
    user: string;
}
export type ReserveUsedAsCollateralEnabledEvent = TypedEvent<[
    string,
    string
], ReserveUsedAsCollateralEnabledEventObject>;
export type ReserveUsedAsCollateralEnabledEventFilter = TypedEventFilter<ReserveUsedAsCollateralEnabledEvent>;
export interface BridgeLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BridgeLogicInterface;
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
        "BackUnbacked(address,address,uint256,uint256)"(reserve?: PromiseOrValue<string> | null, backer?: PromiseOrValue<string> | null, amount?: null, fee?: null): BackUnbackedEventFilter;
        BackUnbacked(reserve?: PromiseOrValue<string> | null, backer?: PromiseOrValue<string> | null, amount?: null, fee?: null): BackUnbackedEventFilter;
        "MintUnbacked(address,address,address,uint256,uint16)"(reserve?: PromiseOrValue<string> | null, user?: null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, referralCode?: PromiseOrValue<BigNumberish> | null): MintUnbackedEventFilter;
        MintUnbacked(reserve?: PromiseOrValue<string> | null, user?: null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, referralCode?: PromiseOrValue<BigNumberish> | null): MintUnbackedEventFilter;
        "ReserveUsedAsCollateralEnabled(address,address)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralEnabledEventFilter;
        ReserveUsedAsCollateralEnabled(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralEnabledEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
//# sourceMappingURL=BridgeLogic.d.ts.map