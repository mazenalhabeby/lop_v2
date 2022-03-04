import FeaturesSection from '@/components/pages/home/Features'
import Hero from '@/components/pages/home/Hero'
import Partners from '@/components/pages/home/Partners'
import Roadmap from '@/components/pages/home/Roadmap'
import Team from '@/components/pages/home/Team'
import Tokenomics from '@/components/pages/home/Tokenomics'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}>
      <Hero />
      <FeaturesSection />
      <Tokenomics />
      <Roadmap />
      <Partners />
      <Team />
    </motion.div>
  )
}

Home.layout = 'home'
