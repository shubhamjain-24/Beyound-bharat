import React from 'react'
import './Introduction.css'
import { AiOutlineHome } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { LiaPassportSolid } from 'react-icons/lia';

const Introduction = () => {
  return (
    <>
    <div className="intro_mainContainer">
        <div className="intro_textContainer">
          <div className="intro_headText">
            Student Visa
          </div>
          <div className="intro_seoText"> 
           <AiOutlineHome className='intro_icon' />  &nbsp; Home  &nbsp;
           <BsArrowRightShort/>  &nbsp;  <LiaPassportSolid/>  &nbsp;Student Visa
          </div>
        </div>
    </div>
    </>
  )
}

export default Introduction