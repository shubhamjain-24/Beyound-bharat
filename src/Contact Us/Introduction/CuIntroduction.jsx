import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { MdContactPhone } from 'react-icons/md';
import './CuIntroduction.css'
const CuIntroduction = () => {
  return (
    <>
     <div className="introcu_mainContainer">
        <div className="introcu_textContainer">
          <div className="introcu_headText">
          Contact Us
          </div>
          <div className="introcu_seoText"> 
           <AiOutlineHome className='introcu_icon' />  &nbsp; Home  &nbsp;
           <BsArrowRightShort/>  &nbsp; <MdContactPhone/> &nbsp; Contact Us
          </div>
        </div>
    </div>
    </>
  )
}

export default CuIntroduction