import React, { useState } from "react";
import Image from "next/image";
import ProjectHomeCarousel from "./ProjectHomeCarousel";
import Link from "next/link";

function ProjectHome(){
  const [projectSelect, setProjectSelect]= useState(0)
  const projects = [
    {
      id: 1,
      name: 'One',
      image: "/assets/filler-1.jpg",
      desc: "Image One"
    },
    {
      id:2,
      name: 'Two',
      image: "/assets/filler-2.jpg",
      desc: "Image Two"
    },
    {
      id: 3,
      name: 'Three',
      image: "/assets/filler-3.jpg",
      desc: "Image Three"
    }
  ]

  return(
    <div id='projects' className='w-screen md:max-h-[980px] bg-[#DAD3DF]'>
      <div className='relative flex items-center align-middle justify-center p-4 ml-[8%] mt-16'>
      <div className="projecthome__parent md:max-h-[980px] ">
        <div className="projecthome__title mr-5 ">
          <h1 className="md:text-[1000%] text-5xl tracking-wide text-left ml-10 font-thin mb-10  text-[#625a81]">Projects</h1>
        </div>
        <div className="projecthome__child1 p-10 bg-[#a593b1]/50 rounded-xl mr-5 ml-4">
          <ProjectHomeCarousel projects={projects} setProjectSelect={setProjectSelect} projectSelect={projectSelect}/>
        </div>
        <div className="projecthome__img bg-[#a593b1]/50 items-center justify-center p-5 rounded-xl w-[450px] h-[45%] mt-20">
          <h2>Category?</h2>
        </div>
        <div className="projecthome__child2 p-10 bg-[#a593b1]/50 rounded-xl w-[450px]">
          <h2 className="">{projects[projectSelect].name}</h2>
          <p className="tracking-wider mx-2">{projects[projectSelect].desc}</p>
          <div className="mt-[5%] mb-5 text-center ">
            <Link href={'/portfolio'}>
              <button className="inline-block rounded-xl bg-[#c1a0ca] p-3 px-4 font-normal hover:drop-shadow-xl hover:bg-[#9C36FC]/80 hover:text-[#F6F6F6]  text-[#301b3d] tracking-wider">Learn More on our Portfolio</button>
            </Link>
          </div>
          {/* <h1 className="text-4xl">Our Story</h1>
          <p className="tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
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