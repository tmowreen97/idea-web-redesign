import Carousel from "./Carousel";
import { useState } from "react";
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
  function handleEscape(id){
    if(projClick == true){
      setProjClick(!projClick)
      setHide(!hide)
    }
  }

  const projects = [
    // BD RESIDENCE
    {
      id:1,
      name: 'BD HIGH-END RESIDENCE',
      location:"Comilla, Bangladesh",
      size: '3500 SF / 325 SQM',
      sector: "Residential",
      year: "JULY 2024",
      services: [
        {
          alt: 'bd-res-service-1',
          service: 'Engineering Services'
        },
        {
          alt: 'bd-res-service-1',
          service: 'Construction Services'
        }
      ],
      desc: [
        "Renovation and addition to existing single family residence. Existing condition includes 2-Bedrooms, 2-Bathrooms; located in Comilla, Bangladesh.",
        "Residence will be upgraded to American style high-end facilities and systems. Completed project will include 4-Bedrooms and 3.5-Bathrooms. The roof level floor will be programmed with a family gathering room (Light Room). Project will also include erection of a separate utility building structure."
      ],
      proj_features:[
        "Emergency Power (Generator) System",
        "Central Mechanical (ducted) system with multiple zones.",
        "Central domestic hot water system.",
        "Wired surveillance and security system.",
        "Rain water harvesting system.",
      ],
      const_services:[
        'Construction Management',
        "Design-Build",
        "Sub-Consultant Procurement & Management",
        "Cost Estimation & Cost Control",
        "Construction Bid Procurement",
      ],
      eng_services:[
        "Architectural Design",
        "Electrical Design",
        "Mechanical (HVAC) Design",
        "Plumbing Design",
      ],
      image: "/assets/projects/bd-render.png",
      images_array: [
        {
          title: 'bd-res-1',
          image: '/assets/projects/bd-render.png'
        },
        {
          title: 'bd-res-2',
          image: '/assets/projects/bd-res-render-1.png'
        },
        {
          title: 'bd-res-2',
          image: '/assets/projects/walkthrough-edited.gif',
          timer: 10000
        },
      ],
    },
    // COMMUNITY COMPLEX
    {
      id: 2,
      name: 'IDEA COMMUNITY COMPLEX CENTER',
      location: "Comilla, Bangladesh",
      size: "36,000 SF / 3,345 SQM",
      year: "JULY 2026",
      sector: "Mixed-Use",
      desc: [
        "The project will be a new state-of-the-art 36,000 SF / 3,345 SQM Mixed-Use community facility. The program will include a Non-Profit Foundation Community center, Learning center, Commercial/Marketing area,  Offices, Residential units, Recreational facilities, Restaurants/Cafes, etc.",
        "Project will include sustainable and energy efficient design and systems.",
      ],
      proj_features:[
        'Solar Photovoltaic (PV) System',
        "Energy efficient system.",
        "Emergency Power (Generator) system.",
        "Central Mechanical (ducted) system with multiple zones. ",
        "Central domestic hot water system.",
        "Wired Surveillance and security system.",
        "Rain water harvesting system.",
      ],
      const_services:[
        'Construction Management',
        "Design-Build",
        "Sub-Consultant Procurement & Management",
        "Cost Estimation & Cost Control",
        "Construction Bid Procurement",
      ],
      eng_services:[
        'Architectural Design',
        "Electrical Design",
        "Mechanical (HVAC) Design",
        "Plumbing Design",
        "Fire Protection (Sprinkler) System",
        "Low Voltage (Security & Information Technology) Design",
      ],
      image: "/assets/projects/comm-complex-2.png",
      images_array: [
        {
          title: 'eefi-1',
          image: '/assets/projects/comm-complex-2.png'
        },
        {
          title: 'eefi-1',
          image: '/assets/projects/comm-complex.png'
        },
      ],
    },
    // 5 STORY

    {
      id: 3,
      name: '5-STORY RESIDENTIAL BUILDING',
      location: 'Comilla, Bangladesh',
      size:'9,000 SF / 836 SQM',
      year: '2023',
      sector: 'Mid-High Rise Residential',
      desc: [
        "The project is a 5-Story Mid-Rise Multi-Unit Residential building development. The building consists of nine (9) high-end residential units.",
      ],
      proj_features:[
        "Emergency Power (IPS) System.",
        "Wire Internet System.",
        "Power Infrastructure for AC system.",
        "Wired Surveillance and security system.",
        "Digital intercom system.",
      ],
      const_services:[
        'Construction Management',
        "Owner’s Representation",
        "Construction Project Schedule Development",
        "Sub-Contractor Procuremtn & Management",
        "Cost Estimation & Cost Control",
        "Construction Bid Procurement ",
        "Equipment & Material Procurement",
        "Permitting",
        "Construction Site Supervision",
        "Construction Status Reporting",
        "Site Safety Coordination & Supervision",
        "Inspections and Completed Operations",
      ],
      image: "/assets/projects/5story-crop.png",
      images_array: [
        {
          title: 'eefi-1',
          image: "/assets/projects/5story-crop.png"
        },
      ],

    },
  ]
  //Grabs index from Carousel component
  function handleIndex(index){
    setProjectSelect(index)
  }
  return(
    <div id='projects' className="w-screen h-full bg-primary justify-center">
      <div className="justify-center items-center">
        <div  className={hide? "flex items-center justify-center lg:px-[10%] 2xl:px-[10%] bg-dark_bg/95" : "flex items-center justify-center lg:px-[10%] 2xl:px-[10%] py-10"}>
          <div className={hide ? "relative rounded-xl overflow-hidden hidden  h-full ease-in-out duration-300" : "relative rounded-xl overflow-hidden h-full ease-in-out duration-300"}>
            {/* TITLE */}
            <div>
              <h1 className="2xl:text-[1100%] lg:text-9xl text-[350%] p-2 font-thin lg:m-12 lg:text-justify text-center">Projects</h1>
            </div>
            <div className="xl:flex justify-center 2xl:gap-4 gap-2">
              <div className=" justify-center items-center flex">
                <div className="bg-secondary rounded-xl 2xl:p-10 lg:max-w-[850px] lg:p-4 p-2 m-2">
                  <Carousel 
                    array={projects} 
                    handleIndex = {handleIndex}

                    // xl:w-[700px] xl:h-[490px] lg:w-[500px] lg:h-[400px] md:w-[400px] md:h-[300px] w-[275px] h-[200px] 
                    custom={"2xl:w-[775px] 2xl:h-[500px] xl:w-[675px] xl:h-[425px] lg:w-[625px] lg:h-[375px] md:w-[550px] md:h-[300px] w-[325px] h-[225px] rounded-2xl bg-center bg-cover hover:scale-[102%] duration-500 transform"}
                  /> 
                </div>
               
              </div>
              <div className="flex justify-center">
              <div className="bg-secondary rounded-xl lg:max-w-[525px] md:max-w-[570px] max-w-[325px] m-2 relative xl:h-auto md:h-full h-[650px]">
                <div className=" xl:p-10 p-4 w-full font-light mb-8 md:mb-0">
                  <h2 className="text-dark_red text-shadow-sm shadow-red_heading/40 font-medium text-4xl">{projects[projectSelect].name}</h2>
                  <h3 className="text-2xl">{projects[projectSelect].location}</h3>
                  <h3 className="text-2xl">{projects[projectSelect].year}</h3>
                  <h3 className="text-2xl">{projects[projectSelect].size}</h3>
                  <h3 className="text-2xl">{projects[projectSelect].sector}</h3>
                  <p className="lg:text-xl text-lg leading-[25px]">{projects[projectSelect].desc[0]}</p>
                </div>
                <div className="justify-center items-center flex m-10">
                  <button 
                  onClick={()=> handleClick()}
                  className="bg-button_bg hover:bg-button_bg_2  p-3 mt-[20px] md:mt-0 rounded-xl absolute md:bottom-8 bottom-4 tracking-wide font-light ease-in-out duration-300">Read More</button>
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
          <div className="w-full h-full bg-none top-0 bottom-0 right-0 left-0 z-10">
            <div className="2xl:z-20 flex h-full w-full items-center justify-center bg-dark_bg/95 ease-in-out duration-200">
              <div className="justify-center items-center bg-accent_3 text-left  p-1 rounded-2xl z-9 lg:m-20  m-6 h-full md:h-auto max-w-[2500px]  bottom-[0]">
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