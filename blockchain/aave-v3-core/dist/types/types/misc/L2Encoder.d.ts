import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface L2EncoderInterface extends utils.Interface {
    functions: {
        "POOL()": FunctionFragment;
        "encodeBorrowParams(address,uint256,uint256,uint16)": FunctionFragment;
        "encodeLiquidationCall(address,address,address,uint256,bool)": FunctionFragment;
        "encodeRebalanceStableBorrowRate(address,address)": FunctionFragment;
        "encodeRepayParams(address,uint256,uint256)": FunctionFragment;
        "encodeRepayWithATokensParams(address,uint256,uint256)": FunctionFragment;
        "encodeRepayWithPermitParams(address,uint256,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "encodeSetUserUseReserveAsCollateral(address,bool)": FunctionFragment;
        "encodeSupplyParams(address,uint256,uint16)": FunctionFragment;
        "encodeSupplyWithPermitParams(address,uint256,uint16,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "encodeSwapBorrowRateMode(address,uint256)": FunctionFragment;
        "encodeWithdrawParams(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "POOL" | "encodeBorrowParams" | "encodeLiquidationCall" | "encodeRebalanceStableBorrowRate" | "encodeRepayParams" | "encodeRepayWithATokensParams" | "encodeRepayWithPermitParams" | "encodeSetUserUseReserveAsCollateral" | "encodeSupplyParams" | "encodeSupplyWithPermitParams" | "encodeSwapBorrowRateMode" | "encodeWithdrawParams"): FunctionFragment;
    encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "encodeBorrowParams", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "encodeLiquidationCall", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "encodeRebalanceStableBorrowRate", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "encodeRepayParams", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "encodeRepayWithATokensParams", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "encodeRepayWithPermitParams", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "encodeSetUserUseReserveAsCollateral", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "encodeSupplyParams", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "encodeSupplyWithPermitParams", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "encodeSwapBorrowRateMode", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "encodeWithdrawParams", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeBorrowParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeLiquidationCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeRebalanceStableBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeRepayParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeRepayWithATokensParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeRepayWithPermitParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeSetUserUseReserveAsCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeSupplyParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeSupplyWithPermitParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeSwapBorrowRateMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeWithdrawParams", data: BytesLike): Result;
    events: {};
}
export interface L2Encoder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: L2EncoderInterface;
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
        POOL(overrides?: CallOverrides): Promise<[string]>;
        encodeBorrowParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        encodeLiquidationCall(collateralAsset: PromiseOrValue<string>, debtAsset: PromiseOrValue<string>, user: PromiseOrValue<string>, debtToCover: PromiseOrValue<BigNumberish>, receiveAToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[string, string]>;
        encodeRebalanceStableBorrowRate(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        encodeRepayParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        encodeRepayWithATokensParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        encodeRepayWithPermitParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string, string]>;
        encodeSetUserUseReserveAsCollateral(asset: PromiseOrValue<string>, useAsCollateral: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[string]>;
        encodeSupplyParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        encodeSupplyWithPermitParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string, string]>;
        encodeSwapBorrowRateMode(asset: PromiseOrValue<string>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        encodeWithdrawParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
    };
    POOL(overrides?: CallOverrides): Promise<string>;
    encodeBorrowParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    encodeLiquidationCall(collateralAsset: PromiseOrValue<string>, debtAsset: PromiseOrValue<string>, user: PromiseOrValue<string>, debtToCover: PromiseOrValue<BigNumberish>, receiveAToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[string, string]>;
    encodeRebalanceStableBorrowRate(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    encodeRepayParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    encodeRepayWithATokensParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    encodeRepayWithPermitParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string, string]>;
    encodeSetUserUseReserveAsCollateral(asset: PromiseOrValue<string>, useAsCollateral: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
    encodeSupplyParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    encodeSupplyWithPermitParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string, string]>;
    encodeSwapBorrowRateMode(asset: PromiseOrValue<string>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    encodeWithdrawParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        POOL(overrides?: CallOverrides): Promise<string>;
        encodeBorrowParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        encodeLiquidationCall(collateralAsset: PromiseOrValue<string>, debtAsset: PromiseOrValue<string>, user: PromiseOrValue<string>, debtToCover: PromiseOrValue<BigNumberish>, receiveAToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[string, string]>;
        encodeRebalanceStableBorrowRate(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        encodeRepayParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        encodeRepayWithATokensParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        encodeRepayWithPermitParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string, string]>;
        encodeSetUserUseReserveAsCollateral(asset: PromiseOrValue<string>, useAsCollateral: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
        encodeSupplyParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        encodeSupplyWithPermitParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string, string]>;
        encodeSwapBorrowRateMode(asset: PromiseOrValue<string>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        encodeWithdrawParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        POOL(overrides?: CallOverrides): Promise<BigNumber>;
        encodeBorrowParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        encodeLiquidationCall(collateralAsset: PromiseOrValue<string>, debtAsset: PromiseOrValue<string>, user: PromiseOrValue<string>, debtToCover: PromiseOrValue<BigNumberish>, receiveAToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        encodeRebalanceStableBorrowRate(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        encodeRepayParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        encodeRepayWithATokensParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        encodeRepayWithPermitParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        encodeSetUserUseReserveAsCollateral(asset: PromiseOrValue<string>, useAsCollateral: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        encodeSupplyParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        encodeSupplyWithPermitParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        encodeSwapBorrowRateMode(asset: PromiseOrValue<string>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        encodeWithdrawParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeBorrowParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeLiquidationCall(collateralAsset: PromiseOrValue<string>, debtAsset: PromiseOrValue<string>, user: PromiseOrValue<string>, debtToCover: PromiseOrValue<BigNumberish>, receiveAToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeRebalanceStableBorrowRate(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeRepayParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeRepayWithATokensParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeRepayWithPermitParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeSetUserUseReserveAsCollateral(asset: PromiseOrValue<string>, useAsCollateral: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeSupplyParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeSupplyWithPermitParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeSwapBorrowRateMode(asset: PromiseOrValue<string>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeWithdrawParams(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=L2Encoder.d.ts.map