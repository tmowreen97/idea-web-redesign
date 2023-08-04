import React from "react";

export default function Footer(){
  return(
    <div id='footer' className="w-screen h-[450px]  bg-[#301b3d]">
      <div className="flex items-center justify-center pt-[80px]">
        <div className=" grid grid-cols-2 gap-14 ml-10 ">
          <div className="items-center justify-center pt-[20px] text-[#F5F5F5] text-2xl font-light" >
            <h1 className="py-2 text-4xl">Idea AEC</h1>
            <h1 className="py-2 ">Inter-Disciplinary Engineering Associates, LLC</h1>
            <h1 className="py-2">Architectural Engineering Consultants</h1>
            <p>1 Botsford Hill Rd
              Botsford, CT 06404

              Info@IdeaAEC.com

              203-917-7907</p>
            <p className="">©Idea</p>
          </div>
          <div className=" mx-10 pt-[25px]">
          <div className="bg-white/50 w-[500px] h-[200px] rounded-xl ">
            <div className="items-center justify-center ">
              <form className="text-center">
                <h2>Contact Us</h2>
                <div className="m-2">
                  {/* <label>Name:</label> */}
                  <input type="name" className="w-[300px] rounded-xl text-center" placeholder="Name"/>
                </div>
                <div className="m-2">
                  {/* <label>Email:</label> */}
                  <input type="email" className="w-[300px] rounded-xl text-center" placeholder="Email"/>
                </div>
                <div className="m-2">
                  {/* <label>Message:</label> */}
                  <textarea type="text" className="w-[300px] rounded-xl text-center" placeholder="Message"/>
                </div>
              </form>
            </div>
            
          </div>
          
        </div>
          
        </div>
        
      </div>
    </div>
  )
}

