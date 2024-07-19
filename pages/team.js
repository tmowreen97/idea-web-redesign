import react from "react";
import OurTeam from "@/components/OurTeam";
import Navbar from "@/components/Navbar";

export default function Team (){
  return(
    <div>
      <Navbar customText={'#323b1e'} greenLogo={true}/>
      <OurTeam/>
    </div>
    
  )
}
