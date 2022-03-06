import PageTitle from '@/components/pages/white_paper/PageTitle'
import {motion} from 'framer-motion'
import React from 'react'

export default function Whitepaper() {
  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="w-full lg:w-3/5 mx-auto">
      <div className="lg:pt-6">
        <PageTitle title={'League Of Pharaohs (LOP)'} />
        <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 rounded-lg shadow-lg shadow-slate-400 dark:shadow-slate-800 border-t-[1px] border-l-[1px] border-slate-800/20 dark:border-white/20 mx-2 my-10 lg:mx-10">
          <p className="text-lg tracking-wider leading-loose text-center">
            <strong>League of Pharaohs (LOP) </strong> is a MOBA NFT-game
            inspired by DOTA2 and League of Legends. LOP aspires to create an
            engaging community with a thriving economy; focusing on Free-to-Play
            and Play-to-Earn mechanics by leveraging blockchain technology.
            LOP&#39;s model is a zero-barrier entry model where anyone can play
            and progress in the game with no upfront costs required. With this
            model, LOP&#39;s aim is to transform the eSports scene where
            everybody can earn like a professional gamer. This project is
            venturing into a genre with a player base of over 250 million
            worldwide. 99.99% of the existing global player base generates NO
            income from the sport. We aim to change that and give all players an
            opportunity to enjoy the game and earn a living anytime, anywhere
            and on any mobile device. The MOBA genre became popular when DoTA
            was first introduced into the eSports scene over 20 years ago. It
            has since then grown exponentially, to become the foundation of the
            most iconic eSports tournament worldwide. Fast forward twenty years
            and the gaming world is still obsessed with playing MOBA games. The
            average player spends 8 hours a day playing MOBA games; simply
            because this competitive genre provides endless replay value via its
            strategic, team-oriented and adrenaline-fueled battles. We see
            League of Pharaohs as the latest evolution for MOBA games where
            players can convert their enjoyment and commitment into real-world
            assets. <br />
            Let&#39;s Pawn-to-Earn!
          </p>
        </div>
      </div>
    </motion.div>
  )
}

Whitepaper.layout = 'whitePaper'
