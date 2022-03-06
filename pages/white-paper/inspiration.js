import PageTitle from '@/components/pages/white_paper/PageTitle'
import {motion} from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export default function Lop() {
  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="w-full lg:w-3/5 mx-auto">
      <div className="lg:pt-6">
        <PageTitle title={'Inspiration'} />
        <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 rounded-lg shadow-lg shadow-slate-400 dark:shadow-slate-800 border-t-[1px] border-l-[1px] border-slate-800/20 dark:border-white/20 mx-2 my-10 lg:mx-10">
          <div className=" bg-slate-800 p-2 rounded-xl flex justify-center items-center dark:bg-transparent mx-auto w-max">
            <Image
              src={'/images/WEBLOGO.png'}
              alt="league of pharaohs logo"
              width={280}
              height={100}
            />
          </div>
          <div className="my-4">
            <div className="flex flex-row items-center gap-2">
              <div className="w-3 h-3 bg-cyan-500 rotate-45 border-2 border-yellow-600 brightness-125 dark:brightness-150"></div>
              <h2 className="lg:text-lg font-aclonica tracking-wider text-sm">
                What Inspired LOP?
              </h2>
            </div>
            <div className="text-lg tracking-wider leading-loose flex flex-col space-y-5">
              <p>
                Before a great project comes to fruition, great inspiration must
                precede it. When deciding on what to call our passionate
                project, we had at least a hundred ideas. At first, we couldn’t
                decide. but after team discussion, we followed our passion, it
                is MOBA games and Ancient Egyptian civilization, it only made
                sense to come up with a name and image which encompassed the
                feel of the great games that inspired us. League of Pharaohs was
                the name we chose. It encapsulated the essence of our
                inspirations while maintaining a new, yet familiar identity of
                its own.
              </p>
              <p>
                <strong>League of Pharaohs -</strong> A fusion of our greatest
                inspirations.
              </p>
              <p>
                <strong>Golden color - </strong>Inspired by the greatness of the
                pharaonic civilization and how they used gold to decorate their
                existence.
              </p>
              <p>
                <strong> The boat -</strong> Inspired by the greatness of Khufu
                ship.
              </p>
              <p>
                <strong> Ankh and letter A -</strong> ankh symbol to the life
                and letter A symbol to the pyramids and both symbol to life and
                death.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

Lop.layout = 'whitePaper'
