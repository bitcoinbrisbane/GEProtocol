import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IScaledBalanceTokenInterface extends utils.Interface {
    functions: {
        "getPreviousIndex(address)": FunctionFragment;
        "getScaledUserBalanceAndSupply(address)": FunctionFragment;
        "scaledBalanceOf(address)": FunctionFragment;
        "scaledTotalSupply()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getPreviousIndex" | "getScaledUserBalanceAndSupply" | "scaledBalanceOf" | "scaledTotalSupply"): FunctionFragment;
    encodeFunctionData(functionFragment: "getPreviousIndex", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getScaledUserBalanceAndSupply", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "scaledBalanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "scaledTotalSupply", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getPreviousIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getScaledUserBalanceAndSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scaledBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scaledTotalSupply", data: BytesLike): Result;
    events: {
        "Burn(address,address,uint256,uint256,uint256)": EventFragment;
        "Mint(address,address,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
}
export interface BurnEventObject {
    from: string;
    target: string;
    value: BigNumber;
    balanceIncrease: BigNumber;
    index: BigNumber;
}
export type BurnEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], BurnEventObject>;
export type BurnEventFilter = TypedEventFilter<BurnEvent>;
export interface MintEventObject {
    caller: string;
    onBehalfOf: string;
    value: BigNumber;
    balanceIncrease: BigNumber;
    index: BigNumber;
}
export type MintEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], MintEventObject>;
export type MintEventFilter = TypedEventFilter<MintEvent>;
export interface IScaledBalanceToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IScaledBalanceTokenInterface;
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
        getPreviousIndex(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getScaledUserBalanceAndSupply(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        scaledTotalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    getPreviousIndex(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getScaledUserBalanceAndSupply(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getPreviousIndex(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getScaledUserBalanceAndSupply(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Burn(address,address,uint256,uint256,uint256)"(from?: PromiseOrValue<string> | null, target?: PromiseOrValue<string> | null, value?: null, balanceIncrease?: null, index?: null): BurnEventFilter;
        Burn(from?: PromiseOrValue<string> | null, target?: PromiseOrValue<string> | null, value?: null, balanceIncrease?: null, index?: null): BurnEventFilter;
        "Mint(address,address,uint256,uint256,uint256)"(caller?: PromiseOrValue<string> | null, onBehalfOf?: PromiseOrValue<string> | null, value?: null, balanceIncrease?: null, index?: null): MintEventFilter;
        Mint(caller?: PromiseOrValue<string> | null, onBehalfOf?: PromiseOrValue<string> | null, value?: null, balanceIncrease?: null, index?: null): MintEventFilter;
    };
    estimateGas: {
        getPreviousIndex(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getScaledUserBalanceAndSupply(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getPreviousIndex(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getScaledUserBalanceAndSupply(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        scaledTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IScaledBalanceToken.d.ts.map