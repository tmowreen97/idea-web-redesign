import { motion } from "framer-motion";
import { Link } from 'next/link';
import { CiShare1 } from "react-icons/ci";


function ServicesPage(){
  const engineering_services = [
    //Mechanical
    {
      title: 'Mechanical',
      icon: '',
      services: [
        {
          service:"Central Plant Design (Chilled water, Condenser Water, Heating Hot Water and Steam)",
          alt:"mech-1",
        },
        {
          service:"Chiller System Design",
          alt:"mech-2",
        },
        {
          service:"Cooling Tower System Designs",
          alt:"mech-3",
        },
        {
          service:"Boiler (Steam/Water) System Designs",
          alt:"mech-4",
        },
        {
          service:"Central Systems",
          alt:"mech-5",
        },
        {
          service:"Variable Refrigerant Systems",
          alt:"mech-6",
        },
        {
          service:"Energy Modeling",
          alt:"mech-7",
        },
        {
          service:"Building Automation and Energy Management Systems",
          alt:"mech-8",
        },
        {
          service:"Existing Systems and Modernization",
          alt:"mech-9",
        },
        {
          service:"LEED and Sustainable Design",
          alt:"mech-10",
        },
        {
          service:"BIM Modeling",
          alt:"mech-11",
        },
      ],
      color: '#C2F0BD',
      list_color: '#AED8AA'
    },
    //Electrical
    {
      title: 'Electrical',
      icon: '',
      services: [
        {
          service:"Electrical Power Systems",
          alt:"elect-1",
        },
        {
          service:"Fire Alarm Design",
          alt:"elect-2",
        },
        {
          service:"Medium Voltage Systems",
          alt:"elect-3",
        },
        {
          service:"Emergency and Standby Systems",
          alt:"elect-4",
        },
        {
          service:"Uninterruptible Power Systems",
          alt:"elect-5",
        },
        {
          service:"Renewable Energy Systems",
          alt:"elect-6",
        },
        {
          service:"Fire Alarm",
          alt:"elect-7",
        },
        {
          service:"Lighting Design",
          alt:"elect-8",
        },
        {
          service:"Lighting Control Systems",
          alt:"elect-9",
        },
        {
          service:"Short Circuit Studies",
          alt:"elect-10",
        },
        {
          service:"Arc Flash Studies",
          alt:"elect-11",
        },
        {
          service:"Selective Coordination Studies",
          alt:"elect-12",
        },
        {
          service:"LEED and Sustainable Design",
          alt:"elect-13",
        },
        {
          service:"BIM Modeling",
          alt:"elect-14",
        },
      ],
      color: '#C2B7E9',
      list_color: '#AEA4D1'
    },
    //Plumbing
    {
      title: 'Plumbing',
      icon: '',
      services: [
        {
          service:"Potable and Non-Potable Water System",
          alt:"plumb-1",
        },
        {
          service:"Water Pressure Booster System",
          alt:"plumb-2",
        },
        {
          service:"Drainage System including Waste & Storm",
          alt:"plumb-3",
        },
        {
          service:"Plumbing System Retrofitting and Renovation",
          alt:"plumb-4",
        },
        {
          service:"Flood Mitigation Design",
          alt:"plumb-5",
        },
        {
          service:"Rainwater Harvesting System",
          alt:"plumb-6",
        },
        {
          service:"Stormwater Detention/Retention Design",
          alt:"plumb-7",
        },
        {
          service:"Commercial Kitchen Design",
          alt:"plumb-8",
        },
        {
          service:"Natural Gas System Design",
          alt:"plumb-9",
        },
        {
          service:"Gas Pressure Booster System ",
          alt:"plumb-10",
        },
        {
          service:"Liquid Propane (LP) Design",
          alt:"plumb-11",
        },
        {
          service:"Water Conservation Design",
          alt:"plumb-12",
        },
        {
          service:"LEED and Sustainable Design",
          alt:"plumb-13",
        },

      ],
      color: '#EDB87A',
      list_color: '#D5A56D'
    },
  ]
  const engineering_services_two = [
    //Fire Protection
    {
      title: 'Fire Protection',
      icon: '',
      services: [
        {
          service:"Wet Fire Sprinkler System Design",
          alt:"fp-1",
        },
        {
          service:"Dry Fire Sprinkler Design",
          alt:"fp-2",
        },
        {
          service:"Hydraulic Calculations",
          alt:"fp-3",
        },
        {
          service:"Special Agent Design",
          alt:"fp-4",
        },
        {
          service:"Fire Pump and standpipe System",
          alt:"fp-5",
        },
      ],
      color: '#F89090',
      list_color: '#DF8181'
    },
    //Low Voltage
    {
      title: 'Low Voltage List',
      icon: '',
      services: [
        {
          service:"Copper Systems Telecom Design",
          alt:"lv-1",
        },
        {
          service:"Fiber Systems Telecom Design",
          alt:"lv-1",
        },
        {
          service:"Security Systems",
          alt:"lv-1",
        },
        {
          service:"Wireless Heat Mapping",
          alt:"lv-1",
        },
      ],
      color: '#ADDEDF',
      list_color: '#9BC7C8'
    }
  ]

  const life_cycle_services = {
    title: 'Existing Facility Services',
    services: [
      {
        service:"MEP-FP System Upgrades",
        alt:"existing-1",
      },
      {
        service:"Code Compliance/Upgrades",
        alt:"existing-1",
      },
      {
        service:"Efficiency/Energy Use Evaluations",
        alt:"existing-1",
      },
      {
        service:"Building Management/Automation System Upgrades",
        alt:"existing-1",
      },
      {
        service:"Oil To Gas/Steam Conversion",
        alt:"existing-1",
      },
      {
        service:"Boiler Replacement and Upgrades",
        alt:"existing-1",
      },
      {
        service:"Exhaust System Upgrades",
        alt:"existing-1",
      },
      {
        service:"Condensation / Humidification / Dehumidification Issues",
        alt:"existing-1",
      },
      {
        service:"Code Compliance Upgrades For Normal and Emergency Lighting",
        alt:"existing-1",
      },
      {
        service:"Code Compliance Upgrades For Lighting Controls",
        alt:"existing-1",
      },
      {
        service:"Fire Alarm System Upgrades",
        alt:"existing-1",
      },
      {
        service:"AS-BUILT Documentation",
        alt:"existing-1",
      },
      {
        service:"Existing Conditions Documentation",
        alt:"existing-1",
      },
    ],
    color: '#63a081',
    list_color: '#498767'
  }

  const construction_services = [
    // Overall
    {
      title: 'Overall Services',
      services: [
        {
          service:"Owner's Representation",
          alt:"overall-1",
        },
        {
          service:"Construction Management",
          alt:"overall-2",
        },
        {
          service:"Project Management",
          alt:"overall-3",
        },
        {
          service:"Design",
          alt:"overall-4",
        },
        {
          service:"Design-Build",
          alt:"overall-5",
        },
        {
          service:"Design-Bid-Build",
          alt:"overall-6",
        },
        {
          service:"Design Management ",
          alt:"overall-7",
        },
        {
          service:"Project Coordination",
          alt:"overall-8",
        },
        {
          service:"Sub-Consultant Procurement & Management",
          alt:"overall-9",
        },
        {
          service:"Cost Estimation & Cost Control",
          alt:"overall-10",
        },
        {
          service:"Construction Project Schedule Development",
          alt:"overall-11",
        },
        {
          service:"Construction Bid Procurement",
          alt:"overall-12",
        }, 

      ],
      color: '#63a081',
      list_color: '#498767'
    },
    // Construction
    {
      title: 'Construction Services',
      services:[
        {
          service:"Equipment & Material Procurement",
          alt:"const-1",
        },
        {
          service:"Quality Control",
          alt:"const-2",
        },
        {
          service:"Permitting",
          alt:"const-3",
        },
        {
          service:"Construction Site Supervision",
          alt:"const-4",
        },
        {
          service:"Scheduling",
          alt:"const-5",
        },
        {
          service:"Look-Ahead Scheduling",
          alt:"const-6",
        },
        {
          service:"Shop Drawings Review",
          alt:"const-7",
        },
        {
          service:"Coordination Drawings Review",
          alt:"const-8",
        },
        {
          service:"Construction Status Reporting",
          alt:"const-9",
        },
        {
          service:"Site Safety Coordination & Supervision",
          alt:"const-10",
        },
        {
          service:"Inspections and Completed Operations",
          alt:"const-11",
        },
      ],
      color: '#63a081',
      list_color: '#498767'
    }
  ]
  return(
    <div className="w-screen h-full bg-primary">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition:{delay:1 , duration:1}}}
      className="lg:p-20 pt-20  pb-10">
        <h1 className="md:text-[1100%] text-8xl font-thin text-primary_text text-center lg:text-left tracking-wide">Services</h1>
      </motion.div>
      <div className="pb-20">
        {/* CONSTRUCTION SERVICES */}
        <div className="justify-center font-light">
          {/* TITLE */}
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1, transition:{delay:1.5 , duration:1}}}
          className="flex justify-center items-center">
            <h1 className="bg-secondary font-thin rounded-2xl p-7 xl:m-10 my-2 2xl:text-7xl lg:text-5xl text-3xl flex">Construction Management Services</h1>
          </motion.div>
          {/* BODY */}
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1, transition:{delay:2, duration:1}}} 
            className="justify-center flex ">
              <div id='subsection' className="xl:grid xl:grid-cols-2 items-center xl:gap-10 xl:p-0 xl:mx-[20%] xl:mb-10 justify-center">
              {construction_services.map((service)=> {
                return(
                  <div className="xl:h-[625px] flex justify-center text-dark_text p-5 my-5 rounded-2xl xl:w-auto w-[375px]" style={{backgroundColor: `${service.color}`}}>
                    <div className="justify-center">
                      <div className="items-center justify-center flex">
                        <h1 className="text-dark_text text-3xl xl:text-4xl p-5">{service.title}</h1>
                      </div>
                      <div className="2xl:w-[400px] xl:w-[345px] lg:w-[325px] 2xl:h-[450px] flex justify-center rounded-2xl p-8 shadow-inner font-medium" style={{backgroundColor: `${service.list_color}`}}>
                      <div className="">
                        <ul className="items-center justify-center">
                          {service.services.map((list_item)=> {
                            return(
                              <li key={list_item.alt} className="list-disc xl:text-lg">
                                <p className="text-dark_text lg:leading-6 xl:leading-7">{list_item.service}</p>
                              </li>
                              
                            )
                          })}
                        </ul>
                      </div>
                        
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>             
            </motion.div>
        </div>
        {/* Engineering Services Section */}
        <div className="font-light">
          {/* Title */}
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1, transition:{delay:2.5, duration:1}}} 
          className="items-center justify-center flex">
            <h1 className=" bg-secondary font-thin rounded-2xl p-7 xl:m-10 my-2 2xl:text-7xl lg:text-5xl text-3xl flex">Engineering Services<a target="_blank" rel="noopener noreferrer" href="https://www.ideaaec.com/services" ><CiShare1 className="text-[65%] m-1 hover:scale-110 ease-in-out duration-200 items-center justify-center align-middle cursor-pointer hover:text-button_bg_2" /></a></h1>
          </motion.div>
          {/* Subsections*/}
          {/* actual grid without title */}
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1, transition:{delay:3, duration:1}}} id="subsection" className="xl:grid xl:grid-cols-3 xl:gap-10 xl:p-0 xl:mx-[5%] justify-center items-center">
            {engineering_services.map((service)=> {
              return(
                // **
                <div className="xl:h-[675px] flex justify-center text-dark_text p-5 my-5 rounded-2xl xl:w-auto w-[375px]" style={{backgroundColor: `${service.color}`}}>
                  <div className="justify-center">
                    <div className="items-center justify-center flex">
                      <h1 className="text-dark_text xl:text-4xl text-3xl p-5">{service.title}</h1>
                    </div>
                    <div className="2xl:w-[400px] xl:w-[345px] lg:w-[325px] 2xl:h-[450px] items-center flex justify-center rounded-2xl p-8 shadow-inner font-medium" style={{backgroundColor: `${service.list_color}`}}>
                    <div className="">
                      <ul className="items-center justify-center">
                        {service.services.map((list_item)=> {
                          return(
                            <li key={list_item.alt} className="list-disc xl:text-lg">
                              <p className="text-dark_text lg:leading-6 xl:leading-7">{list_item.service}</p>
                            </li>
                            
                          )
                        })}
                      </ul>
                    </div>
                      
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
        {/* Engineering Services Section TWO */}
        <div className="font-light">
          {/* Subsections*/}
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1, transition:{delay:3.5, duration:1}}} 
          id='subsection' 
          className="xl:grid xl:grid-cols-2 items-center xl:gap-10 xl:p-0 xl:mx-[20%] xl:m-10 justify-center">
            {engineering_services_two.map((service)=> {
              return(
                <div className="flex xl:h-[350px] justify-center text-dark_text p-5 my-5 rounded-2xl xl:w-auto w-[375px]" style={{backgroundColor: `${service.color}`}}>
                  <div className="justify-center">
                    <div className="items-center justify-center flex">
                      <h1 className="text-dark_text text-3xl xl:text-4xl p-5">{service.title}</h1>
                    </div>
                    <div className="2xl:w-[400px] xl:h-[200px] flex justify-center rounded-2xl p-5 shadow-inner font-medium" style={{backgroundColor: `${service.list_color}`}}>
                    <div>
                      <ul className=" items-center justify-center">
                        {service.services.map((list_item)=> {
                          return(
                            <li key={list_item.alt} className="list-disc xl:text-lg">
                              <p className="text-dark_text lg:leading-6 xl:leading-7">{list_item.service}</p>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                      
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
        {/* Life Cycle + Construction */}
        <div id='extraservices' className="mx-[5%] justify-center font-light">
          {/* TITLES */}
          {/* Life Cycle */}
          <div className="">
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1, transition:{delay:4, duration:1}}} 
            className="flex items-center justify-center">
              <h1 className="bg-secondary font-thin  rounded-2xl p-5 m-10 flex items-center 2xl:text-7xl lg:text-5xl text-4xl text-center">{life_cycle_services.title}</h1>
            </motion.div>
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1, transition:{delay:4.5, duration:1}}} 
            className="justify-center items-center flex ">
              <div className="flex justify-center 2xl:h-[625px] rounded-2xl 2xl:mx-10 p-5  my-5 2xl:my-0 xl:w-[500px] w-[375px]" style={{backgroundColor: `${life_cycle_services.color}`}}>
              <div className="2xl:w-[500px] flex items-center justify-center rounded-2xl p-5 xl:m-10 shadow-inner font-medium" style={{backgroundColor: `${life_cycle_services.list_color}`}}>
                <div>
                  <ul className="items-center justify-center">
                  {life_cycle_services.services.map((list_item)=> {
                    return(
                      <li key={list_item.alt} className="list-disc xl:text-lg">
                        <p className="text-dark_text text-lg lg:leading-6 xl:leading-7">{list_item.service}</p>
                      </li>
                    )
                  })}
                </ul>
                </div>
                
              </div>
              </div>  
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    
  )
}


export default ServicesPage;
