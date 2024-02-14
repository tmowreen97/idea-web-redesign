import {useState, React} from 'react'

import { motion } from 'framer-motion';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";
const Translate = ({setEnglish, english}) => {

  const [show, setShow] = useState(false)
  const [hide, setHide] = useState(true)
  function handleExt(){
    setShow(!show)
    setHide(!hide)
  }

  function handleLanguage(){
    setEnglish(!english)
  }


  return (
    <div>
        <motion.div 
        animate={{
          backgroundColor:show ? '' : '#63a081',
          transition:{
            duration:1
          },
        }}
        className='text-primary_text flex w-fit rounded-lg'>
          <div 
          onClick={() => {handleExt()}}
          className=' rounded-lg w-fit flex items-center justify-center bg-accent_3 cursor-pointer p-3' >
            {
              !show ? 
              <MdKeyboardDoubleArrowLeft  
              className='text-2xl'/> :
              <MdKeyboardDoubleArrowRight 
              className='text-2xl'/>
            }
          </div>
          
          <motion.div 
          animate={{
            opacity: show ? [0.5,0] : 1,
            x: show ? -10 : 0
          }}
          initial={{
            opacity:0 , x:-50
          }}
          // whileInView={{
          //   opacity: show ? 1 :0,
          // }}
          
          transition={{duration:1}}
          className='p-4 items-center justify-center bg-accent_3 rounded-lg flex'>
            <div className='items-center m-2'>
              <p className=''>Would you like to change the language?</p>
              <div className='flex items-center justify-center'>
                <p className='m-2'>English</p>
                <div onClick={()=> handleLanguage()} className='text-2xl cursor-pointer'>
                  {english ? <FaToggleOff className='m-2'/> : <FaToggleOn className='m-2'/>}
                </div>
                <p className='m-2'>Bangla</p>
              </div>
            </div>
            

          </motion.div>
        </motion.div>
        
      </div>
  )
}

export default Translate