"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfdestructTransfer__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address payable",
                name: "to",
                type: "address",
            },
        ],
        name: "destroyAndTransfer",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5060bc8061001f6000396000f3fe608060405260043610601c5760003560e01c8063785e07b3146021575b600080fd5b6030602c366004604b565b6032565b005b8073ffffffffffffffffffffffffffffffffffffffff16ff5b600060208284031215605c57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114607f57600080fd5b939250505056fea2646970667358221220fea252da90a06bc70e97eaaf66c9b86a6b69d59e6b6880b4aee35184b56b6efb64736f6c634300080a0033";
const isSuperArgs = (xs) => xs.length > 1;
class SelfdestructTransfer__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.SelfdestructTransfer__factory = SelfdestructTransfer__factory;
SelfdestructTransfer__factory.bytecode = _bytecode;
SelfdestructTransfer__factory.abi = _abi;