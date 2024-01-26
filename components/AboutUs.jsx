import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AboutUs = () => {
  const [show, setShow] = useState(false)
  const traits = [
    'Inter-Disciplinary', 'Sustainable', 'Automation', 'Small-Business', 'Client-Care', 'Ingenuity'
  ]

  return (
    <div className='bg-primary w-screen justify-center items-center flex'>
      <div className='m-10'>
        <div className='grid grid-cols-2'>
          <h1 className="lg:text-[1100%] text-[350%] font-thin text-left ml-20">About</h1>
        </div>
        <div className='grid grid-cols-2  justify-center gap-10'>
          <div className='justify-center items-center max-w-[675px] bg-secondary rounded-xl p-12'>
            {/* Our Story Title */}
            <div className='flex justify-center'>
              <h2>Our Story</h2>
            </div>
            {/* Our Story Text */}
            <div className='px-8 text-lg tracking-wider font-light'>
              <p className='my-[4%]'>
                IDEA <span className='text-sm'>CSC</span> provides integrated Engineering and Construction Management services to the Architectural Construction Industry. We are Engineers and Construction Managers collaborating our expertise to provide top quality and uncompromised services to our clients. Our integrated approach is led by our USA based Inter-Disciplinary Engineering team, <span className='font-bold text-button_bg_2 hover:underline cursor-pointer'><Link href={"https://www.ideaaec.com"}target='_blank' rel="noopener noreferrer">IDEA <span className='text-sm'>AEC</span></Link></span>. We focus in building efficiency between the Design and Construction phases of a project. Our approach consists of delivering client specific, cost-effective, on schedule and coordinated solutions.
              </p>
              <p className='my-[4%]'>
                In addition to providing unparalleled Engineering and Construction Management services, we strive to positively impact and improve the current industry in Bangladesh. Our Construction Solutions Company (IDEA <span className='text-sm'>CSC</span>) team will deploy our accomplished Inter-Disciplinary Mechanical, Electrical, Plumbing and Fire Protection Engineering from our <span className='font-bold text-button_bg_2 hover:underline cursor-pointer'><Link href={"https://www.ideaaec.com"}target='_blank' rel="noopener noreferrer">IDEA <span className='text-sm'>AEC</span></Link></span> parent company. Our team members' experience encompasses projects and opportunities at various scales, complexities as well as sectors of the industry including Theatrical/Performance Venues, Institutions & Campuses, High-End Residences & High-Rise Residentials, Terminal & Mixed Use, Commercial and Public Venues.
              </p>
              <p className='my-[4%]'>
                As an organization, we aim to positively impact and improve Bangladesh from a humanitarian perspective. Our IDEA <span className='text-sm'>CSC</span> team includes young and educated Bangladeshi professionals empowered and led by our US Engineering experts. Collectively, our goal is to educate our Bangladeshi engineering students alongside on-coming engineering construction management team members.
              </p>
              <p className='my-[4%]'>
                Prioritizing client’s needs, IDEA <span className='text-sm'>CSC</span> strives to collaborate (as a prime or sub-consultant) with service providers of the Architectural Engineering Industry including Developers, Owners, Architects, Engineers, Designers and Contractors.
              </p>
              <div className='grid grid-cols-2 justify-center gap-4 '>
                {traits.map((trait)=> {
                  return(
                    <div className='bg-button_bg text-center italic rounded-xl p-4'>
                      <p className='' key={trait}>{trait}</p>
                    </div>
                    
                  )
                  
                })}
              </div>
            </div>
          </div>
          {/* 2nd column */}
          <div className=''>
            <div className='bg-secondary justify-end max-w-[650px] rounded-xl p-12'>
              <div className='flex justify-center '>
                <h2>Our Mission</h2>
              </div>
              <div className='px-8 text-lg tracking-wider font-light'>
                <p className="my-[4%]">
                IDEA <span className='text-sm'>CSC</span>, we strive to cultivate enduring partnerships founded on qualities of service, trust, collaboration, and the relentless pursuit of Construction and Engineering innovation. We deploy the expertise and experience of our established US based Engineering parent company to empower our initiatives. Collectively, we align our efforts to implement client-specific and sustainable building system solutions, as well as educate and empower the Construction and Engineering community in Bangladesh.
                </p>
                <p className="mt-[4%]">
                Our integrated Construction and Engineering approach embraces technology as we aim to develop efficiencies and improve the Architectural Engineering industry. Together, we are pushing boundaries ensuring mutual growth and success for our clients and collaboration partners.
                </p>
              </div>
            </div>
            <div className='flex justify-center bg-secondary max-w-[650px] mt-4 p-4 items-end rounded-xl' onMouseOver={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
              <Link href={"/team"}>
                <div className='relative items-center justify-center animate-pulse'>
                  <Image src={'/assets/team.jpeg'} width={500} height={100} className='rounded-xl'/>
                  <div className={show ? "absolute bg-cover bottom-0 left-0 right-0 top-0 bg-tertiary/80 rounded-xl text-dark_text  " : "hidden"}>
                    <h1 className="lg:mx-5 justify-center items-center lg:top-[44%] top-[40%] relative lg:text-2xl text-lg text-primary_text">Click to See Our Team</h1>
                  </div>
                </div>
              </Link>
              
              
            </div>
            {/* copy */}
            {/* <div className="relative items-center justify-center" onMouseOver={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
              <div className="m-2 overflow-hidden rounded-xl items-center justify-center flex animate-pulse">
              <Link href={'/team'}>
                <div className="relative items-center justify-center ">
                  {isBreakPoint ? <Image src={'/assets/team.jpeg'} width={200} height={100} alt={'team'} className='rounded-xl'/> : <Image src={'/assets/team.jpeg'} width={500} height={300} alt={'team'} className='rounded-xl'/> }
                  <div className={show ? "absolute bg-cover bottom-0 left-0 right-0 top-0 bg-tertiary/80 rounded-xl text-dark_text  " : "hidden"}>
                      <h1 className="lg:mx-5 justify-center lg:top-[44%]  top-[40%] relative lg:text-2xl text-lg text-primary_text">Click to See Our Team</h1>
                  </div>
                </div>
                </Link>
              </div>
          </div> */}
          {/* end copy */}
            
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs