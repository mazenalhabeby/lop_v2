import {motion} from 'framer-motion'
import React from 'react'

export default function Lop() {
  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}>
      <div>lop</div>
    </motion.div>
  )
}

Lop.layout = 'whitePaper'
