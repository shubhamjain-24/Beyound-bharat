import React from 'react'
import './Us.css'
import img1 from '../../../Images/usstudy.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Us = () => {
  return (
    <>
        <div className="us_mainContainer">
        <div className="us_flexContainer">
            <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className="us_flexDiv1 uscla">
                <div className="us_headText">
                Study in USA
                </div>
                <div className="us_headText2">
                From the ivy-covered walls of the Ivy Leagues to the innovation hubs of Silicon Valley, the USA is a beacon for scholars. We demystify the F-1, J-1, and M-1 visa processes, backed by years of successful applications.
                </div>
                <ul className="us_list">
                    <li className="us_listContent"> <span className='ul_boldText'>SEVIS Guidance:  </span>&nbsp;	Our team helps you with the SEVIS I-901 fee payment and provides insights into maintaining your status.</li>
                    <li className="us_listContent">	
                    <span className='ul_boldText'>Documentation Review:  </span>&nbsp;
                    With attention to detail, we ensure your documentation demonstrates ties to your home country and financial readiness.</li>
                    <li className="us_listContent">
                    <span className='ul_boldText'>Visa Interview Coaching:  </span> &nbsp;
                    We know what US consulates want. Our mock interviews are designed to make you a standout candidate.
                    </li>
                </ul>
            </div>
            <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className="us_flexDiv2 usclass">
                <img src={img1} alt="" className="usImage" />
            </div>
        </div>
    
    </div>
    </>
  )
}

export default Us