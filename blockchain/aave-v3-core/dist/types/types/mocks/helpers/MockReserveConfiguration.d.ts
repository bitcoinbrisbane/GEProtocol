import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface MockReserveConfigurationInterface extends utils.Interface {
    functions: {
        "configuration()": FunctionFragment;
        "getBorrowCap()": FunctionFragment;
        "getBorrowingEnabled()": FunctionFragment;
        "getCaps()": FunctionFragment;
        "getDecimals()": FunctionFragment;
        "getEModeCategory()": FunctionFragment;
        "getFlags()": FunctionFragment;
        "getFlashLoanEnabled()": FunctionFragment;
        "getFrozen()": FunctionFragment;
        "getLiquidationBonus()": FunctionFragment;
        "getLiquidationProtocolFee()": FunctionFragment;
        "getLiquidationThreshold()": FunctionFragment;
        "getLtv()": FunctionFragment;
        "getParams()": FunctionFragment;
        "getReserveFactor()": FunctionFragment;
        "getStableRateBorrowingEnabled()": FunctionFragment;
        "getSupplyCap()": FunctionFragment;
        "getUnbackedMintCap()": FunctionFragment;
        "setBorrowCap(uint256)": FunctionFragment;
        "setBorrowingEnabled(bool)": FunctionFragment;
        "setDecimals(uint256)": FunctionFragment;
        "setEModeCategory(uint256)": FunctionFragment;
        "setFlashLoanEnabled(bool)": FunctionFragment;
        "setFrozen(bool)": FunctionFragment;
        "setLiquidationBonus(uint256)": FunctionFragment;
        "setLiquidationProtocolFee(uint256)": FunctionFragment;
        "setLiquidationThreshold(uint256)": FunctionFragment;
        "setLtv(uint256)": FunctionFragment;
        "setReserveFactor(uint256)": FunctionFragment;
        "setStableRateBorrowingEnabled(bool)": FunctionFragment;
        "setSupplyCap(uint256)": FunctionFragment;
        "setUnbackedMintCap(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "configuration" | "getBorrowCap" | "getBorrowingEnabled" | "getCaps" | "getDecimals" | "getEModeCategory" | "getFlags" | "getFlashLoanEnabled" | "getFrozen" | "getLiquidationBonus" | "getLiquidationProtocolFee" | "getLiquidationThreshold" | "getLtv" | "getParams" | "getReserveFactor" | "getStableRateBorrowingEnabled" | "getSupplyCap" | "getUnbackedMintCap" | "setBorrowCap" | "setBorrowingEnabled" | "setDecimals" | "setEModeCategory" | "setFlashLoanEnabled" | "setFrozen" | "setLiquidationBonus" | "setLiquidationProtocolFee" | "setLiquidationThreshold" | "setLtv" | "setReserveFactor" | "setStableRateBorrowingEnabled" | "setSupplyCap" | "setUnbackedMintCap"): FunctionFragment;
    encodeFunctionData(functionFragment: "configuration", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBorrowCap", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBorrowingEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCaps", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDecimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEModeCategory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFlags", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFlashLoanEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFrozen", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLiquidationBonus", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLiquidationProtocolFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLiquidationThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLtv", values?: undefined): string;
    encodeFunctionData(functionFragment: "getParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReserveFactor", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStableRateBorrowingEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSupplyCap", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUnbackedMintCap", values?: undefined): string;
    encodeFunctionData(functionFragment: "setBorrowCap", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setBorrowingEnabled", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setDecimals", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setEModeCategory", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setFlashLoanEnabled", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setFrozen", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setLiquidationBonus", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setLiquidationProtocolFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setLiquidationThreshold", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setLtv", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setReserveFactor", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setStableRateBorrowingEnabled", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setSupplyCap", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setUnbackedMintCap", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "configuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCaps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEModeCategory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFlags", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFlashLoanEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFrozen", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationBonus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLtv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStableRateBorrowingEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUnbackedMintCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBorrowCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBorrowingEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEModeCategory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFlashLoanEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFrozen", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidationBonus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidationProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLtv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReserveFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStableRateBorrowingEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSupplyCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUnbackedMintCap", data: BytesLike): Result;
    events: {};
}
export interface MockReserveConfiguration extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockReserveConfigurationInterface;
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
        configuration(overrides?: CallOverrides): Promise<[BigNumber] & {
            data: BigNumber;
        }>;
        getBorrowCap(overrides?: CallOverrides): Promise<[BigNumber]>;
        getBorrowingEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        getCaps(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getDecimals(overrides?: CallOverrides): Promise<[BigNumber]>;
        getEModeCategory(overrides?: CallOverrides): Promise<[BigNumber]>;
        getFlags(overrides?: CallOverrides): Promise<[boolean, boolean, boolean, boolean, boolean]>;
        getFlashLoanEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        getFrozen(overrides?: CallOverrides): Promise<[boolean]>;
        getLiquidationBonus(overrides?: CallOverrides): Promise<[BigNumber]>;
        getLiquidationProtocolFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        getLiquidationThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        getLtv(overrides?: CallOverrides): Promise<[BigNumber]>;
        getParams(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ]>;
        getReserveFactor(overrides?: CallOverrides): Promise<[BigNumber]>;
        getStableRateBorrowingEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        getSupplyCap(overrides?: CallOverrides): Promise<[BigNumber]>;
        getUnbackedMintCap(overrides?: CallOverrides): Promise<[BigNumber]>;
        setBorrowCap(borrowCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBorrowingEnabled(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDecimals(decimals: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEModeCategory(categoryId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFlashLoanEnabled(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFrozen(frozen: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setLiquidationBonus(bonus: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setLiquidationProtocolFee(liquidationProtocolFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setLiquidationThreshold(threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setLtv(ltv: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReserveFactor(reserveFactor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setStableRateBorrowingEnabled(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSupplyCap(supplyCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUnbackedMintCap(unbackedMintCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    configuration(overrides?: CallOverrides): Promise<BigNumber>;
    getBorrowCap(overrides?: CallOverrides): Promise<BigNumber>;
    getBorrowingEnabled(overrides?: CallOverrides): Promise<boolean>;
    getCaps(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    getDecimals(overrides?: CallOverrides): Promise<BigNumber>;
    getEModeCategory(overrides?: CallOverrides): Promise<BigNumber>;
    getFlags(overrides?: CallOverrides): Promise<[boolean, boolean, boolean, boolean, boolean]>;
    getFlashLoanEnabled(overrides?: CallOverrides): Promise<boolean>;
    getFrozen(overrides?: CallOverrides): Promise<boolean>;
    getLiquidationBonus(overrides?: CallOverrides): Promise<BigNumber>;
    getLiquidationProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;
    getLiquidationThreshold(overrides?: CallOverrides): Promise<BigNumber>;
    getLtv(overrides?: CallOverrides): Promise<BigNumber>;
    getParams(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ]>;
    getReserveFactor(overrides?: CallOverrides): Promise<BigNumber>;
    getStableRateBorrowingEnabled(overrides?: CallOverrides): Promise<boolean>;
    getSupplyCap(overrides?: CallOverrides): Promise<BigNumber>;
    getUnbackedMintCap(overrides?: CallOverrides): Promise<BigNumber>;
    setBorrowCap(borrowCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBorrowingEnabled(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDecimals(decimals: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEModeCategory(categoryId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFlashLoanEnabled(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFrozen(frozen: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setLiquidationBonus(bonus: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setLiquidationProtocolFee(liquidationProtocolFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setLiquidationThreshold(threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setLtv(ltv: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReserveFactor(reserveFactor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setStableRateBorrowingEnabled(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSupplyCap(supplyCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUnbackedMintCap(unbackedMintCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        configuration(overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowCap(overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowingEnabled(overrides?: CallOverrides): Promise<boolean>;
        getCaps(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getDecimals(overrides?: CallOverrides): Promise<BigNumber>;
        getEModeCategory(overrides?: CallOverrides): Promise<BigNumber>;
        getFlags(overrides?: CallOverrides): Promise<[boolean, boolean, boolean, boolean, boolean]>;
        getFlashLoanEnabled(overrides?: CallOverrides): Promise<boolean>;
        getFrozen(overrides?: CallOverrides): Promise<boolean>;
        getLiquidationBonus(overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        getLtv(overrides?: CallOverrides): Promise<BigNumber>;
        getParams(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ]>;
        getReserveFactor(overrides?: CallOverrides): Promise<BigNumber>;
        getStableRateBorrowingEnabled(overrides?: CallOverrides): Promise<boolean>;
        getSupplyCap(overrides?: CallOverrides): Promise<BigNumber>;
        getUnbackedMintCap(overrides?: CallOverrides): Promise<BigNumber>;
        setBorrowCap(borrowCap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setBorrowingEnabled(enabled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setDecimals(decimals: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setEModeCategory(categoryId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setFlashLoanEnabled(enabled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setFrozen(frozen: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setLiquidationBonus(bonus: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setLiquidationProtocolFee(liquidationProtocolFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setLiquidationThreshold(threshold: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setLtv(ltv: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setReserveFactor(reserveFactor: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setStableRateBorrowingEnabled(enabled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setSupplyCap(supplyCap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setUnbackedMintCap(unbackedMintCap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        configuration(overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowCap(overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowingEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        getCaps(overrides?: CallOverrides): Promise<BigNumber>;
        getDecimals(overrides?: CallOverrides): Promise<BigNumber>;
        getEModeCategory(overrides?: CallOverrides): Promise<BigNumber>;
        getFlags(overrides?: CallOverrides): Promise<BigNumber>;
        getFlashLoanEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        getFrozen(overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationBonus(overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        getLtv(overrides?: CallOverrides): Promise<BigNumber>;
        getParams(overrides?: CallOverrides): Promise<BigNumber>;
        getReserveFactor(overrides?: CallOverrides): Promise<BigNumber>;
        getStableRateBorrowingEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyCap(overrides?: CallOverrides): Promise<BigNumber>;
        getUnbackedMintCap(overrides?: CallOverrides): Promise<BigNumber>;
        setBorrowCap(borrowCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBorrowingEnabled(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDecimals(decimals: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEModeCategory(categoryId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFlashLoanEnabled(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFrozen(frozen: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setLiquidationBonus(bonus: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setLiquidationProtocolFee(liquidationProtocolFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setLiquidationThreshold(threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setLtv(ltv: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReserveFactor(reserveFactor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setStableRateBorrowingEnabled(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSupplyCap(supplyCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUnbackedMintCap(unbackedMintCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        configuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBorrowCap(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBorrowingEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCaps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEModeCategory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFlags(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFlashLoanEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFrozen(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidationBonus(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidationProtocolFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidationThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLtv(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStableRateBorrowingEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupplyCap(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUnbackedMintCap(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setBorrowCap(borrowCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBorrowingEnabled(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDecimals(decimals: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEModeCategory(categoryId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFlashLoanEnabled(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFrozen(frozen: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidationBonus(bonus: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidationProtocolFee(liquidationProtocolFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidationThreshold(threshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setLtv(ltv: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReserveFactor(reserveFactor: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setStableRateBorrowingEnabled(enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSupplyCap(supplyCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUnbackedMintCap(unbackedMintCap: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MockReserveConfiguration.d.ts.map