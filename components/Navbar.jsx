import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

//   <div class="dropdown">
//   <button class="dropbtn">Dropdown
//     <i class="fa fa-caret-down"></i>
//   </button>
//   <div class="dropdown-content">
//     <a href="#">Link 1</a>
//     <a href="#">Link 2</a>
//     <a href="#">Link 3</a>
//   </div>
// </div>
  return (
    <div
      style={{ backgroundColor: `${color}`}}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300 font-sans font-thin tracking-wider'
    >
      <div className='w-screen  m-auto flex justify-between items-center p-2 text-white'>
        <Link href='/'>
          {/* style={{ color: `${textColor}` }} */}
          <Image src={'/assets/idea-logo.png'} width={200} height={100} />
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          {/* <li className='p-4'>
            <Link href='/'>Home</Link>
          </li> */}
          <li className='p-4'>
          <div className="dropdown inline-block relative">
          <button className="inline-flex items-center">
            <span className="mr-1">About</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 text-center">
            <li className="bg-slate-300/50 hover:bg-slate-600/50 hover:text-[#f5f5f5] ml-[-25px] rounded-xl">
              <Link className="p-2 block mb-1" href={'/#about'}>About Us</Link>
            </li>
            <li className="bg-slate-300/50 hover:bg-slate-600/50 hover:text-[#f5f5f5] ml-[-30px] rounded-xl">
              <Link className="p-2 block" href={'/#about'}>Our Team</Link>
            </li>
          </ul>
        </div>
          </li> 
          <li className='p-4'>
            <Link href='/#projects'>Projects</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Services</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Clients</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Culture</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        {/* <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div> */}
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>Gallery</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/work'>Work</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;