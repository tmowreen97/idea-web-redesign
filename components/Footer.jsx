import {React, useEffect, useState} from "react";
import Link from "next/link";
import {AiFillLinkedin, AiFillFacebook, AiFillInstagram} from 'react-icons/ai';
import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer({logo}){
  return(
    <div id='footer' className="w-full h-full  bg-secondary">
      <div className="flex items-center justify-center pt-[50px]">
        <div className=" lg:grid lg:grid-cols-2 justify-evenly text-dark_text tracking-wide">
          <div className="items-center justify-center text-2xl font-light flex md:p-0 px-5" >
          { logo ? 
          <div className="lg:mx-4">
            <Image src={'/assets/logos/logo-transparent-updated.png'} width={275} height={100} alt={'logo-transparent'}/>
          </div> 
          : 
          // mx-3 mt-[20%] md:mx-0 md:mt-0 
          <div className="  rounded-xl  text-center">
            <div className="lg:mx-20">
              <Image src={'/assets/logos/vertical-symbol.png'} width={100} height={100} alt={"logo-vertical"}/>
            </div>
          </div>}
          <div className="lg:mb-10">
            <div className="lg:mb-[30px] mb-2">
                <div className="flex lg:pt-8">
                  <h1 className="lg:text-7xl text-6xl ">IDEA <span className="text-2xl">CSC</span></h1>
                </div>
                <div className="lg:pt-5 pt-2">
                  <h1 className="xl:text-2xl text-lg">Inter-Disciplinary Engineering Associates,</h1>
                  <h1 className="xl:text-2xl text-lg">Construction Solutions Company</h1>
                  <h1 className="xl:text-2xl text-lg">US IDEA <span className="xl:text-lg text-xs">CSC</span> (PVT.) LTD.</h1>
                </div>
              
            </div>
            <div className="md:mb-[30px]">
              <p className="xl:text-xl text-base ">Comilla, BD | Florida, USA</p>
            </div>
            <div>
              <p className="xl:text-lg text-base">info@IdeaCSC.com</p>
              <p className="xl:text-lg text-base">BD: +880 1820-685001</p>
              <p className="xl:text-lg text-base">US: 954-295-2125</p>
            </div>
          </div>
          </div>
          {/* "xl:ml-[160px] lg:ml-[50px] lg:max-w-[450px] w-full  h-[95%] mt-5" */}
          <div className=" flex justify-center items-center" >
          <div className="md:max-w-[450px] max-w-[350px] w-full m-4 xl:m-0">
          <div className="bg-footer_bg  md:h-[290px]  rounded-xl ">
            <div className="items-center justify-center">
              <form 
              className="text-center pt-2 pb-4 items-center justify-center"
              action="https://formsubmit.co/info@ideacsc.com" 
              method="POST">
                <h2 className="text-primary_text">Contact Us</h2>
                <div className="m-2">
                  {/* <label>Name:</label> */}
                  <input 
                  type="name" 
                  name="name"
                  className="lg:w-[300px] w-[90%] rounded-xl text-center p-1" 
                  placeholder="Name"
                  required/>
                </div>
                <div className="m-2">
                  {/* <label>Email:</label> */}
                  <input 
                  type="email" 
                  name="email"
                  className="lg:w-[300px] w-[90%] rounded-xl text-center p-1 border-none" 
                  placeholder="Email"
                  required/>
                </div>
                <div className="m-2">
                  {/* <label>Message:</label> */}
                  <textarea 
                  type="text"
                  name="message" 
                  className="lg:w-[300px] w-[90%] rounded-xl text-center max-h-[70px] p-1 border-none" 
                  placeholder="Message"
                  required/>
                </div>
                <input type="hidden" name="_next" value="https://www.ideacsc.com/thank-you"/>
                <div className="text-center items-center justify-center flex ">
                  <div className="bg-button_bg hover:bg-button_bg_2 rounded-xl p-2 shadow-xl ">
                    <button id='submit_2' aria-label="submit_2" type='submit'>Send</button>
                  </div>
                </div>
              </form>
            </div>
            
          </div>
          {/* Need statement before socials */}
          <div className="flex justify-around w-full">
          <div className="p-2" >
            <div className="">
              <p className="italic m-2">Keep in touch by following us at IDEA <span className="text-xs">AEC</span>:</p>
            </div>
          <div className="grid grid-cols-3 gap-6 text-center items-center justify-center">
            <div className="text-center items-center justify-center flex rounded-xl ">
              <div className="bg-button_bg text-dark_text hover:bg-dark_red hover:text-beige_text ease-in-out duration-300 rounded-full p-4 text-2xl">
                <Link href="https://www.instagram.com/idea.aec/" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <AiFillInstagram/>
                    </a>
                </Link>
              </div>
            </div>
            <div className="text-center items-center justify-center flex  p-1 rounded-xl ">
              <div className="bg-button_bg text-dark_text hover:bg-dark_red hover:text-beige_text ease-in-out duration-300 rounded-full p-4 text-2xl">
                <Link href="https://www.facebook.com/profile.php?id=100076951517206" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <AiFillFacebook/>
                    </a>
                </Link>
              </div>
            </div>
            <div className="text-center items-center justify-center flex  p-1 rounded-xl ">
              <div className="bg-button_bg text-dark_text hover:bg-dark_red hover:text-beige_text ease-in-out duration-300 rounded-full p-4 text-2xl">
                <Link href="https://www.linkedin.com/company/idea-aec/" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <AiFillLinkedin/>
                    </a>
                </Link>
              </div>
            </div>
            
          </div>
          </div>
          </div>
          </div>
        </div>
          
        </div>
        
        
      </div>
      <div className="flex items-center justify-center pb-5">
        <div className="flex">
          <p className="text-sm " >© 2024 by US IDEA <span className="text-xs" >CSC</span> (PVT.) LTD.</p>
          
        </div>
          
        </div>
    </div>
  )
}

