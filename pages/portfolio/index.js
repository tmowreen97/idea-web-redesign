import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"
import { useState } from "react"


// This contains all of the projects no category selected
export default function Portfolio(){
  const [showDropDown, setShowDropDown] = useState(false)
  function handleClick(){
    if (showDropDown) {
      setShowDropDown(false)
    }
  }
    
  const projects = [
    // MSC
    {
      name: 'C23-01',
      heading: ['NEED HEADING'],
      location: 'NEED LOCATION',
      size: 'NEED SIZE',
      year: 'NEED YEAR',
      services: [
        'NEED LIST OF SERVICES'
      ],
      description: [
        '5-STORY RESIDENTIAL BUILDING',
      ],
      resources: [
        {
          title: 'MSC Cruises',
          url: 'https://www.msccruisesusa.com/news/new-cruise-terminal-miami', 
        },
      ],
      image: '/assets/need.jpeg',
      width: '700',
      height: '600',
      disclaimer: "",
      spacing: "relative lg:top-12 top-3",

    },
    // EEFI
    {
      name: 'C24-01',
      heading: ['NEED HEADING'],
      location: 'NEED LOCATION',
      size: 'NEED SIZE',
      year: 'NEED YEAR',
      services: [
        'NEED LIST OF SERVICES'
      ],
      description: [
        'BD HIGH-END RESIDENCE'
      ],
      resources: [
        {
          title: 'East End Food - Food Hub',
          url: 'https://www.eastendfood.org/food-hub', 
        },
      ],
      image: '/assets/need.jpeg',
      images_array: [
        {
          title: 'eefi-1',
          image: '/assets/need.jpeg'
        },
        {
          title: 'eefi-2',
          image: '/assets/need.jpeg'
        }
        
      ],
      width: '700',
      height: '100',
      disclaimer: "",
      spacing: "relative lg:top-12 top-3",
    },
    // KHAIR
    {
      name: 'C24-02',
      heading: ['NEED HEADING'],
      location: 'NEED LOCATION',
      size: 'NEED SIZE',
      year: 'NEED YEAR',
      services: [
        'NEED LIST OF SERVICES'
      ],
      description: [
        'IDEA COMMUNITY COMPLEX'
      ],
      image: '/assets/need.jpeg',
      images_array: [
        {
          title: 'khair-1',
          image: '/assets/need.jpeg'
        },
        {
          title: 'khair-2',
          image: '/assets/need.jpeg'
        }
        
      ],
      width: '700',
      height: '400',
      disclaimer: ""
    },
  ]
  

  return(
    <div onClick={()=> handleClick()}>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'Choose A Sector'} showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
    </div>
  )
}