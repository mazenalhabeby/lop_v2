import React from 'react'
import {motion} from 'framer-motion'
import PageTitle from '@/components/pages/white_paper/PageTitle'

export default function GamePlay() {
  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="w-full lg:w-3/5 mx-auto">
      <div className="lg:pt-6">
        <div>
          <div>
            <PageTitle title={'Game Play'} />
            <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 rounded-lg shadow-lg shadow-slate-400 dark:shadow-slate-800 border-t-[1px] border-l-[1px] border-slate-800/20 dark:border-white/20 mx-2 my-10 lg:mx-10">
              <p className="text-lg tracking-wider leading-loose text-center">
                10 players will be thrust into the Egyptian Ancient Realm
                tileset map where they will engage in a 5v5 PVP team battle. The
                map is divided into two sides. The objective of the game is to
                destroy the base of the opposing team. Though it sounds simple,
                there are several layers of complexity to this. The map is vast
                and is focused on controlling lanes. Each lane leads to the
                opposing teams base and is guarded by endless waves of enemy
                minions and powerful turrets. Surrounding these lanes is the
                desert and river which players can utilize strategically to hunt
                powerful creatures, escape, ambush and or navigate the map
                covertly. This PVP game style has been tried and tested for over
                20 years, proving to be endlessly entertaining and exciting.
              </p>
            </div>
          </div>
          <div>
            <PageTitle title={'Pharaohs'} />
            <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 rounded-lg shadow-lg shadow-slate-400 dark:shadow-slate-800 border-t-[1px] border-l-[1px] border-slate-800/20 dark:border-white/20 mx-2 my-10 lg:mx-10">
              <p className="text-lg tracking-wider leading-loose text-center">
                League of Pharaohs is an eSports MOBA NFT game based on
                block-chain technology. Players can play for free and choose any
                of the 10 &#34;Origin&#34; pharaohs to use at the start of the
                game. Each pharaohs has one passive and three active skills. The
                pharaohs are categorized into 5 roles based on their utility in
                the game, which is Tank, Mage, Marksman, Support and Assassin.
              </p>
            </div>
          </div>
          <div>
            <PageTitle title={'Equipment'} />
            <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 rounded-lg shadow-lg shadow-slate-400 dark:shadow-slate-800 border-t-[1px] border-l-[1px] border-slate-800/20 dark:border-white/20 mx-2 my-10 lg:mx-10">
              <p className="text-lg tracking-wider leading-loose text-center">
                Players can purchase equipment in-game to make their Pharaohs
                more powerful. Making wise purchases can significantly alter the
                results of a match. Earning gold and purchasing the right
                equipment is vital to securing victory in the MOBA landscape.
                There are 6 primary equipment attributes - Physical damage,
                Magical damage, Defense, Movement, Jungle and Support. Each
                category of equipment has different tiers, whereby Tier 1 is the
                lowest and Tier 3 is the highest. Players can obtain higher tier
                equipment by purchasing it directly or combining lower tier
                items.
              </p>
            </div>
          </div>
          <div>
            <PageTitle title={'Game Mode'} />
            <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 rounded-lg shadow-lg shadow-slate-400 dark:shadow-slate-800 border-t-[1px] border-l-[1px] border-slate-800/20 dark:border-white/20 mx-2 my-10 lg:mx-10">
              <p className="text-lg tracking-wider leading-loose text-center">
                In League of Pharaohs, there are currently three game modes
                which are Normal Match, NFT Match and Tournament. Each game mode
                will reward players with in-game currency after completing each
                match.
              </p>
              <div className="space-y-12 mt-10">
                <div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="w-3 h-3 bg-cyan-500 rotate-45 border-2 border-yellow-600 brightness-125 dark:brightness-150"></div>
                    <h2 className="lg:text-lg font-aclonica tracking-wider text-sm">
                      Normal Match
                    </h2>
                  </div>
                  <p className="text-lg tracking-wider leading-loose">
                    Normal Match is the first and earliest game mode in League
                    of Pharaohs. All other game modes use the mechanics of
                    Normal Matches as their base. It is an UNRANKED 5v5 PVP
                    experience. This means that players do not lose rank titles
                    if they did not win the game. This mode is suitable for
                    beginners who need to familiarize themselves with the
                    gameplay mechanics. You are free to choose any Pharaoh to
                    play with. However, you are not allowed to have more than
                    one of the same Pharaohs on your team. The opposing team,
                    however, CAN pick the same Pharaoh that is chosen on your
                    team. Players can earn in-game currency by completing each
                    normal match.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="w-3 h-3 bg-cyan-500 rotate-45 border-2 border-yellow-600 brightness-125 dark:brightness-150"></div>
                    <h2 className="lg:text-lg font-aclonica tracking-wider text-sm">
                      NFT Match
                    </h2>
                  </div>
                  <p className="text-lg tracking-wider leading-loose">
                    NFT Match is a competitive seasonal game mode that runs for
                    a specific period of time. You will be competing with other
                    players sharing your ranked division bracket. Players will
                    have access to play all the 10 &#34;Origin&#34; Pharaohs as
                    long as they have a certain number of NFT skins at any
                    rarity level. The rank titles from lowest to highest are
                    Sentinel, Royal Knight, vizier, greatest Vizier, King of
                    pharaohs, god of pharaohs. Sentinel is the lowest division,
                    whereas the god of pharaohs is for the best of the best.
                    Every time you win a Ranked match, you will gain MMR and
                    in-game currency. The amount of in-game currency will be
                    higher compared to playing a normal match. When the season
                    ends, the rankings will be reset accordingly and a new
                    season begins.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="w-3 h-3 bg-cyan-500 rotate-45 border-2 border-yellow-600 brightness-125 dark:brightness-150"></div>
                    <h2 className="lg:text-lg font-aclonica tracking-wider text-sm">
                      Tournaments
                    </h2>
                  </div>
                  <p className="text-lg tracking-wider leading-loose">
                    A tournament is a feature of the game that allows organizers
                    to host in-game tournaments. It will be supervised by the
                    League of Pharaohs. Each participating team has to pay a
                    registration fee, where 5% of the total registration fee
                    collected will be for the tournament organizer to cover for
                    the administration purpose. The teams will challenge each
                    other for the total prize pool allocated for that specific
                    tournament. The prize pool consists of $LOP tokens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

GamePlay.layout = 'whitePaper'
