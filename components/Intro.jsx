import Image from 'next/image';
import { motion } from "framer-motion";

function Intro(){
  return(
    <div id='about' className='w-screen h-full bg-primary font-thin text-primary_text lg:tracking-widest tracking-wider'>
      <div className="py-2 justify-center items-center">
        <div className="xl:p-28 p-10">
          <div className="xl:flex items-center justify-center">
            <div>
              <h1 className="xl:text-6xl xl:leading-[60px] lg:text-5xl md:text-4xl md:leading-[40px] leading-[30px] text-2xl">Now providing World Class Inter-Disciplinary Construction and Engineering services to collaborating partners in Bangladesh.</h1>
            </div>
            <motion.div 
            className="items-center flex justify-center max-w-[800px]">
              <Image src={'/assets/logos/intro-gif.gif'} width={1700} height={100}/>
            </motion.div>
          </div>
      </div>
      <div className="xl:px-28 px-10 py-10 max-w-[1800px]">
        <div className="flex justify-right">
          <h1 className="xl:text-7xl md:text-5xl text-2xl">Introducing <span className="text-red_text font-semibold xl:text-8xl md:text-6xl text-3xl tracking-tight text-shadow shadow-dark_red">IDEA <span className="xl:text-6xl md:text-4xl text-xl">CSC</span></span> (US IDEA <span className="xl:text-5xl md:text-3xl text-lg">CSC</span> (PVT.) LTD.), a Sister Company of <span href={'https://www.ideaaec.com'} className='text-purple_accent_3'>IDEA <span className="xl:text-5xl md:text-3xl text-lg">AEC</span> (USA)</span>.</h1>
        </div>
      </div>
      </div>
      
    </div>
    
  )
}

export default Intro