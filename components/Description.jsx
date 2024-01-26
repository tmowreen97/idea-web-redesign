import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Carousel from "./Carousel";



function Description({data, handleClick}){

  console.log(data, 'data')
  const[fixed, setFixed] = useState(data)
  console.log(fixed, 'fixed')
  return(
    <div className="lg:mx-20 lg:m-10">
      {/* Close Button */}
      <div className="flex justify-end lg:my-[-10px] m-2">
        <AiOutlineCloseCircle 
        onClick={()=> handleClick(fixed.id)}
        className="cursor-pointer bg-button_bg hover:bg-dark_red hover:text-beige_text text-shadow-lg shadow-black rounded-full lg:text-4xl text-2xl 2xl:z-10" />
      </div>
      <div className="2xl:flex gap-10">
        {/* Carousel */}
        <div className=" h-full w-full  flex justify-center">
          <div className=" bg-secondary/80 rounded-xl max-w-[750px] xl:p-4 p-2 m-1 ">
            <Carousel
              array={fixed.images_array}
              custom={" xl:w-[700px] xl:h-[490px] lg:w-[500px] lg:h-[400px] md:w-[400px] md:h-[300px] w-[275px] h-[200px] m-3 right-0 rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform"}
            />
          </div>
        </div>
        
        {/* Description */}
        <div className="2xl:m-0 md:m-10 m-4">
          <h1 className="2xl:text-7xl lg:text-6xl md:text-5xl text-4xl">{fixed.name}</h1>
          <h2 className="2xl:text-4xl lg:text-3xl text-2xl">{fixed.location}</h2>
          <h2 className="2xl:text-4xl lg:text-3xl text-2xl">{fixed.year}</h2>
          <div>
            {fixed.desc.map((line, i)=> {
            return(
              <div>
                <p key={i} className="2xl:text-lg">{line}</p>
              </div>
            )
          })}
          </div>
          
        {/* Services */}
        <div className="justify-left justify-between">
          {/* Project Features */}
          <div className=" py-2">
            <h2 className="2xl:text-4xl lg:text-3xl text-2xl my-1">Project Features:</h2>
              <ul>
                {fixed.proj_features.map((feature)=> {
                  return(
                    <li className="list-disc ml-7 text-primary_text 2xl:text-lg">{feature}</li>
                  )
                })}
              </ul> 
          </div>
          <div className="py-2">
            <h2 className="2xl:text-4xl lg:text-3xl text-2xl">Services Provided:</h2>
            <div className="sm:flex gap-4">
              <div>
                <h2 className="2xl:text-2xl lg:text-xl text-lg underline my-1">Construction Services</h2>
                <ul>
                  {fixed.const_services.map((service)=> {
                    return(
                      <li className="list-disc ml-7 text-primary_text 2xl:text-lg">{service}</li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <h2 className="2xl:text-2xl lg:text-xl text-lg underline my-1">Engineering Services</h2>
                <ul>
                  {fixed.eng_services.map((service)=> {
                    return(
                      <li className="list-disc ml-7 text-primary_text 2xl:text-lg">{service}</li>
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