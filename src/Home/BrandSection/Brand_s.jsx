import React, { useEffect, useState } from "react";
import "./Brand_s.css";
import "../../style.css";
import img1 from "../../Images/wwa.png";
import img2 from "../../Images/wwa2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Brand_s = () => {
  return (
    <div className="Brand_mainContainer">
      <div className="Brand_gridContainer">
        <div className="brand_div1">
          <img src={img1} alt="" className="brandimg" />
        </div>
        <div data-aos="zoom-in-up" className="brand_div2">
          <div className="brand_textDiv">
            <div className="brand_headText">Who We Are?</div>

            <div className="brand_subText">
              Embark on an academic journey with Beyond Bharat Consultancy,
              where we offer a guiding light to global education.
              <br />
              Our 5+ years of expertise is in transforming your study abroad
              aspirations into reality with comprehensive, personalized
              guidance, and support.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand_s;
