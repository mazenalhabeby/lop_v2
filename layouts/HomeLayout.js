import Footer from '@/components/Footer'
import MainNavbar from '@/components/navbar/MainNavbar'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import ContainerLayout from './ContainerLayout'

const HomeLayout = (props) => {
  return (
    <ContainerLayout>
      <main>
        <MainNavbar />
        <Navbar pageName={'home'} />
        {props.children}
      </main>
      <Footer />
    </ContainerLayout>
  )
}

export default HomeLayout
