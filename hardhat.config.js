require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {},
    goerli: {
      url: "https://mainnet.infura.io/v3/ad9d6169a94f49298cfa89190e5a498e",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
