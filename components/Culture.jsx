import Carousel from "./Carousel";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {React, useState, useEffect, useCallback} from "react";
// import ReactPlayer from "react-player/lazy";
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import {BsChevronCompactDown, BsChevronCompactUp} from 'react-icons/bs';

import TextBody from "./TextBody";



function Culture_Page_Two(){

  const [isClient, setIsClient] = useState(false)
  
  // to change video dimensions based on screen size
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
      setIsClient(true)
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
  const isBreakPoint = useMediaQuery(900)

  //Each post will have 
  //Title
  //Date
  //Carousel Images
  //Text
  //Id number, to determine alternating layouts

  // All Developments selected , keep state the original list
  // Cultural Developments selected, change state to include only cultural category
  // Project Developments selected, change state to include only project category

  return(
    <div className="w-screen h-full bg-primary">
      {/* Page Title */}
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition: {delay:1, duration:1}}}
      className="md:px-20 pt-20 pb-[80px]">
        <h1 className="md:text-[1100%] text-center text-8xl font-thin text-primary_text md:text-left tracking-wider">Culture</h1>
      </motion.div>
      {/* Featured Video */}
      {/* Social Media Links */}
      <div>
      {/* intro statement */}
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition: {delay:1.5, duration:2}}}
      className="flex font-light md:px-28">
          <div className="flex text-center justify-center xl:m-10 m-5 w-full">
            <h1 className="text-6xl font-thin tracking-wide leading-[70px]">
              Check out our <span className="motion-safe:animate-pulse hover:animate-none"><Link 
              href={'https://www.ideaaec.com/culture'} 
              rel="noopener noreferrer" target="_blank" 
              className="text-button_bg_2 text-shadow-lg shadow-tertiary/80 font-medium hover:underline">culture page </Link></span> 
              and don't forget to connect with us!</h1>
            {/* <h1 className="text-4xl animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-primary_text p-4 delay-200">Connect with us:</h1> */}
          </div>
      </motion.div>
        {/* social media */}
      <div className="flex justify-evenly p-14 rounded-xl text-primary_text/90">
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1, transition:{delay:2, duration:1.5} }} 
        className="bg-button_bg text-dark_text hover:bg-dark_red hover:text-beige_text ease-in-out duration-300 rounded-full p-7 text-5xl mx-2">
          <Link href="https://www.instagram.com/idea.aec/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <AiFillInstagram/>
              </a>
          </Link>
        </motion.div>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1, transition:{delay:2.5, duration:1.5} }}  
        className="bg-button_bg text-dark_text hover:bg-dark_red hover:text-beige_text ease-in-out duration-300 rounded-full p-7 text-5xl mx-2">
          <Link href="https://www.facebook.com/profile.php?id=100076951517206" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <AiFillFacebook/>
              </a>
          </Link>
        </motion.div>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1, transition:{delay:3, duration:1.5} }}   
        className="bg-button_bg text-dark_text hover:bg-dark_red hover:text-beige_text ease-in-out duration-300 rounded-full p-7 text-5xl mx-2">
          <Link href="https://www.linkedin.com/company/idea-aec/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <AiFillLinkedin/>
              </a>
          </Link>
        </motion.div>
        </div>
        
      </div> 
      {/* Posts Filter */}
      {/* Posts body */}
    </div>
  )
}

export default Culture_Page_Two;
