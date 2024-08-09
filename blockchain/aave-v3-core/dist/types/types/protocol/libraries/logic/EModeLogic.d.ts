import type { BaseContract, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface EModeLogicInterface extends utils.Interface {
    functions: {};
    events: {
        "UserEModeSet(address,uint8)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "UserEModeSet"): EventFragment;
}
export interface UserEModeSetEventObject {
    user: string;
    categoryId: number;
}
export type UserEModeSetEvent = TypedEvent<[
    string,
    number
], UserEModeSetEventObject>;
export type UserEModeSetEventFilter = TypedEventFilter<UserEModeSetEvent>;
export interface EModeLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EModeLogicInterface;
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
        "UserEModeSet(address,uint8)"(user?: PromiseOrValue<string> | null, categoryId?: null): UserEModeSetEventFilter;
        UserEModeSet(user?: PromiseOrValue<string> | null, categoryId?: null): UserEModeSetEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
//# sourceMappingURL=EModeLogic.d.ts.map