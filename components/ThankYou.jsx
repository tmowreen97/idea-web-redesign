import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import {BsArrowReturnRight, BsArrowRight} from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";

function ThankYou(){
  return(
    <div className="w-screen h-full bg-primary font-light">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition:{duration:2, delay:1} }}
      className="lg:p-20 pt-20 pb-10 px-5">
        <h1 className="md:text-[1100%] text-8xl font-thin text-primary_text text-left tracking-wide">Contact</h1>
      </motion.div>
      <div className="md:grid md:grid-cols-2 items-center justify-center lg:px-20">
        {/* col/row 1/1 area */}
        <div className=" text-xl flex rounded-xl m-3 pt-2 items-center justify-center ">
          {/* Icons on left handle */}
          <div className="lg:px-4 px-2 lg:mr-4">
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:2}}}
              className=""
            >
              <Image src={'/assets/logos/icon-1.png'} width={115} height={80} alt={'icon'}/>
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:2.5}}}
              className=""
            >
            <Image src={'/assets/logos/icon-2.png'} width={115} height={80} alt={'icon'}/>              
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:3}}}
              className=""
            >
            <Image src={'/assets/logos/icon-3.png'} width={115} height={80} alt={'icon'}/>              
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:3.5}}}
            >
            <Image src={'/assets/logos/icon-4.png'} width={115} height={82} alt={'icon'}/>              
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:4}}}
            >
            <Image src={'/assets/logos/icon-5.png'} width={115} height={82} alt={'icon'}/>              
            </motion.div>
          </div>
          {/* col/row 1/1 text */}
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1, transition:{duration:2, delay:1.5}}}
          className="">
            <div className="lg:pb-[70px] pb-5">
              <div className="lg:pb-[70px] pb-5">
                <div className="flex pb-1">
                  <h2 className="xl:text-9xl text-6xl">IDEA<span className="xl:text-2xl text-lg xl:pt-14 pt-8 ml-3">CSC</span></h2>
                </div>
                <h2 className="xl:text-2xl text-lg">Inter-Disciplinary Engineering Associates</h2>
                <p className="xl:text-2xl text-lg">Construction Solutions Company<span className="xl:text-2xl text-lg"> (PVT.) LTD.</span></p>
              </div>
              <p className="">Comilla, BD | Florida, USA</p>
              <p className="">info@IdeaCSC.com</p>
              <p className="">BD: +880 1820-685001</p>
              <p className="">US: 954-295-2125</p>
            </div>
            <div>
              <p className="lg:text-lg text-sm">Please feel free to contact us with any questions or business inquiries.</p>
              <p className="lg:text-lg text-sm">You may fill out this form, or contact us by email or phone.</p>
            </div>
            
          </motion.div>
          
        </div>
        <div className="text-center justify-evenly lg:mt-[-25px] mt-10">
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1, transition:{duration:2, delay:1.5} }}
          className="text-2xl m-2 mx-8  p-8 bg-secondary rounded-xl text-left  items-center justify-center">
            <h1 className="">Thank you!</h1>
            <h1>We look forward to empowering your ideas.</h1>
          </motion.div>
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1, transition:{delay:2}}}
          className=" text-primary_text mt-10"
          >
            <div className="mr-2">
              <h1 className="p-2 lg:text-lg text-base ">In the meantime, check out what we've been up to at IDEA AEC:</h1>
            </div>
            <div className="flex justify-center items-center gap-10 mt-5">
              <motion.div
              animate={{x:[-3,2,2,-3], opacity:1}}
              transition={{
                // duration: "9",
                delay : 3,
                repeat: Infinity,
                repeatDelay: 1
              }}
              >
                <BsArrowRight className="text-3xl text-left"/>
              </motion.div>
              <button id='culture' aria-label='culture' className="bg-button_bg p-3 rounded-xl text-dark_text hover:bg-button_bg_2 hover:text-primary_text text-xl">
              <Link href={'https://www.ideaaec.com'} rel="noopener noreferrer" target="_blank" >IDEA AEC</Link>
            </button>
            </div>
            
          </motion.div>

        </div>
      </div>
      <div>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:2, delay:2.5} }}
        className="flex justify-evenly p-14 pb-24 rounded-xl text-primary_text/90">
          <div className="bg-button_bg text-dark_text hover:bg-dark_red hover:text-beige_text ease-in-out duration-300 rounded-full p-7 text-4xl mx-2">
            <Link href="https://www.instagram.com/idea.aec/" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <AiFillInstagram/>
                </a>
            </Link>
          </div>
          <div className="bg-button_bg text-dark_text hover:bg-dark_red hover:text-beige_text ease-in-out duration-300 rounded-full p-7 text-4xl mx-2">
            <Link href="https://www.facebook.com/profile.php?id=100076951517206" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <AiFillFacebook/>
                </a>
            </Link>
          </div>
          <div className="bg-button_bg text-dark_text hover:bg-dark_red hover:text-beige_text ease-in-out duration-300 rounded-full p-7 text-4xl mx-2">
            <Link href="https://www.linkedin.com/company/idea-aec/" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <AiFillLinkedin/>
                </a>
            </Link>
          </div>
        </motion.div>
        
      </div>       
    </div>
  )
}

export default ThankYou;

