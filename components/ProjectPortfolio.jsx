import { useState } from "react";
import Image from "next/image";
import PortfolioList from "./PortfolioList";
import {BsChevronCompactDown} from 'react-icons/bs';

function ProjectPortfolio(){
  const [category, setCategory] = useState('All')
  const [projHover, setProjHover] = useState(false)
  const [projClick, setProjClick] = useState(false)
  console.log(category)

  function mouse (){
    setProjHover(true)
    myStopFunction();
    myFunction();
  }
  function myFunction() {
    let myVar = setTimeout(function(){
        setProjHover(false)
      }, 2500);
  }   
  function myStopFunction() {
      if(typeof myVar != 'undefined'){
          clearTimeout(myVar);
      }
  }


  // if id is odd, open the description div to the right
  //  if id is even, open the description div to the left
  const projects = [
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/miami-terminal.avif'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/miami-terminal.avif'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/miami-terminal.avif'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/miami-terminal.avif'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/miami-terminal.avif'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/miami-terminal.avif'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/miami-terminal.avif'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/miami-terminal.avif'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/miami-terminal.avif'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/miami-terminal.avif'
    }
  ]


  return(
    <div className="w-screen h-full bg-[#DAD3DF]">
      <div className="p-20">
        <h1 className="md:text-[1100%] text-5xl font-thin text-[#625a81] text-left tracking-wide">Portfolio</h1>
      </div>
      <div>
      <div className="text-right mr-20">
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value)
          }}
          className="text-center"
        >
          <option value="all">All</option>
          <option value="residence">Residences</option>
          <option value="c">c</option>
          <option value="d">d</option>
          <option value="residence">Residences</option>
          <option value="c">c</option>
          <option value="d">d</option>
          <option value="d">d</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 mx-20 py-10">
        {
          projects.map((proj)=> {
            return(
              <PortfolioList project={proj} setProjClick={setProjClick} setProjHover={setProjHover}
              projClick={projClick} projHover={projHover} mouse={mouse}/>
            )
          })
        }


      </div>
      </div>

    </div>
  )
}

export default ProjectPortfolio;