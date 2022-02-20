import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {IconButton} from '@mui/material'
import {MdClose, MdMenu} from 'react-icons/md'
import HomeLinks from './HomeLinks'
import LangToggle from '@/components/LangToggle'
import ThemeToggleBtn from '@/components/ThemeToggleBtn'
import Login from '@/components/navbar/Login'
import WalletCard from '../WalletCard'

const style = {
  container: `container mx-auto`,
  content___wrapper: `flex flex-col items-center justify-between lg:flex-row`,
  sub__content__wrapper: `flex flex-row items-center justify-center`,
  logo__wrapper: `rounded-br-3xl rounded-bl-3xl bg-slate-700 p-2 shadow-xl hover:bg-slate-600 relative z-[5]`,
  main__btn__wrapper: `block lg:hidden`,
  icon__btn: `text-slate-800 dark:text-white !outline-none`,
  btn__wrapper: `flex flex-col md:flex-row items-center justify-center gap-1 lg:gap-2 pb-4`,
  link__wrapper: `absolute top-16 w-1/2 transition-all duration-500 ease-in-out lg:static lg:top-0 lg:h-auto lg:w-auto flex flex-1`,
  link__sub__wrapper: ` absolute flex h-[70vh] w-full flex-col items-center shadow-lg bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-50 lg:static lg:h-auto lg:flex-grow lg:flex-row lg:flex-nowrap lg:bg-transparent lg:opacity-100 lg:shadow-none backdrop-blur-test`,
}

const Navbar = (props) => {
  const [click, setClick] = useState(false)
  const [clientWindowHeight, setClientWindowHeight] = useState('')
  const [model, setModel] = useState(false)

  function toggleModel() {
    setModel(!model)
  }

  const handleClick = () => setClick(!click)

  useEffect(() => {
    if (model) {
      document.body.classList.add('active__model')
    } else {
      document.body.classList.remove('active__model')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [model])

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
  }

  return (
    <nav
      className={`${
        clientWindowHeight >= 100 ? 'fixed top-0 ' : 'relative'
      } z-[2] h-16 w-full bg-slate-100 text-slate-700 shadow-xl dark:bg-black dark:text-white`}>
      <div className={style.container}>
        <div className={style.content___wrapper}>
          <div className={style.sub__content__wrapper}>
            <div className={style.main__btn__wrapper}>
              <IconButton className={style.icon__btn} onClick={handleClick}>
                {click ? <MdClose /> : <MdMenu />}
              </IconButton>
            </div>
            <Link href={`/`}>
              <a>
                <div className={style.logo__wrapper}>
                  <Image
                    src={'/images/lop.png'}
                    width={90}
                    height={60}
                    alt={'lop'}
                  />
                </div>
              </a>
            </Link>
          </div>
          <div
            className={`${
              click ? 'left-0 right-0' : '-left-full -right-full'
            } ${style.link__wrapper}`}>
            <div className={style.link__sub__wrapper}>
              {props.pageName == 'home' && <HomeLinks />}
              <div className={style.btn__wrapper}>
                <Login toggleModel={toggleModel} />
                <LangToggle />
                <ThemeToggleBtn />
              </div>
            </div>
          </div>
          <WalletCard toggleModel={toggleModel} model={model} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
