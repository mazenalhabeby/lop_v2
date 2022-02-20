import {InjectedConnector} from '@web3-react/injected-connector'
import {WalletConnectConnector} from '@web3-react/walletconnect-connector'
import {WalletLinkConnector} from '@web3-react/walletlink-connector'

const RPC_URLS = {
  1: process.env.NEXT_RPC_URL_1,
  4: process.env.NEXT_RPC_URL_4,
  56: process.env.NEXT_RPC_URL_56,
  137: process.env.NEXT_RPC_URL_137,
}

//metamask
export const injected = new InjectedConnector({
  supportedChainIds: [1, 4, 56, 137],
})

export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: RPC_URLS[1],
    4: RPC_URLS[4],
    56: RPC_URLS[56],
    137: RPC_URLS[137],
  },
  qrcode: true,
  pollingInterval: 15000,
})

export function resetWalletConnector(connector) {
  if (connector && connector instanceof WalletConnectConnector) {
    connector.walletConnectProvider = undefined
  }
}

//coinbase
export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[137],
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
}
