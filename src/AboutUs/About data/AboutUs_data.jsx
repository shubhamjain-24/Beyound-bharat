import React from "react";
import "./AboutUs_data.css";
import { BsDot } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const AboutUs_data = () => {
  return (
    <>
      <div className="abdata_mainContainer">
        <div className="abdata_flexContainer">
          {/* div 1 */}
          <div data-aos="flip-left" className=" abdata_div1 div1uoyi">
            <div className="abdata_div1_main">
              <div className="abdata_div1_subbox">
                <div className="abdata_div1_headText">1</div>
              </div>
              <div className="abdata_div1_subText1">Our Mission</div>
              <div className="abdata_div1_subText2">
                To empower students from all corners of the globe to achieve
                their academic dreams by providing unparalleled guidance and
                support through the complexities of studying abroad. We strive
                to be the key that unlocks the full potential of every student
                we serve.
              </div>
            </div>
          </div>
          {/* div 1 */}
          {/* div 2 */}
          <div data-aos="flip-right" className="abdata_div1 div2cxzx">
            <div className="abdata_div1_main">
              <div className="abdata_div1_subbox abdata_divcolor">
                <div className="abdata_div1_headText ">2</div>
              </div>
              <div className="abdata_div1_subText1 abdata_textcolor">
                Our Vision
              </div>
              <div className="abdata_div1_subText2">
                To be the gold standard in study abroad consultancy, recognized
                for our integrity, innovative approaches, and the success
                stories of the countless students who've embarked on their
                educational journeys with us.
              </div>
            </div>
          </div>
          {/* div 2 */}
          {/* div 3 */}
          <div data-aos="flip-left" className="abdata_div1 div3pwe">
            <div className="abdata_div1_main">
              <div className="abdata_div1_subbox abdata_divcolor">
                <div className="abdata_div1_headText ">3</div>
              </div>
              <div className="abdata_div1_subText1 abdata_textcolor">
                Our Commitment
              </div>
              <div className="abdata_div1_subText2">
                Every student's journey is unique, and we commit to honouring
                that individuality with bespoke counselling and support. We take
                pride in our track record of success and the trust we've built
                with students and parents alike.
              </div>
            </div>
          </div>
          {/* div 3 */}
          {/* div 4 */}
          <div data-aos="flip-right" className="abdata_div1 div4dad">
            <div className="abdata_div1_main">
              <div className="abdata_div1_subbox ">
                <div className="abdata_div1_headText ">4</div>
              </div>
              <div className="abdata_div1_subText1 ">Our Experties</div>
              <div className="abdata_div1_subText2">
                At Beyond Bharat Consultancy expertise is more than just
                experience—a blend of profound industry knowledge, cultural
                insight, and a personalized touch. Our team, comprising seasoned
                counsellors and visa specialists, has a deep understanding of
                international education systems, visa regulations, and the
                nuances of cross-cultural transition.
              </div>
            </div>
          </div>
          {/* div 4 */}
        </div>
        {/* div 5 */}
        <div data-aos="flip-left" className="abdata_div1 abdatadiv5 div5skf">
          <div className="abdata_div1_main">
            <div className="abdata_div1_subbox ">
              <div className="abdata_div1_headText ">5</div>
            </div>
            <div className="abdata_div1_subText1 ">Our Services</div>
            <div className="abdata_div5_flex">
              <div className="abdata_div1_subText2 abdataflexdiv1">
                <div className="abdata_listText">
                  <span className="abdata_boldtext">
                    1. Comprehensive Visa Assistance:
                  </span>{" "}
                  From application to approval, we guide you through every step
                  with precision and care.
                </div>
                <div className="abdata_listText">
                  <span className="abdata_boldtext">
                    2. Educational Counselling:
                  </span>{" "}
                  We align your academic goals with the right institutions and
                  courses worldwide.
                </div>
                <div className="abdata_listText">
                  <span className="abdata_boldtext">
                    3. Documentation Support:{" "}
                  </span>{" "}
                  Crafting original, compelling, and effective personal
                  statements, resumes, and letters without plagiarism.
                </div>
              </div>
              <div className="abdata_div1_subText2 abdataflexdiv2">
                <div className="abdata_listText">
                  <span className="abdata_boldtext">
                    4.Pre-Departure Briefing:{" "}
                  </span>{" "}
                  Equipping you with the essentials to navigate life in a new
                  country academically, culturally, and socially.
                </div>
                <div className="abdata_listText">
                  <span className="abdata_boldtext">
                    5.Post-Arrival Assistance:{" "}
                  </span>{" "}
                  Ensuring your transition from airport pickups to accommodation
                  arrangements.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* div 5 */}
        <div className="abdata_flexContainer">
          {/* div 6 */}
          <div data-aos="flip-left" style={{marginTop:"20px"}} className="abdata_div1 div6ty ">
            <div className="abdata_div1_main">
              <div className="abdata_div1_subbox abdata_divcolor">
                <div className="abdata_div1_headText ">6</div>
              </div>
              <div className="abdata_div1_subText1 abdata_textcolor">
                Our Community Impact
              </div>
              <div className="abdata_div1_subText2">
                Beyond Bharat Consultancy believes in giving back. We're
                actively involved in community outreach programs and educational
                workshops, aiming to uplift and inform future generations about
                the opportunities that await them.
              </div>
            </div>
          </div>
          {/* div 6 */}
          {/* div 7 */}
          <div data-aos="flip-right" style={{marginTop:"20px"}} className="abdata_div1 div7new">
            <div className="abdata_div1_main">
              <div className="abdata_div1_subbox">
                <div className="abdata_div1_headText ">7</div>
              </div>
              <div className="abdata_div1_subText1 ">
                Join Us
              </div>
              <div className="abdata_div1_subText2">
                Embark on your educational journey with Beyond Bharat
                Consultancy. Here, your global academic ambitions turn into
                reality. Let's navigate this voyage together, with our
                experience lighting the path to your success.
              </div>
            </div>
          </div>
          {/* div 7 */}
        </div>
      </div>
    </>
  );
};

export default AboutUs_data;
