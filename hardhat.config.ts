import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
      },
      {
        version: "0.8.20",
      },
      {
        version: "0.8.19",
      },
      {
        version: "0.7.6",
        settings: {},
      },
    ],
  },
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/" + process.env.RPC_API_KEY,
      chainId: 80001,
      accounts: [process.env.WALLET_PKEY as string],
    },
  },
};

export default config;
