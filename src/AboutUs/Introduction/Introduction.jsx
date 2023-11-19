import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { LiaPassportSolid } from 'react-icons/lia';
import './Introduction.css'
const introauduction = () => {
  return (
    <>
     <div className="introau_mainContainer">
        <div className="introau_textContainer">
          <div className="introau_headText">
           About Us
          </div>
          <div className="introau_seoText"> 
           <AiOutlineHome className='introau_icon' />  &nbsp; Home  &nbsp;
           <BsArrowRightShort/>  &nbsp; About Us
          </div>
        </div>
    </div>
    </>
  )
}

export default introauduction