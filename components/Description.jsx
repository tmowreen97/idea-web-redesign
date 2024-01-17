import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";



function Description({data, handleClick}){

  
  const[fixed, setFixed] = useState(data)
  console.log(fixed, 'fixed')
  return(
    <div className="mx-20 m-10">
      <div className="flex justify-end lg:my-[-10px] m-2">
        <AiOutlineCloseCircle 
        onClick={()=> handleClick(fixed.id)}
        className="cursor-pointer bg-button_bg hover:bg-dark_red hover:text-beige_text text-shadow-lg shadow-black rounded-full text-4xl lg:z-10" />
      </div>
      <h1 className="text-7xl">{fixed.name}</h1>
      <h2>{fixed.location}</h2>
      <h2>{fixed.year}</h2>
      {fixed.desc.map((line)=> {
        return(
          <p className="text-lg">{line}</p>
        )
      })}
      <div className="m-4 justify-left flex">
        <div>
          <h2 className="text-4xl">Services</h2>
          <ul>
            {fixed.services.map((service)=> {
              return(
                <li className="list-disc ml-7 text-primary_text">{service}</li>
              )
            })}
          </ul> 
        </div>
        
      </div>
      
      



    </div>
    
  )
}

export default Description;