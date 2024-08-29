const supply_abi = ["function supply(address asset, uint256 amount, address onBehalfOf, uint16 referralCode)"];

const pool_address = "0x1F564e151Fd5370D37fAA3f7b70D059E7897a524";

const pool_contract = new web3.eth.Contract(supply_abi, supply_address);

const supply = async () => {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  const amount = web3.utils.toWei("1000", "ether");
  const result = await supply_contract.methods
    .supply(amount)
    .send({ from: account });
  console.log(result);
};

supply();
