import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace DataTypes {
    type CalculateInterestRatesParamsStruct = {
        unbacked: PromiseOrValue<BigNumberish>;
        liquidityAdded: PromiseOrValue<BigNumberish>;
        liquidityTaken: PromiseOrValue<BigNumberish>;
        totalStableDebt: PromiseOrValue<BigNumberish>;
        totalVariableDebt: PromiseOrValue<BigNumberish>;
        averageStableBorrowRate: PromiseOrValue<BigNumberish>;
        reserveFactor: PromiseOrValue<BigNumberish>;
        reserve: PromiseOrValue<string>;
        aToken: PromiseOrValue<string>;
    };
    type CalculateInterestRatesParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string
    ] & {
        unbacked: BigNumber;
        liquidityAdded: BigNumber;
        liquidityTaken: BigNumber;
        totalStableDebt: BigNumber;
        totalVariableDebt: BigNumber;
        averageStableBorrowRate: BigNumber;
        reserveFactor: BigNumber;
        reserve: string;
        aToken: string;
    };
}
export interface IReserveInterestRateStrategyInterface extends utils.Interface {
    functions: {
        "calculateInterestRates((uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "calculateInterestRates"): FunctionFragment;
    encodeFunctionData(functionFragment: "calculateInterestRates", values: [DataTypes.CalculateInterestRatesParamsStruct]): string;
    decodeFunctionResult(functionFragment: "calculateInterestRates", data: BytesLike): Result;
    events: {};
}
export interface IReserveInterestRateStrategy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IReserveInterestRateStrategyInterface;
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
        calculateInterestRates(params: DataTypes.CalculateInterestRatesParamsStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    };
    calculateInterestRates(params: DataTypes.CalculateInterestRatesParamsStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    callStatic: {
        calculateInterestRates(params: DataTypes.CalculateInterestRatesParamsStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    };
    filters: {};
    estimateGas: {
        calculateInterestRates(params: DataTypes.CalculateInterestRatesParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        calculateInterestRates(params: DataTypes.CalculateInterestRatesParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IReserveInterestRateStrategy.d.ts.map