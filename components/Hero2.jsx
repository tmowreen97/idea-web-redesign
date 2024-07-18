import Link from "next/link";

function Hero2(){

  function handleClick(){
    return(
      console.log('clicked')
    )
  }
  return(
    <main id='main' className='h-screen'>
      <div id='intro-contents' className=''>
          <div id='intro_button' className='z-[9]'>
            <Link href={'/#about'} id='intro-button-link' className=' bg-primary hover:bg-button_shadow/90 hover:animate-none rounded-lg p-3 motion-safe:animate-pulse md:text-base text-sm'>Click Here to Enter Site</Link>
          </div>
      </div>
      <video
          src={require("public/EEFI-video-trimmed.mp4")}
          autoPlay
          muted
          loop
          playsInline
          id='video'
      />
  </main>
    // <div id='main' className='w-screen h-screen'>
    //   <div className='relative'>
    //     <video src={require("public/EEFI-video-trimmed.mp4")} autoPlay muted loop id='video'/>
    //     <div >
    //       <div className='' id='intro_button'>
    //         <Link href={'/#about'} className=' bg-primary hover:bg-button_shadow/90 hover:animate-none rounded-lg p-3 motion-safe:animate-pulse'>Click Here to Enter Site</Link>
    //       </div>
          
    //     </div>
    //   </div>
    //   {/* <button>Continue to Site</button> */}
    // </div>
  )
}

export default Hero2;