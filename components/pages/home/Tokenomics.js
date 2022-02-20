import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import React from 'react'

const Tokenomics = () => {
  const {t} = useTranslation('home')

  const style = {
    wrapper: `w-full bg-black bg-opacity-90 bg-[url("/images/bg.jpg")] bg-cover bg-fixed bg-center bg-no-repeat py-14 text-white bg-blend-overlay`,
    title: `text-center font-aclonica text-2xl uppercase leading-relaxed lg:text-3xl`,
    content__wrapper: `flrex-wrap spa-y-8 container mx-auto flex md:flex-row flex-col justify-between`,
    description__wrapper: `w=full space-y-5 px-2 md:w-1/2`,
    description__title: `font-aclonica text-center text-4xl tracking-widest text-yellow-300`,
    description__header: `text-center text-2xl`,
    description__header__content: `text-lg leading-relaxed`,
    description__content: `flex flex-row flex-wrap justify-start`,
  }

  const tokenDesc = [
    {
      id: 1,
      image: '/images/Group24.svg',
      title: t('tokenTitle1'),
      discraption: t('tokenFeature01'),
    },
    {
      id: 2,
      image: '/images/Group25.svg',
      title: t('tokenTitle2'),
      discraption: t('tokenFeature02'),
    },
    {
      id: 3,
      image: '/images/Group26.svg',
      title: t('tokenTitle3'),
      discraption: t('tokenFeature03'),
    },
    {
      id: 4,
      image: '/images/Group27.svg',
      title: t('tokenTitle4'),
      discraption: t('tokenFeature04'),
    },
  ]
  return (
    <section id="tokenomics" className={style.wrapper}>
      <h2 className={style.title}>{t('tokenomies')}</h2>
      <div className={style.content__wrapper}>
        <div className="self-center">
          <Image
            src="/images/CHART-4.png"
            alt="Token"
            width={510}
            height={380}
            priority
          />
        </div>
        <div className={style.description__wrapper}>
          <h3 className={style.description__title}>{t('token')}</h3>
          <p className={style.description__header}>{t('totalSupply')}</p>
          <p className={style.description__header__content}>{t('tokenDesc')}</p>
          <div>
            <ul className="space-y-4">
              {tokenDesc.map((obj) => {
                return (
                  <li key={obj.id} className={style.description__content}>
                    <div className="w-1/5">
                      <Image
                        src={obj.image}
                        alt={obj.title}
                        width={100}
                        height={100}
                        priority
                      />
                    </div>
                    <div className="w-4/5">
                      <h2>{obj.title}</h2>
                      <p className="">{obj.discraption}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics
