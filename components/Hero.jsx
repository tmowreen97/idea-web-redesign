import React from 'react';

const Hero = ({heading, message}) => {
  return (
    <div className='flex relative items-center justify-center w-screen h-screen pt-12 bg-fixed bg-center bg-cover custom-img tracking-wider'>
      {/* Overlay */}
      {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' /> */}
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-9xl absolute font-thin left-5 bottom-5'>{heading}</h2>

        {/* <button className='px-8 py-2 border'>Book</button> */}
      </div>
    </div>
  );
};

export default Hero;