import ContactPage from "@/components/ContactPage";
import Navbar from "@/components/Navbar";

export default function Contact (){
  
  return(
    <div>
      <Navbar customText={'#323b1e'} greenLogo={true}/>
      <ContactPage/>
    </div>
  )
}