import {soicalIcons} from 'data/socialIcons'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React from 'react'

const style = {
  main__navbar__wrapper: `border-b-[1px] border-gray-300 py-1 dark:border-gray-700`,
  main__navbar__container: `container mx-auto flex flex-row lg:justify-end justify-center item-center gap-4`,
  nav__title: `text-sm lg:text-base`,
  links__wrapper: `flex flex-row items-center gap-3`,
  size: `w-4 lg:w-5 fill-slate-600 dark:fill-slate-200 `,
}

const MainNavbar = () => {
  const {t} = useTranslation('common')
  return (
    <div className={style.main__navbar__wrapper}>
      <div className={style.main__navbar__container}>
        <h2 className={style.nav__title}>{t('followUs')}</h2>
        <div className={style.links__wrapper}>
          {soicalIcons.map((icon) => {
            return (
              <Link href={icon.href} key={icon.id}>
                <a>
                  <icon.iconName className={style.size} />
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MainNavbar
