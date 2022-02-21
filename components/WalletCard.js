import {Web3Context} from 'context/web3Context'
import Image from 'next/image'
import React, {useContext, useEffect, useState} from 'react'
import toast from 'react-hot-toast'
import {RiCloseCircleFill} from 'react-icons/ri'

const WalletCard = (props) => {
  const [errorMsg, setErrorMsg] = useState('')
  const {
    connetMetamask,
    connectWalletConnect,
    connectCoinbase,
    disconnectMetamask,
    web3reactContext,
  } = useContext(Web3Context)
  const wallets = [
    {
      id: 1,
      walletName: 'Meta Mask',
      icon: '/images/icons/metamask.svg',
      btnFunc: connetMetamask,
    },
    {
      id: 2,
      walletName: 'Wallet Connect',
      icon: '/images/icons/walletconnect.svg',
      btnFunc: connectWalletConnect,
    },
    // {
    //   id: 3,
    //   walletName: 'Coinbase',
    //   icon: '/images/icons/Coinbase.svg',
    //   btnFunc: connectCoinbase,
    // },
  ]

  return (
    <div
      className={`${
        props.model ? 'flex' : 'hidden'
      } absolute top-0 left-0 z-[99] h-screen w-full items-center justify-center dropgray__bg`}>
      <div className=" w-[90%] max-w-md rounded-lg bg-white/70 shadow-2xl drop__bg dark:bg-slate-700/80 lg:w-[30%]">
        <div className="relative w-full rounded-t-lg bg-yellow-600 p-2 text-center text-slate-700">
          <h2 className="font-aclonica text-lg capitalize tracking-widest lg:text-2xl">
            connect wallet
          </h2>
          <RiCloseCircleFill
            className="absolute top-2 right-4 cursor-pointer rounded-full border-2 border-yellow-500 text-2xl shadow-xl hover:text-slate-600 lg:text-3xl"
            onClick={props.toggleModel}
          />
        </div>
        <div className="flex- flex-col space-y-4 p-2">
          {wallets.map((wallet) => {
            return (
              <button
                className="flex w-full flex-row rounded-lg bg-white/10 p-2 shadow-lg drop__bg hover:bg-white/80 dark:hover:bg-white/30"
                key={wallet.id}
                onClick={wallet.btnFunc}>
                <Image
                  src={wallet.icon}
                  width={60}
                  height={30}
                  alt={wallet.walletName}
                />
                <h2 className=" text-lg capitalize tracking-wider">
                  {wallet.walletName}
                </h2>
              </button>
            )
          })}
          <div className=" h-[2px] w-full bg-yellow-500"></div>
          <div className="flex flex-row justify-around">
            <div className="rounded-xl border-[1px] border-slate-300 bg-white/30 p-2 text-center shadow-lg">
              {web3reactContext.active ? (
                `${web3reactContext.account.substr(
                  0,
                  6
                )} ... ${web3reactContext.account.substr(-4, 4)}`
              ) : (
                <span>no connection </span>
              )}
            </div>
            <button
              className="rounded-xl bg-white/50 p-2 text-center capitalize text-inherit shadow-lg hover:bg-white/60"
              onClick={disconnectMetamask}>
              disconnect
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletCard
