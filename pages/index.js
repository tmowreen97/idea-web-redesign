import Image from 'next/image'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import { Urbanist } from 'next/font/google'
import About from '@/components/About'
import Navbar from '@/components/Navbar'
import { useState } from 'react';
import Developments from '@/components/Developments'
import AboutUs from '@/components/AboutUs'

const urbanist = Urbanist({ 
  subsets: ['latin'],
  variable: '--font-urbanist' 
})

export default function Home() {
  const [lightLogo, setLightLogo] = useState(false)

  return (
    <main className={`${urbanist.variable} font-sans tracking-wider justify-center items-center h-full`}>
      {/* <Navbar setLightLogo={setLightLogo} lightLogo={lightLogo} /> */}
      <Hero heading='We Empower Ideas'/>
      <Intro/>
      <AboutUs/>
      {/* <About/> */}
      <Developments/>
      
    </main>
  )
}
