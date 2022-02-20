import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import React from 'react'

const Partners = () => {
  const {t} = useTranslation('home')

  const style = {
    wrapper: `relative w-full bg-stone-600 bg-[url("/images/pharaohs-wall.jpg")] bg-cover bg-fixed bg-center bg-no-repeat py-14 bg-blend-overlay`,
    title: ` uppercase mb-8 text-center font-aclonica text-2xl text-white lg:text-3xl`,
    partner__wrapper: `mx-auto flex h-full w-4/5 max-w-7xl flex-col flex-wrap gap-10 text-center md:grid md:grid-cols-2 md:justify-evenly`,
  }

  const partnersList = [
    {
      id: 1,
      logo: '/images/MNB-LOGO.png',
      name: 'MNB',
      width: '481',
      height: '86',
    },
    {
      id: 2,
      logo: '/images/kozak-studio.png',
      name: 'Kozak',
      width: '217',
      height: '351',
      classes: 'row-span-2',
    },
    {
      id: 3,
      logo: '/images/logoPlatinum.svg',
      name: 'Platinum',
      width: '481',
      height: '86',
    },
  ]
  return (
    <section id="partner" className={style.wrapper}>
      <h2 className={style.title}>{t('outPartner')}</h2>
      <div className={style.partner__wrapper}>
        {partnersList.map((obj) => {
          return (
            <div
              key={obj.id}
              className={`${obj.classes} place-self-center rounded-xl bg-white p-8 shadow-lg shadow-yellow-700 backdrop-blur-sm`}>
              <Image
                src={obj.logo}
                alt={obj.name}
                width={obj.width}
                height={obj.height}
                priority
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Partners
