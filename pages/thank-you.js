import Navbar from "@/components/Navbar";
import ThankYou from "@/components/ThankYou";

export default function Thanks(){
  return(
    <div>
      <Navbar customText={'#323b1e'} greenLogo={true}/>

      <ThankYou/>
    </div>
  )
}