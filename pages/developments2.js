import Navbar from "@/components/Navbar";
import Developments_2 from "@/components/Developments2";
import { useState } from "react";


export default function Developments(){
  const [showDropDown, setShowDropDown] = useState(false)
  function handleClick(){
    console.log('in here!')
    if (showDropDown) {
      setShowDropDown(false)
    }
  }

  return(
    <div onClick={()=> handleClick()}>
      <Navbar customText={'#323b1e'} greenLogo={true}/>
      <Developments_2 showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
    </div>
  )
}