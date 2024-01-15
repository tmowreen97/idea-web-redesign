import react from "react"
import Image from 'next/image';

function Intro(){
  return(
    <div id='about' className='w-screen h-full bg-primary font-thin text-primary_text tracking-widest '>
      <div className="py-2 justify-center items-center">
        <div className="xl:p-20 p-10">
          <div className="xl:flex items-center justify-center">
            <div>
              <h1 className="xl:text-5xl xl:leading-[60px] text-2xl">Now providing World Class Inter-Disciplinary Engineering and Construction services to collaborating partners in Bangladesh.</h1>
            </div>
            <div className="items-center flex justify-center max-w-[800px]">
              <Image src={'/assets/logos/logo-cropped.gif'} width={1700} height={100}/>
            </div>
          </div>
      </div>
      <div className="xl:px-20 px-10 py-10">
        <div className="flex justify-right">
          <h1 className="xl:text-7xl text-2xl">Introducing <span className="text-red_text font-semibold xl:text-8xl text-3xl tracking-tight text-shadow shadow-dark_red">IDEA csc</span> (US IDEA CSC (PVT.) LTD.), a Sister Company of IDEA aec (USA).</h1>
        </div>
      </div>
      </div>
      
    </div>
    
  )
}

export default Intro