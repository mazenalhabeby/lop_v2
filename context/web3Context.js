import {useWeb3React} from '@web3-react/core'
import {
  injected,
  walletconnect,
  resetWalletConnector,
  networks,
} from 'helpers/connectors'

import React, {createContext, useEffect, useState} from 'react'

export const Web3Context = createContext()

const Web3ContextProvider = (props) => {
  const web3reactContext = useWeb3React()
  const [walletsConnection, setWalletsConnection] = useState('')

  function activateInjectedProvider(providerName) {
    const {ethereum} = window

    if (!ethereum?.providers) {
      return undefined
    }

    let provider
    switch (providerName) {
      case 'CoinBase':
        provider = ethereum.providers.find(
          ({isCoinbaseWallet}) => isCoinbaseWallet
        )
        break
      case 'MetaMask':
        provider = ethereum.providers.find(({isMetaMask}) => isMetaMask)
        break
    }

    if (provider) {
      ethereum.setSelectedProvider(provider)
    }
  }

  const injetedUser = (userMode) => {
    window.localStorage.setItem('userAccount', userMode)
  }

  const changeNetwork = async ({networkName}) => {
    if (window.ethereum)
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            ...networks[networkName],
          },
        ],
      })
  }

  const handleNetworkSwitch = async (networkName) => {
    await changeNetwork({networkName})
  }

  //web3react metamask
  const connetMetamask = async () => {
    try {
      activateInjectedProvider('MetaMask')
      await web3reactContext.activate(injected)
      handleNetworkSwitch('polygon')
      setWalletsConnection('metaMask')
    } catch (ex) {
      console.log(ex)
    }
  }

  //web3react walletconnect
  const connectWalletConnect = async () => {
    try {
      resetWalletConnector(walletconnect)
      await web3reactContext.activate(walletconnect)
      setWalletsConnection('connectWallet')
    } catch (ex) {
      console.log(ex)
    }
  }

  const disconnectMetamask = () => {
    try {
      window.localStorage.removeItem('userAccount')
      web3reactContext.deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  const changeNetworkBtn = async () => {
    try {
      // attempt to switch to Harmony One network
      const result = await ethereum.send('wallet_switchEthereumChain', [
        {chainId: `0x89`},
      ])
    } catch (switchError) {
      // 4902 indicates that the client does not recognize the Harmony One network
      if (switchError.code === 4902) {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              ...networks[networkName],
            },
          ],
        })
      }
    }
  }

  useEffect(() => {
    if (web3reactContext.active) {
      injetedUser(web3reactContext.account)
    }
  }, [web3reactContext.account, web3reactContext.active])
  return (
    <Web3Context.Provider
      value={{
        connetMetamask,
        connectWalletConnect,
        disconnectMetamask,
        web3reactContext,
        walletsConnection,
        changeNetworkBtn,
      }}>
      {props.children}
    </Web3Context.Provider>
  )
}

export default Web3ContextProvider
