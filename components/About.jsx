import Image from 'next/image';
import React, { useState } from 'react';
// import { SliderData } from './SliderData';
// import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const About = () => {

  return (
    <div id='about' className='max-w-[1240px] mx-auto'>
      <div className='relative flex justify-center p-4'>
        <div className="about__parent ">
          <div className="about__title mr-5 ">
            <h1 className="md:text-[1200%] text-5xl tracking-wide text-center">About</h1>
          </div>
          <div className="about__child1 p-10 bg-slate-200/20 rounded-xl mx-5 h-[95%]">
            <h1 className="text-4xl">Our Mission</h1>
            <p className="tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="about__child2 p-10 bg-slate-200/20 rounded-xl m-5 ">
            <h1 className="text-4xl">Our Story</h1>
            <p className="tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className="about__img bg-purple-600 items-center justify-center p-5 bg-slate-200/20 rounded-xl m-5 motion-safe:animate-pulse hover:animate-none">
            <Image src={'/assets/group-photo.jpg'} width={500} height={90}/>
          </div>
        </div>
    </div>
    </div>
  );
};

export default About;