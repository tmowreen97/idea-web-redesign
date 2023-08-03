import Image from 'next/image'
import Hero from '@/components/Hero'
import { Urbanist } from 'next/font/google'
import About from '@/components/About'
import ProjectHome from '@/components/ProjectHome'

const urbanist = Urbanist({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${urbanist.className}`}>
      <Hero heading='Captur Photography' message='I capture moments in nature and keep them alive.' />
      <About/>
      <ProjectHome/>
    </main>
  )
}
