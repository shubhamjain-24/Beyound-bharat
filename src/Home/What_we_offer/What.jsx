import React from 'react'
import "./What.css";
import "../../style.css";
import { FcAssistant } from 'react-icons/fc';
import { FcDocument } from 'react-icons/fc';
import { FcVoicePresentation } from 'react-icons/fc';
import { FcLibrary } from 'react-icons/fc';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const What = () => {
    
  return (
    <div className="what_mainContainer">
         <div className=" what_headText">
         What We Offer
         </div>
        <div className="what_gridContainer">
            {/* div 1 */}
            
            <div data-aos="flip-left"  data-aos-delay="150"  data-aos-duration="650"className="what_grid1">
                
                <div className="what-grid_icon">
                    <FcAssistant/>
                </div>
                <div className="what_grid_headText">
                Visa Application Assistance
                </div>
                <div className="what_grid_subText">
                Navigate the maze of student visas with our expert guidance, ensuring a smooth application process.
                </div>
            </div>
            {/* div 2 */}
            <div data-aos="flip-left" data-aos-delay="300" data-aos-duration="650" className="what_grid1 wnewclass">
                <div className="what-grid_icon">
                    <FcDocument/>
                </div>
                <div className="what_grid_headText">
                Document Preparation
                </div>
                <div className="what_grid_subText">
                Benefit from our experience in crafting authentic and impactful personal statements, resumes, and letters of recommendation.
                </div>
            </div>
            {/* div 3 */}
            <div data-aos="flip-left" data-aos-duration="650" data-aos-delay="450" className="what_grid1 wnewclass2">
                <div className="what-grid_icon">
                    <FcLibrary/>
                </div>
                <div className="what_grid_headText">
                University and Course Selection
                </div>
                <div className="what_grid_subText">
                We match your ambitions with the ideal universities and courses, enhancing your prospects for success.
                </div>
            </div>
            {/* div 4 */}
            <div data-aos="flip-left" data-aos-duration="650" data-aos-delay="600"  className="what_grid1 wne3">
                <div className="what-grid_icon">
                    <FcVoicePresentation/>
                </div>
                <div className="what_grid_headText">
                Pre- and Post-Arrival Support
                </div>
                <div className="what_grid_subText">
                From cultural adjustment to finding accommodation, we're here to assist you at every stage.
                </div>
            </div>
        </div>
    </div>
  )
}

export default What