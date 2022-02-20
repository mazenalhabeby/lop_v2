import FeaturesSection from '@/components/pages/home/Features'
import Hero from '@/components/pages/home/Hero'
import Partners from '@/components/pages/home/Partners'
import Roadmap from '@/components/pages/home/Roadmap'
import Team from '@/components/pages/home/Team'
import Tokenomics from '@/components/pages/home/Tokenomics'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <Tokenomics />
      <Roadmap />
      <Partners />
      <Team />
    </>
  )
}

Home.layout = 'home'
