import {useWeb3React} from '@web3-react/core'
import {
  injected,
  walletconnect,
  walletlink,
  resetWalletConnector,
  networks,
} from 'helpers/connectors'

import React, {createContext, useEffect, useState} from 'react'
import toast from 'react-hot-toast'

export const Web3Context = createContext()

const Web3ContextProvider = (props) => {
  const web3reactContext = useWeb3React()
  const [metaMask, setMetaMask] = useState(false)

  const errorMsg = (ex, toastHandler = toast) => {
    toastHandler.error(ex, {
      style: {},
    })
  }

  const injetedUser = (userMode) => {
    window.localStorage.setItem('userAccount', userMode)
  }

  const changeNetwork = async ({networkName}) => {
    if (!window.ethereum) throw new Error('No crypto wallet found')
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
      await web3reactContext.activate(injected)
      handleNetworkSwitch('polygon')
      setMetaMask(true)
    } catch (ex) {
      console.log(ex)
    }
  }

  //web3react walletconnect
  const connectWalletConnect = async () => {
    try {
      resetWalletConnector(walletconnect)
      await web3reactContext.activate(walletconnect)
    } catch (ex) {
      console.log(ex)
    }
  }

  //web3react coinbase
  const connectCoinbase = async () => {
    try {
      await web3reactContext.activate(walletlink)
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

  useEffect(() => {
    if (web3reactContext.active && metaMask) {
      injetedUser(web3reactContext.account)
    }
    if (web3reactContext.error)
      return (async () => {
        errorMsg(web3reactContext.error.message)
      })()
  }, [
    metaMask,
    web3reactContext,
    web3reactContext.account,
    web3reactContext.active,
    web3reactContext.error,
  ])
  return (
    <Web3Context.Provider
      value={{
        connetMetamask,
        connectWalletConnect,
        connectCoinbase,
        disconnectMetamask,
        web3reactContext,
      }}>
      {props.children}
    </Web3Context.Provider>
  )
}

export default Web3ContextProvider
