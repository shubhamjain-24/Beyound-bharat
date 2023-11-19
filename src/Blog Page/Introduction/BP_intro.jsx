import React from 'react'
import { FaBloggerB } from "react-icons/fa";
import { AiOutlineHome } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import './BP_intro.css'
const BP_intro = () => {
  return (
   <>
   <div className="introbp_mainContainer">
       <div className="introbp_textContainer">
         <div className="introbp_headText">
         Blogs
         </div>
         <div className="introbp_seoText"> 
          <AiOutlineHome className='introbp_icon' />  &nbsp; Home  &nbsp;
          <BsArrowRightShort/>  &nbsp; < FaBloggerB/> &nbsp; Blogs
         </div>
       </div>
   </div>
   </>
  )
}

export default BP_intro