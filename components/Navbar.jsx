import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineMenu, AiFillInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

const Navbar = ({setLightLogo, lightLogo, customText, greenLogo}) => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState(customText ? customText :'#323b1e');
  const [darkerLogo, setDarkerLogo] = useState(greenLogo)
  
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // if (router.asPath == '/'){
    //   setLightLogo(false)
    // }
    // nav bar color to be transparent if at the top of the page, otherwise change the color
    const changeColor = () => {
      if (window.scrollY >= 25) {
        
        setColor('#919d99');
        setTextColor("#fdf4eb")
        setDarkerLogo(false)
        if (setLightLogo) {
          setLightLogo(true)
        }
      } else {
        setColor('transparent');
        setTextColor(customText)
        setDarkerLogo(greenLogo)
        if (setLightLogo) {
          setLightLogo(false)
        }
        
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div className='flex'>

    
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1, transition:{delay:1, duration:1}}}      
      className='fixed left-0 top-0 w-full z-10 ease-in duration-200 tracking-wider'
    >
      <div style={{ backgroundColor: `${color}`, opacity:40}} >
        <div className='w-screen h-full m-auto flex justify-between items-center p-3 ml-1 ' 
        >
          {/* logo */}
          <motion.div
          
          >
            <Link href='/'>
              
              {lightLogo ? <Image src={'/assets/logos/nav-bar-updated.png'} width={300} height={100} alt={'light_logo'} /> : <Image src={darkerLogo ? '/assets/logos/csc-logo-dark.png' : '/assets/logos/logo-landing.png'} width={150} height={100} alt={'dark_logo'} />}
            </Link>
          </motion.div>
          {/* nav bar */}
          <ul color={{textColor}} style={{color :`${textColor}`}} className='hidden sm:flex '>
            <li className='p-4'>
            <div className="dropdown inline-block relative" style={{color :`${textColor}`}}>
            <button aria-label='about_button' className="inline-flex items-center ">
              <span  className="mr-1 tracking-wide" id={router.asPath == '/#about' || router.asPath == '/team' ? "active" : ''}>About</span>
              <span id={router.asPath == '/#about' || router.asPath == '/team' ? "active" : ''}><BiChevronDown /></span>
            </button>
            <ul className="dropdown-menu absolute hidden pt-1 text-center">
              <li className="bg-button_bg hover:bg-button_shadow w-[90px] ml-[-20px] rounded-xl text-light_text">
                <Link className="p-2 block mb-1" href={'/#about'}>About Us</Link>
              </li>
              <li className="bg-button_bg hover:bg-button_shadow w-[100px] ml-[-29px] rounded-xl text-light_text">
                <Link className="p-2 block" href={'/team'}>Our Team</Link>
              </li>
            </ul>
          </div>
            </li> 
            <li className='m-2 p-2 hover:bg-button_shadow rounded-xl'>
              <Link href='/#projects' id={router.asPath == "/#projects" ? "active" : ""}>Projects</Link>
            </li>
            <li className='m-2 p-2 hover:bg-button_shadow rounded-xl'>
              <Link href='/services' id={router.pathname == "/services" ? "active" : ""}>Services</Link>
            </li>
            <li className='m-2 p-2 hover:bg-button_shadow rounded-xl'>
              <Link href='/developments' id={router.pathname == "/developments" ? "active" : ""}>Developments</Link>
            </li>
            <li className='m-2 p-2 hover:bg-button_shadow  rounded-xl'>
              <Link href='/contact' id={router.pathname == "/contact" ? "active" : ""}>Contact</Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <div onClick={handleNav} className='block sm:hidden z-40'>
            {nav ? (
              <AiOutlineClose size={25} className='text-primary_text mr-3' />
            ) : (
              <AiOutlineMenu size={25}  className='text-primary_text mr-3' />
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-nav_bar ease-in duration-300 tracking-wider pt-10 z-30'
                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-nav_bar ease-in duration-300 tracking-wider z-30'
            }
          >
            
            <ul>
            <div className='flex justify-center '>
                {/* <Image src={'/assets/logos/const-icon.png'} width={70} height={100} className="" alt={'icon'}/>
                <Image src={'/assets/logos/mech-icon.png'} width={60} height={20} className="" alt={'icon'}/>
                <Image src={'/assets/logos/elec-icon.png'} width={65} height={20} className="" alt={'icon'}/>
                <Image src={'/assets/logos/plumb-icon.png'} width={70} height={60} className="" alt={'icon'}/>
                <Image src={'/assets/logos/fp-icon.png'} width={70} height={60} className="" alt={'icon'}/> */}
                <Image src={'/assets/logos/logo-landing.png'} width={275} height={20}/>

            </div>
              <ul className="justify-center items-center mx-[19%] mt-5 text-primary_text">
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 '>
                <Link href='/' id={router.pathname == "/" ? "active" : ""}>Home</Link>
              </li>
              <li  className=' hover:text-gray-500 text-4xl p-4'>
                <div className="dropdown inline-block relative">
                  <button aria-label='about_button' className="inline-flex items-center " id={router.asPath == '/#about' || router.asPath == '/team' ? "active" : ''}>
                    <div className="relative">About</div>
                    <BiChevronDown />
                    {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg> */}
                  </button>
                  <ul className="dropdown-menu absolute left-0 hidden text-gray-70 text-center z-30 font-light">
                    <li onClick={handleNav} className="bg-button_bg hover:bg-button_shadow text-light_text rounded-xl text-4xl p-2 w-[200px] m-2 ">
                      <Link className="block " href={'/#about'}>About Us</Link>
                    </li>
                    <li onClick={handleNav} className="bg-button_bg hover:bg-button_shadow text-light_text rounded-xl text-4xl p-2 w-[200px] m-2">
                      <Link className="block" href={'/team'}>Our Team</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 '>
                <Link href='/#projects' id={router.asPath == '/#projects' ? "active" : ""}>Projects</Link>
              </li>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 '>
                <Link href='/services' id={router.pathname == "/services" ? "active" : ""}>Services</Link>
              </li>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 '>
                <Link href='/developments' id={router.pathname == "/developments" ? "active" : ""}>Developments</Link>
              </li>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 '>
                <Link href='/contact' id={router.pathname == "/contact" ? "active" : ""}>Contact</Link>
              </li>
              </ul>
            
            <div className="flex justify-evenly py-5 pt-10 rounded-xl text-light_text">
                  <div className="bg-button_bg/90 hover:bg-dark_green rounded-full p-5 text-4xl mx-5">
                    <Link href="https://www.instagram.com/idea.aec/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                          <AiFillInstagram/>
                        </a>
                    </Link>
                  </div>
                  <div className="bg-button_bg/90 hover:bg-dark_green rounded-full p-5 text-4xl mx-5">
                    <Link href="https://www.facebook.com/profile.php?id=100076951517206" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                          <AiFillFacebook/>
                        </a>
                    </Link>
                  </div>
                  <div className="bg-button_bg/90 hover:bg-dark_green rounded-full p-5 text-4xl mx-5">
                    <Link href="https://www.linkedin.com/company/idea-aec/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <AiFillLinkedin/>
                        </a>
                    </Link>
                  </div>
                </div>
            </ul>
          </div>
        </div>
      </div>
      {/* TRANSLATE OPTION */}
      
    </motion.div>
    </div>
  );
};

export default Navbar;