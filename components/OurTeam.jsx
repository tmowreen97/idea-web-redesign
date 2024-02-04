import {motion} from 'framer-motion';
import TeamList from "./TeamList";
import AnimatedText from "./AnimatedText";


function OurTeam (){

  const words = "Manifesting World Class Ideas"
  
   
  
  
  
  const main_team = [
    // kazi
    {
      name: 'Kazi Karim',
      title: 'Introducing Kazi: Our Visionary Founder & Managing Principal',
      heading: '',
      body: [
        "As President, Kazi leads the strategic growth and development of Inter-Disciplinary Engineering Associates, Construction Solutions Company in Bangladesh.",
        "Kazi’s extensive portfolio of Design, Construction and Forensics engineering experience empowers him to service and excel at accommodating very complex and demanding projects. As a project manager and lead engineer, he has successfully managed and led design & construction efforts of multiple sustainable LEED certified facilities in various sectors of the construction industry including performance art centers, museums/galleries, higher education buildings, historical buildings, mixed-use, industrial warehouses, commercial spaces, parks and recreational centers and high-rise & high-end residences.",
        "A very detailed approach and extensive experience in project management, design development and construction administration has empowered Kazi to complete multiple large projects throughout the country. Kazi has managed and designed complex MEP-FP projects including Electrical designs of normal and emergency power systems, lighting control systems, emergency lighting systems, fire alarm systems, as well as low voltage systems (telecommunications systems, security systems, etc.).",
        "Kazi’s professional experience includes MEP-FP Engineering services, at prominent US Engineering Companies including AltieriSeborWieber LLC (Altieri), and DeSimone Consulting Engineers, LLC."
      ],
      contact: "/assets/PEKaziAKarimUPDATED.msg",
      linkedin: "https://www.linkedin.com/in/kazi-a-karim-p-e-2a3a3416/",
      fun_fact: "Kazi is an enthusiastic sports fan, always willing to hit the field or harwood (football & basketball) for a good competitive workout. His experience as a College and High-School Quarterback empowers Kazi to joyfully Quarterback the growth and development of IDEA.",
      image: '/assets/kazi_2.jpeg'
    },
    // ASHIK
    
 

    {
      name: 'Ashik Chowdhury',
      title: 'Introducing Ashik: Our Construction Services Lead',
      heading: "",
      body:[
        "In his role as Construction Lead Mr.Ashik leads our Construction services including Construction Management assignments. He utilizes his 15+ years of Construction Management experience to empower IDEA CSC’s Construction Services offerings. Mr. Ashik also brings 10+ years of international management experience to our team.",
        "His expertise includes, but is not limited to, Project Management, Construction Management, Project Coordination, Sub-Contractor Procurement & Management, Cost Estimation & Cost Control, Construction Project Schedule Development, Construction Bid Procurement, Equipment & Material Procurement and Permitting."
      ],
      fun_fact: "Vinoo has two kids and no time for fun… he also has a passion for history, and is an avid reader on the subject.",
      image: '/assets/ashik_3.jpeg'
    }
  ]

  return(
    <div className="w-screen h-full items-center text-center justify-center bg-primary">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition:{delay:1 , duration:1}}}
      className="lg:p-20 pt-20 pb-10">
        <h1 className="md:text-[1100%] text-8xl font-thin text-primary_text text-center lg:text-left tracking-wide">Our Team</h1>
      </motion.div>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1, transition:{delay:1.5 , duration:1}}}
      className="">
        <div className="md:grid grid-cols-1 md:gap-20 md:mx-20 mt-10">
          {
            main_team.map((member)=> {
              return(
                <div key={member.title}>
                  <TeamList member={member}/>
                </div>
                
              )
              
            })
          }


        </div>

      
      <div className=" xl:p-40 p-10 mx-auto flex flex-col items-center justify-center">
        <AnimatedText text={words}/>
      </div>
      </motion.div>
      
      {/* <motion.div 
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={textContainer}
      initial="hidden"
      animate="visible"
      >
        {words.map((word, index) => (
        <motion.span
          variants={textChild}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
        
      </motion.div> */}
      {/* <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mx-20 pb-20">
          {second_team.map((member)=> {
            return(
              <div className="relative hover:cursor-pointer">
                <Card member={member}/>

              </div>
              
            )
            
          })
          } */}
      

      
    </div>
  )
  }

  export default OurTeam;