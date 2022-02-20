import React, {useEffect, useState} from 'react'
import {MdExpandLess, MdExpandMore, MdTranslate} from 'react-icons/md'
import {useRouter} from 'next/router'
import ClickAwayListener from '@mui/base/ClickAwayListener'
import Link from 'next/link'

const LangToggle = () => {
  const router = useRouter()

  const {locale} = router

  const currentLang =
    locale === 'en-US' ? 'ENGLISH' : locale === 'ar' ? ' العربية ' : undefined

  const langauge = [
    {
      code: 'en-US',
      name: 'ENGLISH',
      country_code: 'en',
    },
    // {
    //   code: 'ar',
    //   name: 'العربية',
    //   country_code: 'ar',
    // },
  ]

  const [open, setOpen] = useState(false)

  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  const style = {
    wrapper: `relative`,
    btn__wrapper: `relative cursor-pointer rounded-xl bg-opacity-5 p-2 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:bg-opacity-20`,
    btn__overlay: `absolute top-0 left-0 h-full w-full rounded-xl`,
    icon__size: `w-7 h-7`,
    menu__wrapper: `${
      open ? 'flex' : 'hidden'
    } absolute top-12 left-0 right-0 z-[99] flex-col items-center divide-y divide-yellow-400 rounded-b-lg bg-transparent p-2 shadow-lg backdrop-blur backdrop-grayscale backdrop-filter bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 md:bg-opacity-50 md:dark:bg-opacity-20`,
    item: `w-full p-2 text-center transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:text-white`,
  }
  return (
    <div className={style.wrapper}>
      <div
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        className={style.btn__wrapper}
        onClick={handleToggle}>
        <div className={style.btn__overlay}></div>
        <div className="flex flex-row text-center">
          <MdTranslate className={style.icon__size} />
          <p className="px-2">{currentLang}</p>
          {open ? (
            <MdExpandLess className={style.icon__size} />
          ) : (
            <MdExpandMore className={style.icon__size} />
          )}
        </div>
      </div>

      <ClickAwayListener onClickAway={handleClose}>
        <div id="menu-list-grow" className={style.menu__wrapper}>
          {langauge.map((obj) => (
            <Link href={router.asPath} locale={obj.code} key={obj.country_code}>
              <a onClick={handleClose} className={style.item}>
                {obj.name}
              </a>
            </Link>
          ))}
        </div>
      </ClickAwayListener>
    </div>
  )
}

export default LangToggle
