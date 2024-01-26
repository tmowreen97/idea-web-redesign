import Image from 'next/image';
import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
// import { SliderData } from './SliderData';
// import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const About = () => {
  const [show, setShow] = useState(false)
  //CHECK screen size
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };
  const isBreakPoint = useMediaQuery(800)

  const traits = [
    'Inter-Disciplinary', 'Sustainable', 'Automation', 'Small-Business', 'Client-Care', 'Ingenuity'
  ]
// bg-[#DAD3DF]
  return (
    <div id='about' className='w-screen h-full bg-primary font-light'>
      <div className=' flex items-center justify-center lg:p-4 '>
        <div className="about__parent lg:grid lg:mx-[15%]">
          <div className="about__title  lg:m-0 ">
            <h1 className="lg:text-[1100%] text-8xl tracking-wider text-center font-thin text-primary_text lg:mt-[35%] lg:m-0 m-4">
              About
            </h1>
          </div>
          <div className="about__child1 p-4 m-4 lg:m-0 lg:text-lg items-center justify-center bg-secondary rounded-xl lg:w-[645px] ">
            <div className='lg:m-14 m-3'>
              <h2 className="tracking-wider text-red_text text-shadow-sm shadow-dark_red">Our Story</h2>
            </div>
            <div className='lg:mx-14 lg:m-5 m-3'>
              <div>
                <p className='my-[4%]'>
                IDEA <span className='text-sm'>CSC</span> provides integrated Engineering and Construction Management services to the Architectural Construction Industry. We are Engineers and Construction Managers collaborating our expertise to provide top quality and uncompromised services to our clients. Our integrated approach is led by our USA based Inter-Disciplinary Engineering team, <span className='font-bold text-button_bg_2 hover:underline cursor-pointer'><Link href={"https://www.ideaaec.com"}target='_blank' rel="noopener noreferrer">IDEA <span className='text-sm'>AEC</span></Link></span>. We focus in building efficiency between the Design and Construction phases of a project. Our approach consists of delivering client specific, cost-effective, on schedule and coordinated solutions.
                </p>
                <p className='my-[4%]'>
                In addition to providing unparalleled Engineering and Construction Management services, we strive to positively impact and improve the current industry in Bangladesh. Our Construction Solutions Company (IDEA <span className='text-sm'>CSC</span>) team will deploy our accomplished Inter-Disciplinary Mechanical, Electrical, Plumbing and Fire Protection Engineering from our <span className='font-bold text-button_bg_2 hover:underline cursor-pointer'><Link href={"https://www.ideaaec.com"}target='_blank' rel="noopener noreferrer">IDEA <span className='text-sm'>AEC</span></Link></span> parent company. Our team members' experience encompasses projects and opportunities at various scales, complexities as well as sectors of the industry including Theatrical/Performance Venues, Institutions & Campuses, High-End Residences & High-Rise Residentials, Terminal & Mixed Use, Commercial and Public Venues.
                </p>
                <p className='my-[4%]'>
                As an organization, we aim to positively impact and improve Bangladesh from a humanitarian perspective. Our IDEA <span className='text-sm'>CSC</span> team includes young and educated Bangladeshi professionals empowered and led by our US Engineering experts. Collectively, our goal is to educate our Bangladeshi engineering students alongside on-coming engineering construction management team members.
                </p>
                <p className='mt-[4%]'>
                Prioritizing client’s needs, IDEA <span className='text-sm'>CSC</span> strives to collaborate (as a prime or sub-consultant) with service providers of the Architectural Engineering Industry including Developers, Owners, Architects, Engineers, Designers and Contractors.
                </p>
              </div>
            </div>
            
            <div className='grid md:grid-cols-2 justify-center items-center text-center  lg:w-full lg:mx-10'>
              {
                traits.map((trait, index) => (
                  <div key={index} className='bg-button_bg italic rounded-xl p-4 max-w-[200px] lg:m-[4%] mx-2 flex justify-center items-center'>
                    <p className='flex text-center'>{trait}</p>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="about__child2 p-4 m-4 lg:m-0 lg:text-lg items-center justify-center bg-secondary rounded-xl lg:w-[485px]">
            <div className='lg:my-14 m-3 lg:mx-8'>
              <h2 className="tracking-wider text-red_text text-shadow-sm shadow-dark_red ">Our Mission</h2>
            </div>
            <div className='lg:m-8 m-3'>
              <div>
                <p className="my-[4%]">
                IDEA <span className='text-sm'>CSC</span>, we strive to cultivate enduring partnerships founded on qualities of service, trust, collaboration, and the relentless pursuit of Construction and Engineering innovation. We deploy the expertise and experience of our established US based Engineering parent company to empower our initiatives. Collectively, we align our efforts to implement client-specific and sustainable building system solutions, as well as educate and empower the Construction and Engineering community in Bangladesh.
                </p>
                <p className="mt-[4%]">
                Our integrated Construction and Engineering approach embraces technology as we aim to develop efficiencies and improve the Architectural Engineering industry. Together, we are pushing boundaries ensuring mutual growth and success for our clients and collaboration partners.
                </p>
              </div>
            </div>
            
            
          </div>
          <div className="about__img flex bg-secondary p-4 m-4 items-center justify-center text-center rounded-xl hover:animate-none  lg:w-[485px] lg:m-0 ">
            <div className="relative items-center justify-center" onMouseOver={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
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
               
              
      
          </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default About;