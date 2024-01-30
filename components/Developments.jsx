import Carousel from "./Carousel";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Description from "./Description";
import { motion } from 'framer-motion';


function Developments(){
  const [projectSelect, setProjectSelect]= useState(0)
  const [projClick, setProjClick] = useState(false)
  const [hide, setHide] = useState(false)

  function handleClick(id){
    setProjClick(!projClick)
    setHide(!hide)

  }

  const projects = [
    {
      id: 0,
      name: 'C23-01',
      location: 'LOCATION',
      sector: 'Residential',
      year: 'YEAR',
      image: "/assets/need.jpeg",
      images_array: [
        {
          title: 'eefi-1',
          image: '/assets/filler/filler-1.jpg'
        },
        {
          title: 'eefi-2',
          image: '/assets/filler/filler-2.jpg'
        },
        {
          title: 'eefi-3',
          image: '/assets/filler/filler-3.jpg'
        },

        
      ],
      desc: [
        "5-STORY RESIDENTIAL BUILDING",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      ],
      proj_features:[
        'First Feature',
        'Second Feature',
        'Third Feature',
        'Fourth Feature',
      ],
      const_services:[
        'First Service',
        'Second Service',
        'Third Service',
        'Fourth Service',
      ],
      eng_services:[
        'Fifth Service',
        'Sixth Service',
        'Seventh Service',
        'Eighth Service',
      ],

    },
    {
      id:1,
      name: 'C24-01',
      image: "/assets/need2.jpeg",
      images_array: [
        {
          title: 'eefi-1',
          image: '/assets/filler/filler-4.jpg'
        },
        {
          title: 'eefi-2',
          image: '/assets/filler/filler-5.jpg'
        },
        {
          title: 'eefi-3',
          image: '/assets/filler/filler-6.jpg'
        },
        
      ],
      location:"LOCATION",
      sector: "Residential",
      year: "YEAR",
      desc: [
        "BD HIGH-END RESIDENCE",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      ],
      proj_features:[
        'First Feature',
        'Second Feature',
        'Third Feature',
        'Fourth Feature',
      ],
      const_services:[
        'First Service',
        'Second Service',
        'Third Service',
        'Fourth Service',
      ],
      eng_services:[
        'Fifth Service',
        'Sixth Service',
        'Seventh Service',
        'Eighth Service',
      ],
    },
    {
      id: 2,
      name: 'C24-02',
      location: "LOCATION",
      year: "YEAR",
      sector: "Educational/Institutional",
      image: "/assets/need.jpeg",
      images_array: [
        {
          title: 'eefi-1',
          image: '/assets/filler/filler-7.jpg'
        },
        {
          title: 'eefi-2',
          image: '/assets/filler/filler-8.jpg'
        },
        {
          title: 'eefi-3',
          image: '/assets/filler/filler-9.jpg'
        },
      ],
      desc: [
        "IDEA COMMUNITY COMPLEX",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      ],
      proj_features:[
        'First Feature',
        'Second Feature',
        'Third Feature',
        'Fourth Feature',
      ],
      const_services:[
        'First Service',
        'Second Service',
        'Third Service',
        'Fourth Service',
      ],
      eng_services:[
        'Fifth Service',
        'Sixth Service',
        'Seventh Service',
        'Eighth Service',
      ],
    }
  ]
  //Grabs index from Carousel component
  function handleIndex(index){
    setProjectSelect(index)
  }

  // console.log(projectSelect, 'project select')
  return(
    <div id='developments' className="w-screen h-full bg-primary justify-center">
      <div className="justify-center items-center">
        <div className={hide? "flex items-center justify-center lg:px-[10%] 2xl:px-[10%] bg-dark_bg/95" : "flex items-center justify-center lg:px-[10%] 2xl:px-[10%] py-10"}>
          <div className={hide ? "relative rounded-xl overflow-hidden hidden 2xl:block h-full ease-in-out duration-300" : "relative rounded-xl overflow-hidden h-full ease-in-out duration-300"}>
            {/* TITLE */}
            <div>
              <h1 className="2xl:text-[1100%] lg:text-9xl text-[350%] p-2 font-thin lg:m-12 lg:text-justify text-center">Developments</h1>
            </div>
            <div className="xl:flex justify-center 2xl:gap-4 gap-2">
              <div className=" justify-center items-center flex">
                <div className="bg-secondary rounded-xl 2xl:p-10 lg:max-w-[850px] p-2 m-2">
                  <Carousel 
                    array={projects} 
                    handleIndex = {handleIndex}
                    // xl:w-[700px] xl:h-[490px] lg:w-[500px] lg:h-[400px] md:w-[400px] md:h-[300px] w-[275px] h-[200px] 
                    custom={"2xl:w-[775px] 2xl:h-[500px] xl:w-[700px] xl:h-[425px] lg:w-[625px] lg:h-[375px] md:w-[550px] md:h-[300px] w-[325px] h-[225px] rounded-2xl bg-center bg-cover hover:scale-[102%] duration-500 transform"}
                  /> 
                </div>
               
              </div>
              <div className="flex justify-center">
              <div className="bg-secondary rounded-xl lg:max-w-[525px] md:max-w-[570px] max-w-[325px] m-2 relative xl:h-auto h-full">
                <div className=" xl:p-10 p-4 w-full">
                  <h2 className="text-red_heading text-shadow-sm shadow-dark_red/40">{projects[projectSelect].name}</h2>
                  <h3 className="text-2xl">{projects[projectSelect].location}</h3>
                  <h3 className="text-2xl">{projects[projectSelect].year}</h3>
                  {projects[projectSelect].desc.map((line)=> {
                    return(
                      <p key={line} className="text-lg leading-[25px]">{line}</p>
                    )
                  })}
                  
                </div>
                <div className="justify-center items-center flex m-10">
                  <button 
                  onClick={()=> handleClick()}
                  className="bg-button_bg hover:bg-button_bg_2  p-3 rounded-xl absolute bottom-8 tracking-wide font-light ease-in-out duration-300">Read More</button>
                </div>
              </div>
              </div>
            </div>
            
          </div>
          

        </div>
        <div>
        { projClick ? 
        <motion.div 
          initial={{opacity:0.5}}
          exit= {{opacity:0.5, transition:{duration:2}}}
          animate={{opacity:1, transition:{duration:.5}}}
          className="">
          <div className="w-full h-full bg-none 2xl:fixed top-0 bottom-0 right-0 left-0 z-10">
            <div className="2xl:z-20 flex h-full w-full items-center justify-center bg-dark_bg/95 ease-in-out duration-200">
              <div className="justify-center items-center bg-accent_3 text-left 2xl:p-6 p-1 rounded-2xl z-9 2xl:z-20 lg:m-20 m-6 h-full md:h-auto max-w-[2500px]  bottom-[0]">
                <Description data={projects[projectSelect]} handleClick={handleClick}/>
                {/* <h1 className="text-7xl">{projects[projectSelect].name}</h1> */}
              </div>
              
            </div>
            
          </div>
        </motion.div> : ""}
      </div>
      </div>
      


    </div>
  )
}

export default Developments;