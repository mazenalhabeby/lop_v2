import {useWeb3React} from '@web3-react/core'
import {
  injected,
  walletconnect,
  walletlink,
  resetWalletConnector,
  networks,
} from 'helpers/connectors'

import React, {createContext, useEffect, useState} from 'react'

export const Web3Context = createContext()

const Web3ContextProvider = (props) => {
  const {active, account, activate, deactivate, error} = useWeb3React()
  const [metaMask, setMetaMask] = useState(false)

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
      await activate(injected)
      handleNetworkSwitch('bsc')
      setMetaMask(true)
    } catch (ex) {
      console.log(ex)
    }
  }

  //web3react walletconnect
  const connectWalletConnect = async () => {
    try {
      resetWalletConnector(walletconnect)
      await activate(walletconnect)
    } catch (ex) {
      console.log(ex)
    }
  }

  //web3react coinbase
  const connectCoinbase = async () => {
    try {
      await activate(walletlink)
    } catch (ex) {
      console.log(ex)
    }
  }

  const disconnectMetamask = () => {
    try {
      window.localStorage.removeItem('userAccount')
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    if (active && metaMask) {
      injetedUser(account)
    }
  }, [account, active, metaMask])
  return (
    <Web3Context.Provider
      value={{
        connetMetamask,
        connectWalletConnect,
        connectCoinbase,
        disconnectMetamask,
        account,
        active,
        error,
      }}>
      {props.children}
    </Web3Context.Provider>
  )
}

export default Web3ContextProvider
