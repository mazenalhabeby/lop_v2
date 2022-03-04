import {motion} from 'framer-motion'
import React from 'react'

export default function Whitepaper() {
  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}>
      <div className="w-full h-64 bg-[url('/images/bgup01.png')] bg-contain bg-no-repeat"></div>
      <div>whitePaper</div>
      <div className="w-full h-64 bg-[url('/images/bgdown01.png')] bg-contain bg-no-repeat"></div>
    </motion.div>
  )
}

Whitepaper.layout = 'whitePaper'
