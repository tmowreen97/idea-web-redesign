import Carousel from "./Carousel";
import { useState } from "react";

function ProjectHomeTwo(){
  const [projectSelect, setProjectSelect]= useState(0)
  const projects = [
    {
      id: 1,
      name: 'C23-01',
      location: 'LOCATION',
      sector: 'Residential',
      year: 'YEAR',
      image: "/assets/need.jpeg",
      desc: "5-STORY RESIDENTIAL BUILDING",
    },
    {
      id:2,
      name: 'C24-01',
      image: "/assets/need2.jpeg",
      location:"LOCATION",
      sector: "Residential",
      year: "YEAR",
      desc: "BD HIGH-END RESIDENCE",
      disclaimer: ''
    },
    {
      id: 3,
      name: 'C24-02',
      location: "LOCATION",
      year: "YEAR",
      sector: "Educational/Institutional",
      image: "/assets/need.jpeg",
      desc: "IDEA COMMUNITY COMPLEX",
    }
  ]
  //Grabs index from Carousel component
  function handleIndex(index){
    setProjectSelect(index)
  }
  return(
    <div id='projects' className="w-screen h-full bg-primary">
      <div className="justify-center items-center">
        <div className="flex items-center justify-center px-[10%] 2xl:px-[14%] py-[5%]">
          <div>
            {/* TITLE */}
            <div>
              <h1 className="lg:text-[1100%] text-8xl font-thin my-8 text-justify">Current Developments</h1>
            </div>
            <div className="lg:flex justify-center gap-10">
              <div className="bg-secondary p-14 rounded-xl">
               <Carousel 
                array={projects} 
                handleIndex = {handleIndex}
                custom={"lg:w-[620px] xl:w-[700px] lg:h-[400px] w-[355px] h-[300px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform"}
              /> 
              </div>
              <div className="bg-secondary w-full rounded-xl">
                <div className="p-14">
                  <h2>{projects[projectSelect].name}</h2>
                  <h3>{projects[projectSelect].location}</h3>
                  <h3>{projects[projectSelect].year}</h3>
                  <p>{projects[projectSelect].desc}</p>
                </div>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default ProjectHomeTwo;