import {Link, animateScroll as scroll} from 'react-scroll'
import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const HomeLinks = () => {
  const {t} = useTranslation('common')
  const links = [
    {
      link_id: 1,
      name: t('liOverview'),
      href: 'overview',
    },
    {
      link_id: 2,
      name: t('liTokenomics'),
      href: 'tokenomics',
    },
    {
      link_id: 3,
      name: t('liRoadmap'),
      href: 'roadmap',
    },
    {
      link_id: 4,
      name: t('liPartner'),
      href: 'partner',
    },
    {
      link_id: 5,
      name: t('liOurteam'),
      href: 'out-team',
    },
  ]

  const style = {
    link__wrapper: `item-center flex h-7 flex-grow flex-col gap-10 justify-center font-aclonica capitalize tracking-wider lg:gap-0 lg:flex-row text-sm text-center`,
    links: `block lg:h-full w-32 cursor-pointer h-8`,
    links__active: `block h-full w-32 bg-[url('/images/border_light.png')]  bg-contain bg-bottom bg-no-repeat text-center text-yellow-700 dark:bg-[url('/images/border.png')]  dark:text-yellow-500`,
  }

  return (
    <div className="m-auto">
      <ul className={style.link__wrapper}>
        {links.map((link) => (
          <li key={link.link_id}>
            <Link
              activeClass={style.links__active}
              className={style.links}
              to={link.href}
              spy={true}
              smooth={true}
              duration={800}
              offset={-100}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomeLinks
