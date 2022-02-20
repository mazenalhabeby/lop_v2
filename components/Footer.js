import {soicalIcons} from 'data/socialIcons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const style = {
    footer: `w-full bg-black py-4 text-center space-y-2 text-white`,
    icons__wrapper: `flex flex-row justify-center gap-4`,
    icon__wrapper: `rounded-full bg-slate-100 p-2`,
    icons: `w-6 fill-black`,
  }

  return (
    <footer className={style.footer}>
      <div className={style.icons__wrapper}>
        {soicalIcons.map((icon) => {
          return (
            <Link key={icon.id} href={icon.href}>
              <a className={style.icon__wrapper}>
                <icon.iconName className={style.icons} />
              </a>
            </Link>
          )
        })}
      </div>
      <div>
        <Image
          src={'/images/WEBLOGO.png'}
          alt={'main-logo'}
          width={300}
          height={100}
        />
      </div>
      <p className="text-sm md:text-base">
        {' '}
        &trade; &#38; &copy; League of pharaohs. All rights reserved{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
