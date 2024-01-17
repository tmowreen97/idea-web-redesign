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
          <div className="mx-4">
            <Image src={'/assets/logos/logo-transparent.png'} width={275} height={100}/>
          </div> 
          : 
          // mx-3 mt-[20%] md:mx-0 md:mt-0 
          <div className="  rounded-xl  text-center">
            <div className="mx-20">
              <Image src={'/assets/logos/vertical-symbol.png'} width={95} height={100}/>
            </div>
            {/* <div className="my-1">
              <Image src={'/assets/logos/clip-1.png'} width={70} height={70} alt={'icon'}/>
            </div>
            <div className="my-1">
              <Image src={'/assets/logos/clip-2.png'} width={62} height={62} alt={'icon'}/>
            </div>
            <div className="my-1">
              <Image src={'/assets/logos/clip-3.png'} width={65} height={65} alt={'icon'}/>
            </div>
            <div className="my-1">
              <Image src={'/assets/logos/clip-4.png'} width={65} height={65} alt={'icon'}/>
            </div> */}
          </div>}
          <div className="mb-10">
            <div className="md:mb-[30px]">
               <div className="flex pt-8">
                  <h1 className="md:text-7xl text-6xl ">IDEA</h1>
                  <h1 className="pl-2 md:pt-9 text-2xl pt-6 ">CSC</h1>
                </div>
                <div className="pt-5">
                  <h1 className="">Inter-Disciplinary Engineering Associates,</h1>
                  <h1 className="">Construction Solutions Company</h1>
                </div>
              
            </div>
            <div className="md:mb-[30px]">
              <p className="md:text-xl text-lg ">Comilla, Bangladesh</p>
            </div>
            <div>
              <p className="text-lg ">info@IdeaCSC.com</p>
              <p className="text-lg ">Office: +880 1820-685001</p>
            </div>
          </div>
          </div>
          <div className="lg:ml-[160px] lg:w-[450px] w-full  h-[95%] mt-5" >
          <div className="bg-footer_bg  md:h-[290px]  rounded-xl ">
            <div className="items-center justify-center">
              <form 
              className="text-center pt-2 pb-4 items-center justify-center"
              action="https://formsubmit.co/info@ideaaec.com" 
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
                <input type="hidden" name="_next" value="https://www.ideaaec.com/thank-you"/>
                <div className="text-center items-center justify-center flex ">
                  <div className="bg-button_bg hover:bg-button_bg_2 rounded-xl p-2 shadow-xl ">
                    <button id='submit_2' aria-label="submit_2" type='submit'>Send</button>
                  </div>
                </div>
              </form>
            </div>
            
          </div>
          <div className="grid grid-cols-3  text-center items-center justify-center  pt-5  pb-5">
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
      <div className="flex items-center justify-center pb-5">
        <div className="flex">
          <p className="text-sm " >© 2024 by IDEA <span className="text-xs">CSC</span> <span className="text-xs" >(PVT.) LTD.</span></p>
          
        </div>
          
        </div>
    </div>
  )
}

