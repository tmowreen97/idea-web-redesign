import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
 
function TeamList({member}){

  const [showDetails, setShowDetails] = useState(false)
  return(
    <div className="md:flex items-center justify-center gap-[3%] ">
      <div className="md:mr-5 rounded-xl overflow-hidden m-2">
        <div className="relative" onMouseEnter={()=> setShowDetails(true)} onMouseLeave={()=> setShowDetails(false)}>
          <Image src={member.image} width={600} height={600} alt={'lead_team'}/>
          {showDetails ? <div className="absolute top-0 bottom-0 left-0 right-0 bg-tertiary/90">
            <div className="flex text-white my-[65%] justify-evenly text-lg ">
              <Link href={member.contact} legacyBehavior className="my-[50%]">
                <a target="_blank" rel="noopener noreferrer" aria-label="Contact">
                  <button id='contact_button' aria-label='contact' className="bg-button_bg rounded-xl p-3">Contact Card</button>
                </a>
              </Link>
              <Link href={member.linkedin} legacyBehavior className="my-[50%]">
                <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <button id='linkedin_button' aria-label='linkein' className="bg-button_bg rounded-xl p-3">LinkedIn</button>
                </a>
              </Link>
            </div>
            
          </div> : ""}
        </div>
        
      </div>
      <div className="md:w-[620px] text-left tracking-wider m-2 ">
        <div className=" bg-secondary rounded-xl p-4 mb-4 ">
          <div className="m-2">
            <h2 className="text-3xl text-red_accent_2">{member.title}</h2>
            {/* <h2 className="text-2xl">{member.heading}</h2> */}
          </div>
          <div>
            {member.body.map((body_text, index)=> {
              return(
                 <p key={index} className="m-4">{body_text}</p>
              )
             
            })}
          </div>
          
          
        </div>
        
        <div className=" bg-button_bg/80 rounded-xl p-4  justify-center">
          <p className="mx-2 italic">Fun Fact: </p>
          <p className="mx-2 ">
            {member.fun_fact}
          </p>


        </div>
      </div>
    </div>
  )
}

export default TeamList;