import react from "react"
import Image from 'next/image';

function Intro(){
  return(
    <div className='w-screen h-full bg-primary font-thin text-primary_text tracking-widest '>
      <div className="py-10">
        <div className="p-20">
        <div className="flex items-center justify-evenly">
          <div >
            <h1 className="text-5xl leading-[60px]">Now providing World Class Inter-Disciplinary Engineering and Construction services to collaborating partners in Bangladesh.</h1>
          </div>
          <div className="m-5">
            <Image src={'/assets/logos/Mechanicaltransparent cropped.gif'} width={2000} height={100}/>
          </div>
        </div>
      </div>
      <div className="px-20 py-10">
        <div className="flex items-center justify-center align-middle">
        <h1 className="text-7xl ">Introducing <span class="text-red_accent font-semibold text-8xl tracking-tight">IDEA csc</span> (US IDEA CSC (PVT.) LTD.), A Sister Company of IDEA aec (USA).</h1>
      </div>
      </div>
      </div>
      
    </div>
    
  )
}

export default Intro