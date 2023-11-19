import React from "react";
import "./Trust.css";
import { FcApproval } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Trust = () => {
  return (
    <>
      <div className="trust_mainContainer">
        <div className="trust_textContainer">
          <div className="trust_headText">
            Why Trust Beyond Bharat Consultancy?
          </div>
          <div className="trust_subText">
            Take the first step on your international academic journey. Reach
            out to Beyond Bharat Consultancy and let our years of experience
            pave the way to your study abroad success. we offer a suite of
            documentation support, including crafting original statements of
            purpose, letters of recommendation, resumes, and offer letters, all
            with a strict &nbsp;
            <span className="trust_boldText">no-plagiarism policy.</span>
          </div>
        </div>
        <div className="trust_cardContainer">
            {/* div */}
          <div data-aos="flip-left"  data-aos-delay="150"  data-aos-duration="650" className="trust_div1 thrust">
            <div  className="trust_cardiconDiv">
              <FcApproval className="trust_cardicon" />
            </div>
            <div className="trust_cardTextDiv">
              <div className="trust_cardHeadText">Proven Track Record</div>
              <div className="trust_cardSubText">
                Five years of successful visa procurements have honed our
                expertise.
              </div>
            </div>
          </div>
            {/* div */}
          <div data-aos="flip-left"  data-aos-delay="150"  data-aos-duration="650" className="trust_div1 trust">
            <div className="trust_cardiconDiv">
              <FcAssistant className="trust_cardicon" />
            </div>
            <div className="trust_cardTextDiv">
              <div className="trust_cardHeadText">Bespoke Support</div>
              <div className="trust_cardSubText">
              We pride ourselves on the individualized approach we take for every student, recognizing the uniqueness of their journey.
              </div>
            </div>
          </div>
            {/* div */}
          <div data-aos="flip-left"  data-aos-delay="150"  data-aos-duration="650" className="trust_div1 truth">
            <div className="trust_cardiconDiv">
              <FcBullish className="trust_cardicon" />
            </div>
            <div className="trust_cardTextDiv">
              <div className="trust_cardHeadText">Exemplary Success Rate</div>
              <div className="trust_cardSubText">
              Our history is rich with tales of visa triumphs, a testament to our dedication and skill.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trust;
