const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy();
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello People of the ominiSwap");

    const setGreetingTx = await greeter.setGreeting("Hola, swappy fellow!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, swappy fellow!");
  });
});
