import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
// import { Urbanist } from 'next/font/google'
import Footer from '@/components/Footer'
import Foot from '@/components/Foot'
import { Urbanist } from 'next/font/google'
import { useState, useEffect, useReducer } from 'react'
import {useRouter} from 'next/router'


const urbanist = Urbanist({
  subsets: ['latin']
})
export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [logo, setLogo] = useState(false)
  useEffect(()=> {
    if (router.pathname=='/contact' || router.pathname=='/thank-you'){
      console.log(router.pathname)
      setLogo(true)
    }else{
      setLogo(false)
    }
  }, [router])
  console.log(logo, 'logo')

  return (
    <main className={urbanist.className}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer logo={logo} setLogo={setLogo}/>
    </main>
    
  )
}


