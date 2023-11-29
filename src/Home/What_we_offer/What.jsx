import React from "react";
import "./What.css";
import "../../style.css";
import { FcAssistant } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcLibrary } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const What = () => {
  return (
    <div className="what_mainContainer">
      <div className=" what_headText">What We Offer</div>
      <div className="what_gridContainer">
        <div className="what_grid1">
          {/* card start */}
          <div data-aos="fade-right" className="what_card1 card1">
            <div className="what_card1_div1">
              <div className="what_cardText1">Step 1</div>
            </div>
            <div className="what_card1_div2">
              <div className="what_card_headtext">Counselling</div>
              <div className="what_card_subtext">
                At Beyound Bharat Counsultancy, we believe in a tailored
                approach to your study abroad dreams. Our AI-driven counseling
                sessions are more than just guidance; they're stepping stones to
                your ideal academic and career path, uniquely suited to your
                aspirations and profile.
              </div>
            </div>
          </div>
          {/* card end */}

          {/* card start */}
          <div
            data-aos-delay="100"
            data-aos="fade-right"
            className="what_card1 color2 car2"
          >
            <div className="what_card1_div1 color2div">
              <div className="what_cardText1">Step 2</div>
            </div>
            <div className="what_card1_div2">
              <div className="what_card_headtext color2text"> Coaching</div>
              <div className="what_card_subtext">
                Unlock your potential with our specialized coaching for IELTS,
                Duolingo, and PTE. Our expert instructors, combined with
                cutting-edge AI tools, ensure you're not just prepared, but
                primed for success.
              </div>
            </div>
          </div>
          {/* card end */}

          {/* card start */}
          <div
            data-aos-delay="200"
            data-aos="fade-right"
            className="what_card1 ca33"
          >
            <div className="what_card1_div1">
              <div className="what_cardText1">Step 3</div>
            </div>
            <div className="what_card1_div2">
              <div className="what_card_headtext">
                University and Course Selection
              </div>
              <div className="what_card_subtext">
                Navigate the maze of global education with ease. Our direct
                university partnerships and insightful AI analytics empower you
                to make informed decisions about your university and course
                selection, perfectly aligning with your career goals.
              </div>
            </div>
          </div>
          {/* card end */}
        </div>
        <div className="what_grid1">
          {/* card start */}
          <div
            data-aos-delay="400"
            data-aos="fade-right"
            className="what_card1 color2 cd44"
          >
            <div className="what_card1_div1 color2div">
              <div className="what_cardText1">Step 4</div>
            </div>
            <div className="what_card1_div2">
              <div className="what_card_headtext color2text">
                {" "}
                Document Preparation
              </div>
              <div className="what_card_subtext">
                Crafting compelling documents is our forte. From SOPs to
                recommendation letters, our team ensures each document is a
                reflection of your unique journey, professionally polished to
                stand out in the competitive admissions landscape.
              </div>
            </div>
          </div>
          {/* card end */}

          {/* card start */}
          <div
            data-aos-delay="500"
            data-aos="fade-right"
            className="what_card1 ardd5"
          >
            <div className="what_card1_div1">
              <div className="what_cardText1">Step 5</div>
            </div>
            <div className="what_card1_div2">
              <div className="what_card_headtext">Visa Support</div>
              <div className="what_card_subtext">
                Simplify your visa application process with our comprehensive
                support. Our experience and attention to detail ensure a smooth,
                stress-free journey from application submission to visa
                approval.
              </div>
            </div>
          </div>
          {/* card end */}

          {/* card start */}
          <div
            data-aos-delay="600"
            data-aos="fade-right"
            className="what_card1 color2 rd6"
          >
            <div className="what_card1_div1 color2div">
              <div className="what_cardText1">Step 6</div>
            </div>
            <div className="what_card1_div2">
              <div className="what_card_headtext color2text">
                {" "}
                Pre and Post Application Support
              </div>
              <div className="what_card_subtext">
                Our commitment to your academic journey extends beyond
                applications. From pre-application planning to post-admission
                procedures, we provide continuous support, ensuring you're
                confidently prepared for every step of your study abroad
                experience.
              </div>
            </div>
          </div>
          {/* card end */}
        </div>
      </div>
    </div>
  );
};

export default What;
