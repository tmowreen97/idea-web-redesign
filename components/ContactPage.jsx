import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";

function ContactPage(){
  return(
    <div className="w-screen h-full bg-primary font-light">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition:{duration:2, delay:1} }}
      className="lg:p-20 pt-20 pb-10">
        <h1 className="pt-10 md:text-[1100%] text-8xl font-thin text-primary_text text-left tracking-wide">Contact</h1>
      </motion.div>
      <div className="md:grid md:grid-cols-2 items-center justify-center lg:px-20 ">
        {/* col/row 1/1 area */}
        <div className=" text-xl flex rounded-xl m-3 pt-2 items-center justify-center ">
          {/* Icons on left handle */}
          <div className="lg:px-4 px-2 lg:mr-4">
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:2}}}
              className=""
            >
              <Image src={'/assets/logos/green-logos/const-icon-green.png'} width={115} height={80} alt={'icon'}/>
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:2.5}}}
              className=""
            >
            <Image src={'/assets/logos/green-logos/mech-icon-green.png'} width={115} height={80} alt={'icon'}/>              
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:3}}}
              className=""
            >
            <Image src={'/assets/logos/green-logos/elec-icon-green.png'} width={115} height={80} alt={'icon'}/>              
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:3.5}}}
            >
            <Image src={'/assets/logos/green-logos/plumb-icon-green.png'} width={115} height={82} alt={'icon'}/>              
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1, transition:{duration:2, delay:4}}}
            >
            <Image src={'/assets/logos/green-logos/fp-icon-green.png'} width={115} height={82} alt={'icon'}/>              
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
        {/* col/row 2/1 form */}
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:2, delay:1.5}}}
        className="items-center justify-center flex mt-10 lg:mt-0 ">
        <div className="lg:w-[500px] lg:h-[400px] w-[350px] h-[385px] bg-secondary rounded-xl lg:ml-20">
          <form 
          className="text-center items-center justify-center mt-[3%]" 
          action="https://formsubmit.co/info@ideacsc.com" 
          method="POST">
            <h2>Contact Us</h2>
            <div className="m-5">
              {/* <label>Name:</label> */}
              <input 
              type="name" 
              name="name" 
              className="lg:w-[400px] w-[250px] h-[40px] rounded-xl text-center p-1" 
              placeholder="Name"
              required/>
            </div>
            <div className="m-5">
              {/* <label>Email:</label> */}
              <input 
              type="email" 
              name="email" 
              className="lg:w-[400px] w-[250px] h-[40px] rounded-xl text-center p-1 border-none" 
              placeholder="Email"
              required/>
            </div>
            <div className="m-5">
              {/* <label>Message:</label> */}
              <textarea 
              type="text" 
              name="message" 
              className="lg:w-[400px]  w-[250px] md:h-[80px] rounded-xl text-center max-h-[100px] p-1 border-none" 
              placeholder="Message"
              required/>
            </div>
            <input type="hidden" name="_next" value="https://www.ideacsc.com/thank-you"></input>
            {/* <input type="hidden" name="_captcha" value="false"></input> */}
            <div className="text-center items-center justify-center flex ">
              <div className="bg-button_bg hover:bg-button_shadow rounded-xl p-2 px-5 shadow-xl text-light_text">
                <button id='submit' aria-label="submit" type='submit'>Send</button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
      </div>
      <div>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:2, delay:2.5} }}
        className="flex justify-evenly p-14 pb-24 rounded-xl text-primary_text/90">
          <div className="bg-button_bg hover:bg-dark_green text-light_text ease-in-out duration-300 rounded-full p-7 text-4xl mx-2">
            <Link href="https://www.instagram.com/idea.aec/" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <AiFillInstagram/>
                </a>
            </Link>
          </div>
          <div className="bg-button_bg hover:bg-dark_green text-light_text ease-in-out duration-300 rounded-full p-7 text-4xl mx-2">
            <Link href="https://www.facebook.com/profile.php?id=100076951517206" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <AiFillFacebook/>
                </a>
            </Link>
          </div>
          <div className="bg-button_bg hover:bg-dark_green text-light_text ease-in-out duration-300 rounded-full p-7 text-4xl mx-2">
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

export default ContactPage;


