import React from "react";
import "./Section4.css";
import { FaGraduationCap } from "react-icons/fa";
import { AiFillFile } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Section4 = () => {
  return (
    <>
      <div className="s4_mainContainer">
        <div className="s4_flexContainer">
          {/* div 1 */}
          <div data-aos="flip-left" style={{ marginTop: "20px" }} className="s4_div1 s4sdzg ">
            <div className="s4_div1_main">
              <div className="s4_div1_subbox s4_divcolor">
                <div className="s4_div1_headText ">
                  <AiFillFile />
                </div>
              </div>
              <div className="s4_div1_subText1 s4_textcolor">
                Visa Application Assistance
              </div>
              <div className="s4_div1_subText2">
                Our seasoned visa consultants are here to:
                <br />
                <div style={{ marginTop: "10px" }}>
                  • Offer up-to-date information on visa requirements and
                  processes. <br />
                  • Assist in compiling and reviewing all necessary
                  documentation.
                  <br />
                  • Provide support in filling out and submitting your visa
                  application.
                  <br />• Conduct mock interviews and prepare you for the visa
                  interview process.
                </div>
              </div>
            </div>
          </div>
          {/* div 2 */}
          <div data-aos="flip-left" style={{ marginTop: "20px" }} className="s4_div1 di">
            <div className="s4_div1_main">
              <div className="s4_div1_subbox">
                <div className="s4_div1_headText ">
                  <FaGraduationCap />
                </div>
              </div>
              <div className="s4_div1_subText1 ">Admission Guidance</div>
              <div className="s4_div1_subText2">
                Navigate the complexities of international university admissions
                with our comprehensive guidance services. We help you:
                <div style={{ marginTop: "10px" }}>
                  • Identify the best courses and institutions aligned with your
                  career goals.
                  <br />
                  • Understand the prerequisites and admission standards of your
                  chosen universities.
                  <br />
                  • Craft compelling personal statements and essays that stand
                  out.
                  <br />• Prepare for interviews with confidence and composure.
                </div>
              </div>
            </div>
          </div>
          {/* div 7 */}
        </div>
      </div>
    </>
  );
};

export default Section4;
