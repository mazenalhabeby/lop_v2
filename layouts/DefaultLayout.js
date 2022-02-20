import React from 'react'
import ContainerLayout from './ContainerLayout'

const DefaultLayout = (props) => {
  return (
    <ContainerLayout>
      <main>{props.children}</main>
    </ContainerLayout>
  )
}

export default DefaultLayout
