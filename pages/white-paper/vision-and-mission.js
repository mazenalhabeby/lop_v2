import PageTitle from '@/components/pages/white_paper/PageTitle'
import React from 'react'
import {motion} from 'framer-motion'

export default function visionAndMission() {
  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="w-full lg:w-3/5 mx-auto">
      <div className="lg:pt-6">
        <PageTitle title={'Vision And Mission'} />
      </div>
      <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 rounded-lg shadow-lg shadow-slate-400 dark:shadow-slate-800 border-t-[1px] border-l-[1px] border-slate-800/20 dark:border-white/20 mx-2 my-10 lg:mx-10">
        <div className="my-4">
          <div className="flex flex-col space-y-20">
            <div>
              <div className="flex flex-row items-center gap-2">
                <div className="w-3 h-3 bg-cyan-500 rotate-45 border-2 border-yellow-600 brightness-125 dark:brightness-150"></div>
                <h2 className="lg:text-lg font-aclonica tracking-wider text-sm">
                  VISION
                </h2>
              </div>
              <div className="text-lg tracking-wider leading-loose flex flex-col space-y-5">
                <p>
                  To create an excellent, stable and ever-evolving block-chain
                  game; which empowers our community with equal opportunity to
                  earn assets while enjoying a great MOBA gaming experience
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center gap-2">
                <div className="w-3 h-3 bg-cyan-500 rotate-45 border-2 border-yellow-600 brightness-125 dark:brightness-150"></div>
                <h2 className="lg:text-lg font-aclonica tracking-wider text-sm">
                  MISSION
                </h2>
              </div>
              <ul className="text-lg tracking-wider leading-loose flex flex-col space-y-5 list-decimal list-inside">
                <li>
                  Empower the Community : we want our members to have full
                  ownership of their assets and know that their feedback,
                  suggestions and involvement makes a difference in LOP&#39;s
                  evolution.
                </li>
                <li>
                  A Strong Ecosystem : we aim to provide a fair, balanced,
                  transparent and self-sustaining ecosystem where all players
                  are incentivized to play and earn assets.
                </li>
                <li>
                  An Excellent Game : As MOBA enthusiasts, we are cutting no
                  corners and we are driven to create an absolutely fantastic
                  gaming experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

visionAndMission.layout = 'whitePaper'
