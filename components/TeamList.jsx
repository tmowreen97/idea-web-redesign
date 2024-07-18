import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
 
function TeamList({member, english}){

  const [showDetails, setShowDetails] = useState(false)
  return(
    <div className="xl:flex items-center justify-center gap-[3%] ">
      <div className="md:mr-5 m-2">
        <div className="flex items-center justify-center">
        <div className="relative" onMouseEnter={()=> setShowDetails(true)} onMouseLeave={()=> setShowDetails(false)}>
          <Image src={member.image} width={650} height={600} alt={'lead_team'} className="rounded-xl"/>
          {showDetails && member.contact ? <div className="absolute top-0 bottom-0 left-0 right-0 bg-dark_shadow/90 rounded-xl">
            <div className="flex gap-[25%] text-white items-center justify-center h-full text-lg ">
              <Link href={member.contact} legacyBehavior className="">
                <a target="_blank" rel="noopener noreferrer" aria-label="Contact">
                  <button id='contact_button' aria-label='contact' className="bg-button_bg rounded-xl p-3">Contact Card</button>
                </a>
              </Link>
              <Link href={member.linkedin} legacyBehavior className="">
                <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <button id='linkedin_button' aria-label='linkein' className="bg-button_bg rounded-xl p-3">LinkedIn</button>
                </a>
              </Link>
            </div>
            
          </div> : ""}
        </div>
        </div>
        
      </div>
      <div className="flex justify-center">
      <div className="2xl:w-[800px] lg:w-[600px]  text-left tracking-wider m-2 ">
        <div className=" bg-secondary rounded-xl p-4 mb-4 ">
          <div className="m-2">
            <h2 className="text-3xl font-medium">{member.title}</h2>
            {/* <h2 className="text-2xl">{member.heading}</h2> */}
          </div>
          <div className="flex items-center justify-center">
          <div>
            { english ? 
            member.body.map((body_text, index)=> {
              return(
                 <p key={index} className="m-4 lg:text-xl ">{body_text}</p>
              )
             
            }) : 
            member.body_bangla.map((body_text, index)=> {
              return(
                 <p key={index} className="m-4 lg:text-xl font-light">{body_text}</p>
              )
            })
            }
          </div>
          </div>
          
        </div>
        
        {/* <div className=" bg-button_bg/80 rounded-xl p-4  justify-center">
          <p className="mx-2 italic">Fun Fact: </p>
          <p className="mx-2 ">
            {member.fun_fact}
          </p>


        </div> */}
      </div>
      </div>
    </div>
  )
}

export default TeamList;