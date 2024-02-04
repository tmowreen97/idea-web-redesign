import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
// import { Urbanist } from 'next/font/google'
import Footer from '@/components/Footer'
import Head from 'next/head';
import { Urbanist } from 'next/font/google'
import { useState, useEffect, useReducer } from 'react'
import {useRouter} from 'next/router'


const urbanist = Urbanist({
  subsets: ['latin']
})
export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [lightLogo, setLightLogo] = useState(false)
  const [logo, setLogo] = useState(false)
  useEffect(()=> {
    if (router.pathname=='/contact' || router.pathname=='/thank-you'){
      setLogo(true)
    }else{
      setLogo(false)
    }
  }, [router])

  return (
    <main className={urbanist.className}>
      <Head>
      <title>IDEA | Inter-Disciplinary Engineering Associates</title>
      </Head>
      <Navbar setLightLogo={setLightLogo} lightLogo={lightLogo} />
      <Component {...pageProps} />
      <Footer logo={logo} setLogo={setLogo}/>
    </main>
    
  )
}


