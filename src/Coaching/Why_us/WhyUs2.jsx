import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import img1 from '../../Images/whyus.png'
import './WhyUs2.css'
import { NavLink } from 'react-router-dom';
const WhyUs2 = () => {
  return (
    <div className="whyu2_mainContainer">
        <div className="whyu2_flexContainer">
            <div className="whyu2_flex1">
                <div className="whyu2_textDiv">
                    <div className="whyu2_headText">
                    Why Choose Us?
                    </div>
                    <div className="whyu2_subText">
                       <span className='whyu-subtextarrow'>< AiOutlineSend/> &nbsp;&nbsp;&nbsp;&nbsp;</span>
                       Personalized Coaching: Tailored study plans and flexible scheduling to accommodate your unique learning pace and style.
                    </div>
                    <div className="whyu2_subText">
                       <span className='whyu-subtextarrow'>< AiOutlineSend/> &nbsp;&nbsp;&nbsp;&nbsp;</span>
                       	Experienced Instructors: A team of seasoned educators with a track record of success in helping students achieve their desired test scores.
                    </div>
                    <div className="whyu2_subText">
                     <span className='whyu-subtextarrow'>< AiOutlineSend/> &nbsp;&nbsp;&nbsp;&nbsp; </span>  	Resource-Rich Learning: Access to extensive learning materials, practice tests, and state-of-the-art online platforms.
                    </div>
                    <div className="whyu2_subText">
                     <span className='whyu-subtextarrow'>< AiOutlineSend/> &nbsp;&nbsp;&nbsp;&nbsp; </span>  	End-to-End Support: From initial counselling to pre-departure orientation, we’re with you at every step of your international education journey.
                    </div>
                    <NavLink className="Navlink" to="/contactUs">
                    <div className="whyu2_button">
                        Get in touch now!
                    </div>
                    </NavLink>
                </div>
            </div>
            <div className="whyu2_flex2">
                <img src={img1} alt="" className="whyu2_image" />
            </div>
        </div>
    </div>
  )
}

export default WhyUs2