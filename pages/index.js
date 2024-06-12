import Image from 'next/image'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import { Urbanist } from 'next/font/google'
import { useState } from 'react';
import Projects from '@/components/Projects';
import AboutUs from '@/components/AboutUs'

const urbanist = Urbanist({ 
  subsets: ['latin'],
  variable: '--font-urbanist' 
})

export default function Home() {
  const [lightLogo, setLightLogo] = useState(false)

  return (
    <main className={`${urbanist.variable} font-sans tracking-wider justify-center items-center h-full`}>
      <Hero heading='We Empower Ideas'/>
      <Intro/>
      <AboutUs/>
      <Projects/>
      
    </main>
  )
}
