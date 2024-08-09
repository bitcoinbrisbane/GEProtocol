import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

const { ethers } = require("hardhat");

describe("Router", function () {
  describe("Add liquidity", function () {
    it("Should add liquidity", async function () {
      // const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture);

      const tokenA = await ethers.deployContract("MockERC20", ["TokenA"]);
      console.log("hardhatToken", tokenA.target);

      const tokenB = await ethers.deployContract("MockERC20", ["TokenB"]);
      console.log("hardhatToken", tokenB.target);

      const router = await ethers.getContractFactory("UniswapV2Router01");
      const routerInstance = await router.deploy();

      const amountA = 1000;
      const amountB = 1000;

      await tokenA.mint(routerInstance.address, amountA);
      await tokenB.mint(routerInstance.address, amountB);

    });
  });
});