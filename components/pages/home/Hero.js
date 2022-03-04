import StoreIcons from '@/components/StoreIcons'
import {Button} from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React from 'react'

const style = {
  wrapper: `relative`,
  bg__image: `h-full flex-col before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('/images/pharaohs-wall.jpg')] before:bg-cover before:bg-center before:opacity-70 before:blur-sm before:content-[''] dark:before:blur`,
  split__container: `absolute top-0 h-full w-full`,
  box__up: `h-[40%] w-full`,
  box__down: `flex flex-col h-[60%] w-full items-center justify-center md:justify-end bg-slate-200 dark:bg-black text-slate-700 dark:text-white space-y-2 pb-6 bg-[url(/images/bg-white.png)] dark:bg-[url(/images/bg-black.png)]`,
  title: `text-center font-aclonica text-lg md:text-2xl lg:text-3xl uppercase leading-10 tracking-widest`,
  button__wrapper: `flex flex-row gap-4`,
  button: `bg-yellow-600 text-white hover:bg-yellow-500 z-[1]`,
  button__outline: `rounded-md border-2 border-yellow-600 text-slate-800 hover:border-2 hover:border-yellow-600 hover:bg-yellow-600 hover:text-white dark:text-white`,
  sub__title: `text-xl capitalize tracking-wider font-aclonica`,
  divider: `h-[2px] w-full rounded-full bg-yellow-600 my-2`,
  soical__wrapper: `flex flex-row gap-4`,
  video__container: `absolute top-0 h-[70%] w-full`,
  video__sub__container: `relative mx-auto flex h-[50%] lg:h-[70%] max-w-6xl items-center justify-center`,
  video__box: `absolute top-12 left-0 h-full w-full rounded-lg`,
  video: `h-full w-full rounded-lg`,
  canvas__box: `pointer-events-none absolute inset-1 top-7 left-4 right-4 -bottom-16`,
  canvas: `h-full w-full rounded-tr-3xl border-2 border-yellow-600`,
}

const Hero = () => {
  const {t} = useTranslation('home')
  return (
    <div className={style.wrapper} style={{height: 'calc(100vh - 96px)'}}>
      <div className={style.bg__image}></div>
      <div className={style.split__container}>
        <div className={style.box__up}></div>
        <div className={style.box__down}>
          <h1 className={style.title}>
            {t('ageOf')}
            <span className="text-xl text-yellow-600 md:text-3xl lg:text-4xl">
              {t('pharaohs')}
            </span>{' '}
            <br />
            {t('onTheBlockchain')}
          </h1>
          <div className={style.button__wrapper}>
            <Button className={style.button} variant="contained">
              <Link href={'/white-paper'}>
                <a>{t('whitePaper')}</a>
              </Link>
            </Button>
            <Button variant="outlined" className={style.button__outline}>
              {t('buyLop')}
            </Button>
          </div>
          <div>
            <span className={style.sub__title}>{t('avalibleOn')}</span>
            <div className={style.divider}></div>
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            <StoreIcons />
          </div>
        </div>
      </div>
      <div className={style.video__container}>
        <div className={style.video__sub__container}>
          <div className={style.video__box}>
            <video
              autoPlay={true}
              muted
              preload="metadata"
              playsInline
              loop
              src="/videos/hero-video.mp4"
              data-object-fit="cover"
              data-object-position="center center"
              style={{
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
              className={style.video}></video>
          </div>
          <div className={style.canvas__box}>
            <canvas className={style.canvas}></canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
