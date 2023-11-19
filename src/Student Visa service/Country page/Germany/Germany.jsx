import React from 'react'
import './Germany.css'
import img1 from '../../../Images/germanystudy.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Germany = () => {
  return (
    <>
    <div className="germany_mainContainer">
        <div className="germany_flexContainer">
            <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"   className="germany_flexDiv1 germ">
                <div  className="germany_headText ">
                Study in Germany
                </div>
                <div className="germany_headText2">
                Germany's tuition-free universities are an academic magnet. Over our five-year tenure, we've helped countless students understand the nuances of German literary culture and visa requirements.
                </div>
                <ul className="germany_list">
                    <li className="germany_listContent"> <span className='ul_boldText'>Course and University Selection:  </span>&nbsp;	Our expertise extends to aligning your academic aspirations with the right German institutions, enhancing visa approval chances.</li>
                    <li className="germany_listContent">	
                    <span className='ul_boldText'>Comprehensive Application Support </span>&nbsp;
                    Our team's diligent approach to your application will encompass everything from your acceptance letter to proof of financial support.</li>
                    <li className="germany_listContent">
                    <span className='ul_boldText'>Post-Approval Guidance:  </span> &nbsp;
                    We provide a full spectrum of support, including advice on adapting to Canadian culture and the cold!
                    </li>
                </ul>
            </div>
            <div  data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"  className="germany_flexDiv2 germandiv">
                <img src={img1} alt="" className="germanyImage" />
            </div>
        </div>
    
    </div>
    </>
  )
}

export default Germany