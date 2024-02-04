import {React, useState, useEffect, useCallback} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
// import Blinker from './Blinker';
import Link from 'next/link';
// import Line from './Line';
import {AiOutlineLine} from 'react-icons/ai';


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
        {/* { !isBreakPoint ? 
          <h1></h1>
        :
        <div className="text-center justify-center items-center flex">
          <div className='justify-center items-center ml-10'>
          
          
          <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{delay:2, duration:1}}}
            className='justify-center items-center '
          >
            <button id='mobile-button' aria-label='mobile_button' className={animate ? "bg-light_bg ease-in-out duration-200 p-2 rounded-xl animation-blimp-1 m-auto" : "bg-button_bg text-primary_text ease-in-out duration-200 p-2 rounded-xl"} onClick={()=> handleMobileAnimate()}>
              What We're Working On
            </button>
          </motion.div>
            { mobileAnimate && !animate ? <div className="items-center justify-center text-center">
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:.5}}}
              className="justify-center flex">
                <AiOutlineLine className="rotate-90 text-lg text-white" />
              </motion.div>
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:1}}}
              className="mobile-desc-div">
                <Link href={"/#projects"} >
                  <p className='mobile-desc'>
                    MSC Miami Cruise Terminal
                  </p>
                </Link>
              </motion.div>
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:1.5}}}
              className="justify-center flex">
                <AiOutlineLine className="rotate-90 text-lg text-white" />
              </motion.div>
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:2}}}
              className="mobile-desc-div">
                <Link  href={'/#projects'} >
                  <p className='mobile-desc'>East End Food Institute (EEFI)</p>
                </Link>
              </motion.div>
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:2.5}}}
              className="justify-center flex">
                <AiOutlineLine className="rotate-90 text-lg text-white" />
              </motion.div>
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:3}}}
              
              className="mobile-desc-div">
                 <Link href={"/#projects"} >
                  <p className='mobile-desc'>
                  Private High-End Residence
                  </p>
                </Link>
              </motion.div>

              
            
            </div> : ""
            }
          </div>
        </div>
      } */}
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