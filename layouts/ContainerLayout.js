import Web3ContextProvider from 'context/web3Context'
import {useRouter} from 'next/router'
import React, {useEffect} from 'react'

const ContainerLayout = ({children}) => {
  const {locale} = useRouter()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.dir = dir
  }, [dir])
  return (
    <>
      <Web3ContextProvider>{children}</Web3ContextProvider>
    </>
  )
}

export default ContainerLayout
