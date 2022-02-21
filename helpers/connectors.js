import {InjectedConnector} from '@web3-react/injected-connector'
import {WalletConnectConnector} from '@web3-react/walletconnect-connector'
import {WalletLinkConnector} from '@web3-react/walletlink-connector'

export const POLLING_INTERVAL = 12000

const RPC_URLS = {
  1: process.env.NEXT_RPC_URL_1,
  4: process.env.NEXT_RPC_URL_4,
  56: process.env.NEXT_RPC_URL_137,
  137: process.env.NEXT_RPC_URL_56,
}

//metamask
export const injected = new InjectedConnector({
  supportedChainIds: [1, 4, 56, 137],
})

export const walletconnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  chainId: 137,
  qrcode: true,
})

export function resetWalletConnector(connector) {
  if (connector && connector instanceof WalletConnectConnector) {
    connector.walletConnectProvider = undefined
  }
}

//coinbase
export const walletlink = new WalletLinkConnector({
  url: RPC_URLS,
  appName: 'league-of-pharaohs',
  supportedChainIds: [1, 4, 56, 137],
})

//network
export const networks = {
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: 'Smart Chain',
    nativeCurrency: {
      name: 'Binance Chain Native Token',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: [
      'https://bsc-dataseed.binance.org/',
      'https://bsc-dataseed1.binance.org',
      'https://bsc-dataseed2.binance.org',
      'https://bsc-dataseed3.binance.org',
      'https://bsc-dataseed4.binance.org',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed2.defibit.io',
      'https://bsc-dataseed3.defibit.io',
      'https://bsc-dataseed4.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
      'https://bsc-dataseed2.ninicoin.io',
      'https://bsc-dataseed3.ninicoin.io',
      'https://bsc-dataseed4.ninicoin.io',
      'wss://bsc-ws-node.nariox.org',
    ],
    blockExplorerUrls: ['https://bscscan.com'],
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://polygon-rpc.com/'],
    blockExplorerUrls: ['https://polygonscan.com/'],
  },
}
