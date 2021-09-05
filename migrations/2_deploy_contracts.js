const Bank = artifacts.require("Bank");
// const TokenV1 = artifacts.require("TokenV1");
// const BurningMoon = artifacts.require("BurningMoon");

module.exports = async function(deployer, network, accounts) {
  // Deploy TokenV1
  /*await deployer.deploy(TokenV1);
  const tokenV1 = await TokenV1.deployed();*/

  // Deploy TokenV2
  /*await deployer.deploy(BurningMoon);
  const burningMoon = await BurningMoon.deployed();*/
  
  // Deploy Bank
  await deployer.deploy(Bank, "0x16FB5849aAB4EF2e104D84ac0a618bf44D28a5fC", "0x0140FCC0630fB1773D6652600973530e021E4a3f", '100');
  const bank = await Bank.deployed();

  // Transfiere todos los token de la Versión 2 a Bank (1 million)
  // await burningMoon.transfer(bank.address, '1000000000000000000000000');

  // Transfer 1000 tokens de la versión 1 a la cuenta de inversor
  // await tokenV1.transfer(accounts[1], '1000000000000000000000');
};
