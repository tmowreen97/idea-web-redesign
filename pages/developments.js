import DevelopmentsPage from "@/components/DevelopmentsPage";
import Navbar from "@/components/Navbar";

export default function Developments(){
  return(
    <div>
      <Navbar customText={'#323b1e'} greenLogo={true}/>
      <DevelopmentsPage/>
    </div>
  )
}