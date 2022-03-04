import {Web3Context} from 'context/web3Context'
import Image from 'next/image'
import React, {useContext, useEffect} from 'react'
import toast, {Toaster} from 'react-hot-toast'
import {RiCloseCircleFill} from 'react-icons/ri'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import CopyWapper from './CopyWapper'
import {MdWarning} from 'react-icons/md'
import {HiRefresh} from 'react-icons/hi'

const WalletCard = (props) => {
  const {
    connetMetamask,
    connectWalletConnect,
    disconnectMetamask,
    web3reactContext,
    walletsConnection,
    changeNetworkBtn,
  } = useContext(Web3Context)
  const wallets = [
    {
      id: 1,
      walletName: 'Meta Mask',
      icon: '/images/icons/metamask.svg',
      btnFunc: connetMetamask,
      wallet: 'metaMask',
    },
    {
      id: 2,
      walletName: 'Wallet Connect',
      icon: '/images/icons/walletconnect.svg',
      btnFunc: connectWalletConnect,
      wallet: 'connectWallet',
    },
    // {
    //   id: 3,
    //   walletName: 'Coinbase',
    //   icon: '/images/icons/Coinbase.svg',
    //   btnFunc: connetCoinbase,
    //   wallet: 'coinbase',
    // },
  ]

  useEffect(() => {
    if (web3reactContext.error && !web3reactContext.active) {
      toast.error(web3reactContext.error.message)
    }
  }, [web3reactContext.active, web3reactContext.error])

  return (
    <div
      className={`${
        props.model ? 'flex' : 'hidden'
      } absolute top-0 left-0 z-[99] h-screen w-full items-center justify-center dropgray__bg`}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: 'bg-white dark:bg-slate-700 dark:text-white',
        }}
      />
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
                className=" relative flex w-full flex-row rounded-lg bg-white/10 p-2 shadow-lg drop__bg hover:bg-white/80 dark:hover:bg-white/30 disabled:text-gray-400 disabled:hover:bg-white/10 disabled:dark:bg-white/0"
                key={wallet.id}
                onClick={wallet.btnFunc}
                disabled={web3reactContext.active}>
                {web3reactContext.active && (
                  <div className=" absolute w-full h-full z-10 top-0 left-0 rounded-lg dropgray"></div>
                )}
                <Image
                  src={wallet.icon}
                  width={60}
                  height={30}
                  alt={wallet.walletName}
                />
                <h2 className=" text-lg capitalize tracking-wider">
                  {wallet.walletName}
                </h2>
                {web3reactContext.active &&
                  wallet.wallet === walletsConnection && (
                    <div className="flex items-end justify-end flex-1 h-full z-20">
                      <BsFillCheckCircleFill className=" text-3xl dark:text-green-400 text-green-500 " />
                    </div>
                  )}
              </button>
            )
          })}
          {web3reactContext.active && web3reactContext.chainId !== 137 && (
            <div className="flex flex-row justify-center items-center gap-2 nm-flat-white dark:nm-flat-slate-700-lg p-2 mx-auto rounded-lg w-max">
              <MdWarning className="text-red-500 text-2xl" />
              <p>Switch network</p>
              <button
                onClick={changeNetworkBtn}
                className="bg-yellow-600 py-2 px-1 rounded-md shadow-lg">
                <HiRefresh className="text-lg" />
              </button>
            </div>
          )}
          <div className=" h-[2px] w-full bg-yellow-500"></div>
          <div className="flex flex-row justify-between">
            {!web3reactContext.active && (
              <div className="cursor-default dark:text-gray-400 dark:bg-white/10 dark:border-slate-500 text-gray-400 bg-white/10 border-slate-200 rounded-xl border-[1px] text-center shadow-lg w-[176.52px] h-[48px] items-center flex justify-center">
                no wallet detacted
              </div>
            )}
            {web3reactContext.active && (
              <div>
                <CopyWapper
                  type={'text'}
                  content={`${web3reactContext.account.substr(
                    0,
                    6
                  )} ... ${web3reactContext.account.substr(-4, 4)}`}
                  value={web3reactContext.account}
                  contentName={'Wallet'}
                  inputId={'wallet-address'}
                  copiedMsgStyle={'text-sm lg:text-md'}
                />
              </div>
            )}
            <button
              className="rounded-xl bg-white/50 dark:bg-slate-800 p-2 text-center capitalize text-inherit shadow-lg hover:bg-white/60 disabled:text-gray-400 disabled:hover:bg-white/0 disabled:dark:bg-white/10 disabled:dark:text-gray-400"
              onClick={disconnectMetamask}
              disabled={!web3reactContext.active}>
              disconnect
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletCard
