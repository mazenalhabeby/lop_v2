import TeamMembers from '@/components/TeamMembers'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React from 'react'

const Team = () => {
  const {t} = useTranslation('common')
  return (
    <section id="out-team" className="pt-14">
      <h2 className=" mb-8 text-center font-aclonica text-2xl uppercase lg:text-3xl">
        {t('ourTeam')}
      </h2>
      <TeamMembers />
      <div className="flex flex-col space-y-11 bg-gradient-to-r from-slate-700 to-yellow-900 py-20 text-center text-white">
        <div>
          <h2 className="font-aclo text-2xl uppercase tracking-wider">
            join the Pharaohs army Now
          </h2>
          <div>Building the Greatest MOBA NFT Game Together</div>
        </div>
        <div>
          <Link
            href={
              'https://docs.google.com/forms/d/1VpdYLn6tNpZLjq70699z-d8vQmSSbKUlp3CnKoA8JEM'
            }>
            <a className="font-aclo mx-auto rounded-lg border-2 py-5 px-5 text-xl tracking-wider hover:border-yellow-500  hover:text-yellow-500">
              Send Resume
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Team
