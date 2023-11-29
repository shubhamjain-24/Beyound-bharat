import React from "react";
import "./Why_us.css";
import "../../style.css";
import { AiOutlineSend } from "react-icons/ai";
import img1 from "../../Images/whyus.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
AOS.init();
const Why_us = () => {
  return (
    <div className="whyu_mainContainer">
      <div className="whyu_flexContainer">
        <div className="whyu_flex1">
          <div className="whyu_textDiv">
            <div className="whyu_headText">Why Choose Us?</div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="whyu_subText whyu1"
            >
              <span style={{marginRight:"10px"}} className="whyu-subtextarrow">
                <AiOutlineSend /> &nbsp; &nbsp;
              </span>
              	Pioneering with AI: We're at the forefront of integrating AI in student visa consultancy. This means you get faster, more accurate, and highly personalized guidance, ensuring your path to studying abroad is as seamless as it is successful.
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="whyu_subText why2"
            >
              <span style={{marginRight:"10px"}}  className="whyu-subtextarrow">
                <AiOutlineSend /> &nbsp;
              </span>
              	Direct University Connections: Our direct tie-ups with universities around the globe translate into quicker admissions and authentic insights about your preferred courses and institutions, giving you a clear edge.
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="whyu_subText wh3s"
            >
              <span style={{marginRight:"10px"}}  className="whyu-subtextarrow">
                <AiOutlineSend /> &nbsp;{" "}
              </span>{" "}
              	Student-Centric Approach: Your ambitions are at the heart of everything we do. We prioritize your needs and career goals, offering genuine, tailored advice that's aligned with your best interests.
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="whyu_subText wh3s"
            >
              <span style={{marginRight:"10px"}}  className="whyu-subtextarrow">
                <AiOutlineSend /> &nbsp;{" "}
              </span>{" "}
              Proven Expertise: With over five years of experience in career counseling and SOP drafting, our expertise is not just in guiding you but in crafting your story in a way that resonates with admission committees.
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="whyu_subText wh3s"
            >
              <span style={{marginRight:"10px"}}  className="whyu-subtextarrow">
                <AiOutlineSend /> &nbsp;{" "}
              </span>{" "}
              Comprehensive Service Spectrum: From IELTS and Duolingo coaching to visa support and post-application assistance, our end-to-end services ensure you're well-equipped at every step of your educational journey.
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="whyu_subText wh3s"
            >
              <span style={{marginRight:"10px"}}  className="whyu-subtextarrow">
                <AiOutlineSend /> &nbsp;{" "}
              </span>{" "}
              Commitment to Transparency and Efficiency: Our processes are clear, straightforward, and designed for your convenience. We value your trust and strive to maintain transparency in all our interactions.
            </div>
            <NavLink className="Navlink" to="/contactUs">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="650" 
              className="whyu_button whyy"
            >
              Get in touch now!
            </div>
            </NavLink>
          </div>
        </div>
        <div className="whyu_flex2">
          <img src={img1} alt="" className="whyu_image" />
        </div>
      </div>
    </div>
  );
};

export default Why_us;
