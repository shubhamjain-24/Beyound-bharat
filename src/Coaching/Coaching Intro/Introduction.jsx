import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import {  FaBookReader } from 'react-icons/fa';
import './Introduction.css'
const Introduction = () => {
  return (
    <>
    <div className="introcs_mainContainer">
       <div className="introcs_textContainer">
         <div className="introcs_headText">
         Coaching Service
         </div>
         <div className="introcs_seoText"> 
          <AiOutlineHome className='introcs_icon' />  &nbsp; Home  &nbsp;
          <BsArrowRightShort/>  &nbsp; < FaBookReader/> &nbsp; Coaching
         </div>
       </div>
   </div>
   </>
  )
}

export default Introduction