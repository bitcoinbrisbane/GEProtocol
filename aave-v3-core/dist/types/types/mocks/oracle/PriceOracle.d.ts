import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface PriceOracleInterface extends utils.Interface {
    functions: {
        "getAssetPrice(address)": FunctionFragment;
        "getEthUsdPrice()": FunctionFragment;
        "setAssetPrice(address,uint256)": FunctionFragment;
        "setEthUsdPrice(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAssetPrice" | "getEthUsdPrice" | "setAssetPrice" | "setEthUsdPrice"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getEthUsdPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAssetPrice", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setEthUsdPrice", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEthUsdPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEthUsdPrice", data: BytesLike): Result;
    events: {
        "AssetPriceUpdated(address,uint256,uint256)": EventFragment;
        "EthPriceUpdated(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AssetPriceUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EthPriceUpdated"): EventFragment;
}
export interface AssetPriceUpdatedEventObject {
    asset: string;
    price: BigNumber;
    timestamp: BigNumber;
}
export type AssetPriceUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], AssetPriceUpdatedEventObject>;
export type AssetPriceUpdatedEventFilter = TypedEventFilter<AssetPriceUpdatedEvent>;
export interface EthPriceUpdatedEventObject {
    price: BigNumber;
    timestamp: BigNumber;
}
export type EthPriceUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], EthPriceUpdatedEventObject>;
export type EthPriceUpdatedEventFilter = TypedEventFilter<EthPriceUpdatedEvent>;
export interface PriceOracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PriceOracleInterface;
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
        getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getEthUsdPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        setAssetPrice(asset: PromiseOrValue<string>, price: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEthUsdPrice(price: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getEthUsdPrice(overrides?: CallOverrides): Promise<BigNumber>;
    setAssetPrice(asset: PromiseOrValue<string>, price: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEthUsdPrice(price: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getEthUsdPrice(overrides?: CallOverrides): Promise<BigNumber>;
        setAssetPrice(asset: PromiseOrValue<string>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setEthUsdPrice(price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AssetPriceUpdated(address,uint256,uint256)"(asset?: null, price?: null, timestamp?: null): AssetPriceUpdatedEventFilter;
        AssetPriceUpdated(asset?: null, price?: null, timestamp?: null): AssetPriceUpdatedEventFilter;
        "EthPriceUpdated(uint256,uint256)"(price?: null, timestamp?: null): EthPriceUpdatedEventFilter;
        EthPriceUpdated(price?: null, timestamp?: null): EthPriceUpdatedEventFilter;
    };
    estimateGas: {
        getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getEthUsdPrice(overrides?: CallOverrides): Promise<BigNumber>;
        setAssetPrice(asset: PromiseOrValue<string>, price: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEthUsdPrice(price: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEthUsdPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAssetPrice(asset: PromiseOrValue<string>, price: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEthUsdPrice(price: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=PriceOracle.d.ts.map