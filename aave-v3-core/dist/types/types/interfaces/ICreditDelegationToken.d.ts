import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface ICreditDelegationTokenInterface extends utils.Interface {
    functions: {
        "approveDelegation(address,uint256)": FunctionFragment;
        "borrowAllowance(address,address)": FunctionFragment;
        "delegationWithSig(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approveDelegation" | "borrowAllowance" | "delegationWithSig"): FunctionFragment;
    encodeFunctionData(functionFragment: "approveDelegation", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "borrowAllowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "delegationWithSig", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "approveDelegation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegationWithSig", data: BytesLike): Result;
    events: {
        "BorrowAllowanceDelegated(address,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BorrowAllowanceDelegated"): EventFragment;
}
export interface BorrowAllowanceDelegatedEventObject {
    fromUser: string;
    toUser: string;
    asset: string;
    amount: BigNumber;
}
export type BorrowAllowanceDelegatedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], BorrowAllowanceDelegatedEventObject>;
export type BorrowAllowanceDelegatedEventFilter = TypedEventFilter<BorrowAllowanceDelegatedEvent>;
export interface ICreditDelegationToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICreditDelegationTokenInterface;
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
        approveDelegation(delegatee: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        borrowAllowance(fromUser: PromiseOrValue<string>, toUser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        delegationWithSig(delegator: PromiseOrValue<string>, delegatee: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    approveDelegation(delegatee: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    borrowAllowance(fromUser: PromiseOrValue<string>, toUser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    delegationWithSig(delegator: PromiseOrValue<string>, delegatee: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        approveDelegation(delegatee: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        borrowAllowance(fromUser: PromiseOrValue<string>, toUser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        delegationWithSig(delegator: PromiseOrValue<string>, delegatee: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BorrowAllowanceDelegated(address,address,address,uint256)"(fromUser?: PromiseOrValue<string> | null, toUser?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, amount?: null): BorrowAllowanceDelegatedEventFilter;
        BorrowAllowanceDelegated(fromUser?: PromiseOrValue<string> | null, toUser?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, amount?: null): BorrowAllowanceDelegatedEventFilter;
    };
    estimateGas: {
        approveDelegation(delegatee: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        borrowAllowance(fromUser: PromiseOrValue<string>, toUser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        delegationWithSig(delegator: PromiseOrValue<string>, delegatee: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        approveDelegation(delegatee: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        borrowAllowance(fromUser: PromiseOrValue<string>, toUser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegationWithSig(delegator: PromiseOrValue<string>, delegatee: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ICreditDelegationToken.d.ts.map