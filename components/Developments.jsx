import Carousel from "./Carousel";
import { useState } from "react";

function Developments(){
  const [projectSelect, setProjectSelect]= useState(0)
  const projects = [
    {
      id: 1,
      name: 'C23-01',
      location: 'LOCATION',
      sector: 'Residential',
      year: 'YEAR',
      image: "/assets/need.jpeg",
      desc: [
        "5-STORY RESIDENTIAL BUILDING",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      ]
    },
    {
      id:2,
      name: 'C24-01',
      image: "/assets/need2.jpeg",
      location:"LOCATION",
      sector: "Residential",
      year: "YEAR",
      desc: [
        "BD HIGH-END RESIDENCE",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      ],
      disclaimer: ''
    },
    {
      id: 3,
      name: 'C24-02',
      location: "LOCATION",
      year: "YEAR",
      sector: "Educational/Institutional",
      image: "/assets/need.jpeg",
      desc: [
        "IDEA COMMUNITY COMPLEX",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      ]
    }
  ]
  //Grabs index from Carousel component
  function handleIndex(index){
    setProjectSelect(index)
  }
  return(
    <div id='developments' className="w-screen bg-primary">
      <div className="justify-center items-center">
        <div className="flex items-center justify-center px-[10%] 2xl:px-[14%] py-[5%]">
          <div>
            {/* TITLE */}
            <div>
              <h1 className="lg:text-[1100%] text-5xl p-2 font-thin my-8 text-justify">Developments</h1>
            </div>
            <div className="lg:flex justify-center gap-10">
              <div className="bg-secondary rounded-xl xl:w-full lg:py-10 p-2 m-2 justify-center items-center flex">
               <Carousel 
                array={projects} 
                handleIndex = {handleIndex}
                custom={"lg:w-[700px] xl:w-[800px] xl:h-[500px] lg:h-[400px] md:w-[550px] w-[325px] h-[225px] rounded-2xl bg-center bg-cover hover:scale-105 duration-500 transform"}
              /> 
              </div>
              <div className="bg-secondary rounded-xl lg:w-[500px] m-2">
                <div className=" lg:p-10 p-4 w-full">
                  <h2 className="text-red_text text-shadow-sm shadow-dark_red">{projects[projectSelect].name}</h2>
                  <h3 className="text-2xl">{projects[projectSelect].location}</h3>
                  <h3 className="text-2xl">{projects[projectSelect].year}</h3>
                  {projects[projectSelect].desc.map((line)=> {
                    return(
                      <p key={line} className="text-lg">{line}</p>
                    )
                  })}
                </div>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default Developments;