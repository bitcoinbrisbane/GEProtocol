import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IACLManagerInterface extends utils.Interface {
    functions: {
        "ADDRESSES_PROVIDER()": FunctionFragment;
        "ASSET_LISTING_ADMIN_ROLE()": FunctionFragment;
        "BRIDGE_ROLE()": FunctionFragment;
        "EMERGENCY_ADMIN_ROLE()": FunctionFragment;
        "FLASH_BORROWER_ROLE()": FunctionFragment;
        "POOL_ADMIN_ROLE()": FunctionFragment;
        "RISK_ADMIN_ROLE()": FunctionFragment;
        "addAssetListingAdmin(address)": FunctionFragment;
        "addBridge(address)": FunctionFragment;
        "addEmergencyAdmin(address)": FunctionFragment;
        "addFlashBorrower(address)": FunctionFragment;
        "addPoolAdmin(address)": FunctionFragment;
        "addRiskAdmin(address)": FunctionFragment;
        "isAssetListingAdmin(address)": FunctionFragment;
        "isBridge(address)": FunctionFragment;
        "isEmergencyAdmin(address)": FunctionFragment;
        "isFlashBorrower(address)": FunctionFragment;
        "isPoolAdmin(address)": FunctionFragment;
        "isRiskAdmin(address)": FunctionFragment;
        "removeAssetListingAdmin(address)": FunctionFragment;
        "removeBridge(address)": FunctionFragment;
        "removeEmergencyAdmin(address)": FunctionFragment;
        "removeFlashBorrower(address)": FunctionFragment;
        "removePoolAdmin(address)": FunctionFragment;
        "removeRiskAdmin(address)": FunctionFragment;
        "setRoleAdmin(bytes32,bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ADDRESSES_PROVIDER" | "ASSET_LISTING_ADMIN_ROLE" | "BRIDGE_ROLE" | "EMERGENCY_ADMIN_ROLE" | "FLASH_BORROWER_ROLE" | "POOL_ADMIN_ROLE" | "RISK_ADMIN_ROLE" | "addAssetListingAdmin" | "addBridge" | "addEmergencyAdmin" | "addFlashBorrower" | "addPoolAdmin" | "addRiskAdmin" | "isAssetListingAdmin" | "isBridge" | "isEmergencyAdmin" | "isFlashBorrower" | "isPoolAdmin" | "isRiskAdmin" | "removeAssetListingAdmin" | "removeBridge" | "removeEmergencyAdmin" | "removeFlashBorrower" | "removePoolAdmin" | "removeRiskAdmin" | "setRoleAdmin"): FunctionFragment;
    encodeFunctionData(functionFragment: "ADDRESSES_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "ASSET_LISTING_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "BRIDGE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "EMERGENCY_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "FLASH_BORROWER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "POOL_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "RISK_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "addAssetListingAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "addBridge", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "addEmergencyAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "addFlashBorrower", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "addPoolAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "addRiskAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isAssetListingAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isBridge", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isEmergencyAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isFlashBorrower", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isPoolAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isRiskAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "removeAssetListingAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "removeBridge", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "removeEmergencyAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "removeFlashBorrower", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "removePoolAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "removeRiskAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setRoleAdmin", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "ADDRESSES_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ASSET_LISTING_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BRIDGE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EMERGENCY_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FLASH_BORROWER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "POOL_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RISK_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAssetListingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addEmergencyAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addFlashBorrower", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addPoolAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addRiskAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAssetListingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isEmergencyAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFlashBorrower", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPoolAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRiskAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAssetListingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeEmergencyAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFlashBorrower", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removePoolAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeRiskAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoleAdmin", data: BytesLike): Result;
    events: {};
}
export interface IACLManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IACLManagerInterface;
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
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;
        ASSET_LISTING_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        BRIDGE_ROLE(overrides?: CallOverrides): Promise<[string]>;
        EMERGENCY_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        FLASH_BORROWER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        POOL_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        RISK_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        addAssetListingAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addBridge(bridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addFlashBorrower(borrower: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addPoolAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addRiskAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isAssetListingAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isBridge(bridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isFlashBorrower(borrower: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isPoolAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isRiskAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        removeAssetListingAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeBridge(bridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeFlashBorrower(borrower: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removePoolAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeRiskAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRoleAdmin(role: PromiseOrValue<BytesLike>, adminRole: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
    ASSET_LISTING_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    BRIDGE_ROLE(overrides?: CallOverrides): Promise<string>;
    EMERGENCY_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    FLASH_BORROWER_ROLE(overrides?: CallOverrides): Promise<string>;
    POOL_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    RISK_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    addAssetListingAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addBridge(bridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addFlashBorrower(borrower: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addPoolAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addRiskAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isAssetListingAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isBridge(bridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isFlashBorrower(borrower: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isPoolAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isRiskAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    removeAssetListingAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeBridge(bridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeFlashBorrower(borrower: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removePoolAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeRiskAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRoleAdmin(role: PromiseOrValue<BytesLike>, adminRole: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
        ASSET_LISTING_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        BRIDGE_ROLE(overrides?: CallOverrides): Promise<string>;
        EMERGENCY_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        FLASH_BORROWER_ROLE(overrides?: CallOverrides): Promise<string>;
        POOL_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        RISK_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        addAssetListingAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        addBridge(bridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        addEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        addFlashBorrower(borrower: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        addPoolAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        addRiskAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isAssetListingAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isBridge(bridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isFlashBorrower(borrower: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isPoolAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isRiskAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        removeAssetListingAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        removeBridge(bridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        removeEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        removeFlashBorrower(borrower: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        removePoolAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        removeRiskAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setRoleAdmin(role: PromiseOrValue<BytesLike>, adminRole: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;
        ASSET_LISTING_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        BRIDGE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        EMERGENCY_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        FLASH_BORROWER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        POOL_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        RISK_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        addAssetListingAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addBridge(bridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addFlashBorrower(borrower: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addPoolAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addRiskAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isAssetListingAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isBridge(bridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isFlashBorrower(borrower: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isPoolAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isRiskAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        removeAssetListingAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeBridge(bridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeFlashBorrower(borrower: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removePoolAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeRiskAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRoleAdmin(role: PromiseOrValue<BytesLike>, adminRole: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ASSET_LISTING_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        BRIDGE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        EMERGENCY_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FLASH_BORROWER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        POOL_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RISK_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAssetListingAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addBridge(bridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addFlashBorrower(borrower: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addPoolAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addRiskAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isAssetListingAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBridge(bridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isFlashBorrower(borrower: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPoolAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isRiskAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAssetListingAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeBridge(bridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeFlashBorrower(borrower: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removePoolAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeRiskAdmin(admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRoleAdmin(role: PromiseOrValue<BytesLike>, adminRole: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IACLManager.d.ts.map