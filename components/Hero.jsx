import {React, useState, useEffect, useCallback} from 'react';
import { motion } from 'framer-motion';

function Hero({heading}){
  const [descTwo, setDescTwo] = useState(false)
  const [coord, setCoord]= useState(["0,0 0,0 0,0"])  
  const [animate, setAnimate] = useState(true)
  const [mobileAnimate, setMobileAnimate] = useState(false)
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };


  const isBreakPoint = useMediaQuery(700)

  function handleMobileAnimate(){
    setAnimate(!animate)
    setMobileAnimate(!mobileAnimate)
  }

  return (
    <div className={isBreakPoint ? 'flex items-center justify-center h-screen w-screen pb-16 bg-center bg-cover mobile-img':'flex items-center justify-center h-screen w-screen pb-16 bg-center bg-cover custom-img'}>
      <div className=" mb-40 md:mb-0 ">
      </div>
      <motion.div 
      initial={{opacity:0.1}}
      whileInView={{opacity:[0.5, 0.8, 1], transition:{delay:1.2, duration:1}}}
      className='p-5 text-primary_text  z-0 mt-[-10rem]'
      >
        <h1 className='lg:text-[850%] text-7xl text-shadow-lg shadow-tertiary bg-slate-800/20 rounded-xl md:bg-white/0 m-2 md:m-0 absolute font-thin lg:right-[1%] right-0 bottom-4 p-5 z-0'>{heading}</h1>
      </motion.div>
    </div>
  );
};

export default Hero;