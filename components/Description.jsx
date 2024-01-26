import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Carousel from "./Carousel";



function Description({data, handleClick}){

  console.log(data, 'data')
  const[fixed, setFixed] = useState(data)
  console.log(fixed, 'fixed')
  return(
    <div className="lg:mx-20 lg:m-10">
      <div className="flex justify-end lg:my-[-10px] m-2">
        <AiOutlineCloseCircle 
        onClick={()=> handleClick(fixed.id)}
        className="cursor-pointer bg-button_bg hover:bg-dark_red hover:text-beige_text text-shadow-lg shadow-black rounded-full text-4xl lg:z-10" />
      </div>
      <div className="flex gap-10">
        {/* Carousel */}
        <div className=" bg-secondary/80 rounded-xl h-full p-4">
          <Carousel
            array={fixed.images_array}
            custom={" xl:w-[700px] xl:h-[490px] md:w-[400px] w-[275px] h-[200px] m-3 right-0 rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform"}
          />
        </div>
        {/* Description */}
        <div>
          <h1 className="text-7xl">{fixed.name}</h1>
          <h2>{fixed.location}</h2>
          <h2>{fixed.year}</h2>
          {fixed.desc.map((line, i)=> {
            return(
              <p key={i} className="text-lg">{line}</p>
            )
          })}
        {/* Services */}
        <div className="justify-left justify-between">
          {/* Project Features */}
          <div className=" py-2">
            <h2 className="text-4xl">Project Features:</h2>
              <ul>
                {fixed.proj_features.map((feature)=> {
                  return(
                    <li className="list-disc ml-7 text-primary_text">{feature}</li>
                  )
                })}
              </ul> 
          </div>
          <div className="py-2">
            <h2 className="text-4xl">Services Provided:</h2>
            <div className="flex gap-4">
              <div>
                <h2 className="text-2xl underline">Construction Services</h2>
                <ul>
                  {fixed.const_services.map((service)=> {
                    return(
                      <li className="list-disc ml-7 text-primary_text">{service}</li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl underline">Engineering Services</h2>
                <ul>
                  {fixed.eng_services.map((service)=> {
                    return(
                      <li className="list-disc ml-7 text-primary_text">{service}</li>
                    )
                  })}
                </ul>
              </div> 
            </div>
            
          </div>
          
        </div>
        </div>
      
      </div>



    </div>
    
  )
}

export default Description;