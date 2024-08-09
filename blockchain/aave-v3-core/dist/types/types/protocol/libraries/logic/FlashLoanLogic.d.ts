import type { BaseContract, BigNumber, BigNumberish, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface FlashLoanLogicInterface extends utils.Interface {
    functions: {};
    events: {
        "FlashLoan(address,address,address,uint256,uint8,uint256,uint16)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FlashLoan"): EventFragment;
}
export interface FlashLoanEventObject {
    target: string;
    initiator: string;
    asset: string;
    amount: BigNumber;
    interestRateMode: number;
    premium: BigNumber;
    referralCode: number;
}
export type FlashLoanEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number,
    BigNumber,
    number
], FlashLoanEventObject>;
export type FlashLoanEventFilter = TypedEventFilter<FlashLoanEvent>;
export interface FlashLoanLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FlashLoanLogicInterface;
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
        "FlashLoan(address,address,address,uint256,uint8,uint256,uint16)"(target?: PromiseOrValue<string> | null, initiator?: null, asset?: PromiseOrValue<string> | null, amount?: null, interestRateMode?: null, premium?: null, referralCode?: PromiseOrValue<BigNumberish> | null): FlashLoanEventFilter;
        FlashLoan(target?: PromiseOrValue<string> | null, initiator?: null, asset?: PromiseOrValue<string> | null, amount?: null, interestRateMode?: null, premium?: null, referralCode?: PromiseOrValue<BigNumberish> | null): FlashLoanEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
//# sourceMappingURL=FlashLoanLogic.d.ts.map