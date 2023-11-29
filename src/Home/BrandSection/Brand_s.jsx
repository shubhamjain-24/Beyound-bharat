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
            Welcome to Beyond Bharat Consultancy, the first AI-powered student visa consultancy in India, revolutionizing study abroad journeys! Nestled in the heart of Surat City, we extend our innovative services across India, offering a blend of technology-driven counsel and personalized assistance. Our expertise lies in transforming aspirations into reality for students seeking education in UK, USA, Europe, Canada, and Australia. With direct university tie-ups, we ensure swift, seamless admissions, setting new benchmarks in transparency and efficiency. Our dedication is student-focused, prioritizing your career prospects above all. Backed by over five years of experience in career counseling and SOP crafting, we're not just consultants; we're your gateway to global education
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand_s;
