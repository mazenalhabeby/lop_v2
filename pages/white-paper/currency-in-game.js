import PageTitle from '@/components/pages/white_paper/PageTitle'
import {motion} from 'framer-motion'
import React from 'react'

export default function CurrencyInGame() {
  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="w-full lg:w-3/5 mx-auto">
      <div className="lg:pt-6">
        <PageTitle title={'Currency In Game'} />
        <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 rounded-lg shadow-lg shadow-slate-400 dark:shadow-slate-800 border-t-[1px] border-l-[1px] border-slate-800/20 dark:border-white/20 mx-2 my-10 lg:mx-10">
          <p className="text-lg tracking-wider leading-loose text-center">
            Players can earn in-game currency after completing a match. Matches
            will reward players with in-game currency and/or Gold depending on
            the type of match to use for utilities etc. <br />
            In addition, players will have a higher earning potential of in-game
            currency and Gold based on the rarity of the respective Pharaoh used
            for that match.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

CurrencyInGame.layout = 'whitePaper'
