import Web3ContextProvider from 'context/web3Context'
import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import {Toaster} from 'react-hot-toast'

const ContainerLayout = ({children}) => {
  const {locale} = useRouter()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.dir = dir
  }, [dir])
  return (
    <>
      <Web3ContextProvider>
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </Web3ContextProvider>
    </>
  )
}

export default ContainerLayout
