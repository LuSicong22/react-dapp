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
      url: "https://eth-goerli.g.alchemy.com/v2/KB-zXuVB55Q77Upe0lINuASwq74pFhgH",
      accounts: [`${process.env.REACT_APP_PRIVATE_KEY}`],
    },
  },
};
