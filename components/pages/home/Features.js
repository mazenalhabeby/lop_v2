import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import {
  MdInsertPhoto,
  MdPayments,
  MdSportsEsports,
  MdStore,
} from 'react-icons/md'
import Wings from '@/components/icons/Wings'

const FeaturesSection = () => {
  const {t} = useTranslation('home')

  const style = {
    section: `py-14`,
    section__wrapper: `container mx-auto space-y-8 text-center`,
    section__title: `font-aclonica text-2xl uppercase leading-relaxed lg:text-3xl`,
    description: `mx-auto w-full px-4 text-xl leading-9 tracking-wider md:w-1/2 md:px-0`,
    video: `mx-auto h-96 w-full md:w-3/5`,
    features__title: `font-aclonica text-3xl uppercase lg:text-4xl`,
    features__wrapper: `flex flex-row flex-wrap justify-center gap-2 gap-y-6 md:justify-evenly`,
    feature__wrapper: `w-80 space-y-2 text-center`,
    feature__title: `font-aclonica text-2xl text-yellow-600`,
    feature__disc: `leading-relaxed`,
    feature__icon: `w-[20rem] fill-yellow-600`,
    feature__icon__inside: `absolute inset-0 m-auto text-5xl text-slate-200 dark:text-slate-800`,
  }

  const features = [
    {
      id: 1,
      title: t('nftOwnership'),
      description: t('ownershipDesc'),
      imgHolder: '/images/wings02.svg',
      imgChild: MdInsertPhoto,
    },
    {
      id: 2,
      title: t('marketPlace'),
      description: t('marketDesc'),
      imgHolder: '/images/wings02.svg',
      imgChild: MdStore,
    },
    {
      id: 3,
      title: t('nftStaking'),
      description: t('stakingDesc'),
      imgHolder: '/images/wings02.svg',
      imgChild: MdPayments,
    },
    {
      id: 4,
      title: t('mobaGame'),
      description: t('gameDesc'),
      imgHolder: '/images/wings02.svg',
      imgChild: MdSportsEsports,
    },
  ]
  return (
    <section className={style.section} id="overview">
      <div className={style.section__wrapper}>
        <h2 className={style.section__title}>
          BIGGEST FREE-TO-PLAY, <br />{' '}
          <span className="text-yellow-600">PLAY-TO-EARN </span>
          NFT MOBA GAME
        </h2>
        <p className={style.description}>
          Engage in epic 5v5 strategic warfare in League of Pharaohs. Your goal?
          Destroy the opposing team&#39;s Beacon of Power. Sounds easy?!
          Maybe... Do you work as a team? Do you use terrain to your advantage?
          Do you strategically ambush the enemy? Do you gather gold and upgrade
          your pharaohs? Your skill, teamwork, wit, and determination shall
          decide whether you return home a hero, or in a coffin...
        </p>
        <div className={style.video}>
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/A-Y4iHUpurU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <h3 className={style.features__title}>features</h3>
        <div className={style.features__wrapper}>
          {features.map((obj) => {
            return (
              <div key={obj.id} className={style.feature__wrapper}>
                <h3 className={style.feature__title}>{obj.title}</h3>
                <p className={style.feature__disc}>{obj.description}</p>
                <div className="relative">
                  <Wings className={style.feature__icon} />
                  <obj.imgChild className={style.feature__icon__inside} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
