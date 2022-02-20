import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'

const ContainerLayout = ({children}) => {
  const {locale} = useRouter()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.dir = dir
  }, [dir])
  return <>{children}</>
}

export default ContainerLayout
