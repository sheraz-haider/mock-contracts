import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-etherscan';

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mainnet: {
      url: 'https://rpc.ankr.com/eth',
      accounts: [process.env.PRIVATE_KEY!],
    },
    goerli: {
      url: 'https://rpc.ankr.com/eth_goerli',
      accounts: [process.env.PRIVATE_KEY!],
    },
    polygon: {
      url: 'https://rpc.ankr.com/polygon',
      accounts: [process.env.PRIVATE_KEY!],
    },
    mumbai: {
      url: 'https://rpc.ankr.com/polygon_mumbai',
      accounts: [process.env.PRIVATE_KEY!],
    },
    bsc: {
      url: 'https://rpc.ankr.com/bsc',
      accounts: [process.env.PRIVATE_KEY!],
    },
    bscTestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
  etherscan: {
    // apiKey: process.env.ETHERSCAN_API_KEY!,
    apiKey: process.env.POLYGONSCAN_API_KEY!,
  }
};

export default config;
