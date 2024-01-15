import React, { useState } from "react";
import Carousel from "./Carousel";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import Link from "next/link";

function ProjectHome(){
  const [projectSelect, setProjectSelect]= useState(0)
  const[showDropDown, setShowDropDown] = useState(false)
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
    <div id='projects' className='w-screen lg:h-full bg-primary'>
      <div className='flex items-center justify-center p-4 pt-20 lg:pt-[5%]'>
      <div className="projecthome__parent lg:grid flexbox mx-[8%] ">
        <div className="projecthome__title  m-[5%]">
          <h1 className="lg:text-[1000%] text-8xl tracking-wide font-thin lg:mt-[8%] text-primary_text">
            Current Developments
          </h1>
        </div>
        <div className="projecthome__child1 lg:p-10 p-2 bg-secondary/50 rounded-xl ml-[5%]">
          <div className="lg:h-[450px] lg:px-4 p-1 flex  justify-center">
            <Carousel 
              array={projects} 
              handleIndex = {handleIndex}
              custom={"lg:w-[620px] xl:w-[700px] lg:h-[400px] w-[355px] h-[300px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform"}
            />
            </div>
        </div>
        {/* <div className="projecthome__img relative bg-secondary/50 items-center text-center justify-center lg:p-5 rounded-xl w-[375px] mt-3 lg:w-[450px] lg:h-[45%] lg:mt-20 lg:m-0">
          <div className="relative">
            <button 
            id='drop_down_button'
            aria-label='drop_down_button'
            onClick={()=> {setShowDropDown(!showDropDown)}}
            data-dropdown-toggle="dropdown" 
            className="relative lg:w-[400px] lg:text-2xl text-xl justify-between  hover:bg-secondary/60 focus:ring-4 focus:outline-none focus:ring-secondary_text font-medium rounded-lg p-4 lg:mt-2 text-center inline-flex items-center text-primary_text" type="button">
              {projects[projectSelect].sector}
              { showDropDown ? <BsChevronCompactUp/> : <BsChevronCompactDown/>}
            </button>
            <div id="dropdown" className={ showDropDown ? "z-10 absolute right-0 lg:w-[220px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700": "hidden"}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="/portfolio/cultural" className="block px-4 py-2 hover:bg-button_bg_2/80   hover:text-white">Cultural</a>
          </li>
          <li>
            <a href="/portfolio/educational/institutional" className="block px-4 py-2 hover:bg-button_bg_2/80  hover:text-white">Educational/Institutional</a>
          </li>
          <li>
            <a href="/portfolio/residential" className="block px-4 py-2 hover:bg-button_bg_2/80  hover:text-white">Residential</a>
          </li>
          
        </ul>
    </div>

          
          
          </div>
        </div> */}
        <div className="projecthome__child2 p-10 bg-secondary/50 rounded-xl mr-[5%] md:h-[550px] h-[600px] ">
          <div>
            <div className="absolute md:w-[380px] h-[525px] w-[250px] md:h-[475px]">
            <div className="relative">
              <h2 className="md:text-4xl text-2xl m-2 text-red_accent_2 text-shadow shadow-dark_red">{projects[projectSelect].name}</h2>
              <div className="m-2">
                <h3 className="tracking-wider md:text-xl">{projects[projectSelect].location}</h3>
                <h3 className="tracking-wider md:text-xl">{projects[projectSelect].year}</h3>
              </div>
              <p className="tracking-wider m-2 md:text-lg">{projects[projectSelect].desc}</p>
              {projects[projectSelect].disclaimer ? <p className="tracking-wider m-2 text-[12px]">{projects[projectSelect].disclaimer}</p> : ""}
            </div>
            <div className=" text-center absolute bottom-0 md:left-[15%] left-5 ">
              <Link href={'/portfolio'}>
                <button id='portfolio_button' aria-label='portfolio_button' className="inline-block rounded-xl bg-button_bg_2 text-dark_text hover:text-primary_text p-3 px-4 font-normal hover:drop-shadow-xl hover:bg-button_bg hover:text-secondary_text  tracking-wider">Learn More on Our Portfolio</button>
              </Link>
            </div>
            
          </div>
          </div>
        </div>
      </div>
  </div>
  </div>
    // <div id="projects" className="w-screen md:h-screen bg-[#301b3d]">
    //   <div className=" md:mx-[200px] py-[75px] md:w-[150%] items-center justify-between text-[#F6F6F6] font-thin tracking-wider">
    //     <div className="projecthome__parent ">
    //       <div className="projecthome__title mr-5">
    //         <h1 className="md:text-[1200%] text-5xl tracking-wide text-center mt-20px">Projects</h1>
    //       </div>
    //       <div className="projecthome__img bg-slate-200/20 rounded-xl mt-[50%] mx-5 h-[30%]">
    //         <h1 className="text-4xl m-5">Project Category?</h1>
    //       </div>
    //       <div className="projecthome__child1 rounded-xl mt-5 h-[90%]">
    //         <ProjectHomeCarousel projects={projects} setProjectSelect={setProjectSelect} projectSelect={projectSelect}/>
    //       </div>
    //       <div className="projecthome__child2 p-10 bg-slate-200/20 rounded-xl m-5 h-[100%] ">
    //         <div className="h-[90%]">
    //           <h1 className="text-4xl">{projects[projectSelect].name}</h1>
    //           <p className="tracking-wider">{projects[projectSelect].desc}</p>
    //         </div>
            
    //         {/* <p className="tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
    //         <div className="mt-[5%] mb-5 text-center ">
    //           <Link href={'/portfolio'}>
    //             <button className="inline-block rounded-xl bg-[#c1a0ca] p-3 px-4 font-normal hover:drop-shadow-xl hover:bg-[#9C36FC] hover:text-[#F6F6F6]  text-[#301b3d] tracking-wider">Learn More on our Portfolio</button>

    //           </Link>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </div>
  )
}

export default ProjectHome;