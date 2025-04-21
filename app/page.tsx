'use client'

import WormholeConnect, {
  WormholeConnectConfig,
  WormholeConnectTheme,
} from '@wormhole-foundation/wormhole-connect';
import './page.css';

function Page() {
  const config: WormholeConnectConfig = {
    // Define the network
    network: 'Testnet',

    // Define the chains
    chains: [
      'Solana',
      'Sepolia',
    ],

    rpcs: {
      Solana: 'https://api.devnet.solana.com',
      Sepolia: 'https://ethereum-sepolia-rpc.publicnode.com'
    },

    // UI configuration
    ui: {
      title: 'Wormhole Connect Demo',
    }
  };

  const theme: WormholeConnectTheme = {
    mode: 'dark',
    primary: '#78c4b6',
  };

  return <WormholeConnect config={config} theme={theme} />;
}

export default Page;