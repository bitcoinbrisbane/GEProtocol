import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface DebtTokenBaseInterface extends utils.Interface {
    functions: {
        "DELEGATION_WITH_SIG_TYPEHASH()": FunctionFragment;
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "EIP712_REVISION()": FunctionFragment;
        "approveDelegation(address,uint256)": FunctionFragment;
        "borrowAllowance(address,address)": FunctionFragment;
        "delegationWithSig(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "nonces(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DELEGATION_WITH_SIG_TYPEHASH" | "DOMAIN_SEPARATOR" | "EIP712_REVISION" | "approveDelegation" | "borrowAllowance" | "delegationWithSig" | "nonces"): FunctionFragment;
    encodeFunctionData(functionFragment: "DELEGATION_WITH_SIG_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "EIP712_REVISION", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "nonces", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "DELEGATION_WITH_SIG_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EIP712_REVISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveDelegation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegationWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
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
export interface DebtTokenBase extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DebtTokenBaseInterface;
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
        DELEGATION_WITH_SIG_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        EIP712_REVISION(overrides?: CallOverrides): Promise<[string]>;
        approveDelegation(delegatee: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        borrowAllowance(fromUser: PromiseOrValue<string>, toUser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        delegationWithSig(delegator: PromiseOrValue<string>, delegatee: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    DELEGATION_WITH_SIG_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    EIP712_REVISION(overrides?: CallOverrides): Promise<string>;
    approveDelegation(delegatee: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    borrowAllowance(fromUser: PromiseOrValue<string>, toUser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    delegationWithSig(delegator: PromiseOrValue<string>, delegatee: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        DELEGATION_WITH_SIG_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        EIP712_REVISION(overrides?: CallOverrides): Promise<string>;
        approveDelegation(delegatee: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        borrowAllowance(fromUser: PromiseOrValue<string>, toUser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        delegationWithSig(delegator: PromiseOrValue<string>, delegatee: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "BorrowAllowanceDelegated(address,address,address,uint256)"(fromUser?: PromiseOrValue<string> | null, toUser?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, amount?: null): BorrowAllowanceDelegatedEventFilter;
        BorrowAllowanceDelegated(fromUser?: PromiseOrValue<string> | null, toUser?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, amount?: null): BorrowAllowanceDelegatedEventFilter;
    };
    estimateGas: {
        DELEGATION_WITH_SIG_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        EIP712_REVISION(overrides?: CallOverrides): Promise<BigNumber>;
        approveDelegation(delegatee: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        borrowAllowance(fromUser: PromiseOrValue<string>, toUser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        delegationWithSig(delegator: PromiseOrValue<string>, delegatee: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DELEGATION_WITH_SIG_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        EIP712_REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approveDelegation(delegatee: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        borrowAllowance(fromUser: PromiseOrValue<string>, toUser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegationWithSig(delegator: PromiseOrValue<string>, delegatee: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=DebtTokenBase.d.ts.map