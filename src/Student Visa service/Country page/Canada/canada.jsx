import React from 'react'
import './canada.css'
import img1 from '../../../Images/canadastudy.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const canada = () => {
  return (
    <>
        <div className="canada_mainContainer">
        <div className="canada_flexContainer">
            <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" 
             className="canada_flexDiv1 cana">
                <div className="canada_headText">
                Study in Canada
                </div>
                <div className="canada_headText2">
                Renowned for its inclcanadaive society and top-tier colleges, Canada remains a prime destination for international students. Our hands-on experience ensures every detail is noticed in your study permit application.
                </div>
                <ul className="canada_list">
                    <li className="canada_listContent"> <span className='ul_boldText'>Eligibility Evaluation:   </span>&nbsp;	We'll conduct a thorough review of your profile against Canadian immigration requirements, ensuring your eligibility is clear-cut.</li>
                    <li className="canada_listContent">	
                    <span className='ul_boldText'>	Comprehensive Application Support  </span>&nbsp;
                    Our team's diligent approach to your application will encompass everything from your acceptance letter to proof of financial support.</li>
                    <li className="canada_listContent">
                    <span className='ul_boldText'>Post-Approval Guidance:  </span> &nbsp;
                     We provide a full spectrum of support, including advice on adapting to Canadian culture and the cold!
                    </li>
                </ul>
            </div>
            <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"  className="canada_flexDiv2 canada2">
                <img src={img1} alt="" className="canadaImage" />
            </div>
        </div>
    
    </div>
    </>
  )
}

export default canada