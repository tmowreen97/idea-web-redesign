import Navbar from "@/components/Navbar";
import ServicesPage from "@/components/ServicesPage";
import React from "react";

export default function Services(){
  return (
    <div>
      <Navbar customText={'#323b1e'} greenLogo={true}/>

      <ServicesPage/>
    </div>
  )
}