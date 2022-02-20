import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FaLinkedin, FaTwitter} from 'react-icons/fa'
import {MdDashboard} from 'react-icons/md'

const TeamMembers = () => {
  const {t} = useTranslation('common')

  const teamWork = [
    {
      id: 1,
      character: '/images/members/maz.png',
      possion: t('charactorPossion1'),
      jobTitle: t('characterJob1'),
      name: t('characterName1'),
      twitter: '/AmazenDessouky',
      linkedIn: '/in/ahmed-mazen-31b237176/',
      website: ' ',
    },
    {
      id: 2,
      character: '/images/members/bill.png',
      possion: t('charactorPossion2'),
      jobTitle: t('characterJob2'),
      name: t('characterName2'),
      twitter: ' ',
      linkedIn: '/in/bill-salah-b89002201/',
      website: ' ',
    },
    {
      id: 3,
      character: '/images/members/asad.png',
      possion: t('advisorPossion2'),
      jobTitle: t('advisorTitle2'),
      name: t('advisor2'),
      twitter: '/AsadzeeshanAZ ',
      linkedIn: '/in/asadzeeshan/',
      website: ' ',
    },
    {
      id: 4,
      character: '/images/members/nana.png',
      possion: t('advisorPossion1'),
      jobTitle: t('advisorTitle1'),
      name: t('advisor1'),
      twitter: ' ',
      linkedIn: '/in/nariman-salah-612316229/',
      website: ' ',
    },
    {
      id: 5,
      character: '/images/members/kate.png',
      possion: t('charactorPossion3'),
      jobTitle: t('characterJob3'),
      name: t('characterName3'),
      twitter: '/soy__Catalina',
      linkedIn: '/in/katerina-stepanova-3bb20a153/',
      website: ' ',
    },
    {
      id: 6,
      character: '/images/members/daved.png',
      possion: t('charactorPossion5'),
      jobTitle: t('characterJob5'),
      name: t('characterName5'),
      twitter: '/David90079007',
      linkedIn: '/in/david-okorokoff-1362071a3/',
      website: ' ',
    },
    {
      id: 7,
      character: '/images/members/team02.png',
      possion: t('charactorPossion4'),
      jobTitle: t('characterJob4'),
      name: t('characterName4'),
      twitter: ' ',
      linkedIn: ' ',
      website: ' ',
    },
  ]

  return (
    <div>
      <div className="container mx-auto space-y-8">
        <div className="space-y-8">
          <div className="flex flex-row flex-wrap justify-center text-center">
            {teamWork.map((obj) => {
              return (
                <div
                  key={obj.id}
                  className="m-8 rounded-2xl px-4 py-6 nm-flat-slate-100-lg dark:nm-flat-slate-900-xl">
                  <Image
                    src={obj.character}
                    alt={obj.name}
                    width={253}
                    height={317}
                    priority
                  />
                  <div className="text-center ">
                    <h2 className="font-aclo text-2xl">{obj.name}</h2>
                    <h1 className="">{obj.possion}</h1>
                    <h3>{obj.jobTitle}</h3>
                    <div className="flex flex-row flex-wrap justify-evenly">
                      {obj.twitter == ' ' ? (
                        ' '
                      ) : (
                        <div className="mt-3 flex h-14 w-14 flex-row items-center justify-center rounded-xl nm-inset-slate-100-lg dark:nm-inset-slate-900-xl">
                          <Link href={`https://twitter.com${obj.twitter}`}>
                            <a target="_blank">
                              <FaTwitter className="align-middle text-3xl text-yellow-600 dark:text-yellow-500" />
                            </a>
                          </Link>
                        </div>
                      )}
                      {obj.linkedIn == ' ' ? (
                        ' '
                      ) : (
                        <div className="mt-3 flex h-14 w-14 flex-row items-center justify-center rounded-xl nm-inset-slate-100-lg dark:nm-inset-slate-900-xl">
                          <Link
                            href={`https://www.linkedin.com${obj.linkedIn}`}>
                            <a target="_blank">
                              <FaLinkedin className="align-middle text-3xl text-yellow-600 dark:text-yellow-500" />
                            </a>
                          </Link>
                        </div>
                      )}
                      {obj.website == ' ' ? (
                        ' '
                      ) : (
                        <div className="mt-3 flex h-14 w-14 flex-row items-center justify-center rounded-xl nm-inset-slate-100-lg dark:nm-inset-slate-900-xl">
                          <Link href={obj.website}>
                            <a target="_blank">
                              <MdDashboard className="align-middle text-3xl text-yellow-600 dark:text-yellow-500" />
                            </a>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMembers
