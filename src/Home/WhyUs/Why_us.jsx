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
              <span className="whyu-subtextarrow">
                <AiOutlineSend /> &nbsp;
              </span>
              Thousands of Successful Stories : Our track record speaks volumes
              with a high visa success rate.
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="whyu_subText why2"
            >
              <span className="whyu-subtextarrow">
                <AiOutlineSend /> &nbsp;
              </span>
              Customized Care : We believe in a personalized approach for every
              student's unique path.
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="whyu_subText wh3s"
            >
              <span className="whyu-subtextarrow">
                <AiOutlineSend /> &nbsp;{" "}
              </span>{" "}
              Global Reach : Our connections span prestigious universities and
              colleges across the globe.
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
