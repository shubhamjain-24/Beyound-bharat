import React from "react";
import "./Footer.css";
import { BiRightArrow } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import img1 from "../../Images/nav_logo.png";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="footer_mainContainer">
        <div className="footer_flexContainer">
          <div className="footer_div1">
            <div className="footer_logoContainer">
              <img src={img1} alt="" className="footerImg" />
            </div>
            <div className="footer_div1subtext">
              Explore global education with Beyond Bharat Consultancy, turning
              study abroad dreams into reality with 5+ years of expert guidance
              and support.
            </div>
            <NavLink className="Navlink" to="/contactUs">
              <div className="footer_div1button">Get in touch</div>
            </NavLink>
          </div>
          <div className="footer_div2">
            <div className="footer_div2Headtext">Quick Links</div>
            <div className="footer_div2subText">
              <NavLink className="Navlink" style={{ color: "white" }} to="/">
                <BiRightArrow /> &nbsp; Home
              </NavLink>
            </div>
            <div className="footer_div2subText">
              <NavLink
                className="Navlink"
                style={{ color: "white" }}
                to="/coaching"
              >
                <BiRightArrow /> &nbsp; Coaching Service
              </NavLink>
            </div>
            <div className="footer_div2subText">
              <NavLink
                className="Navlink"
                style={{ color: "white" }}
                to="/studentVisa"
              >
                <BiRightArrow /> &nbsp; Study Visa Service
              </NavLink>
            </div>
            <div className="footer_div2subText">
              <NavLink
                className="Navlink"
                style={{ color: "white" }}
                to="/blog"
              >
                <BiRightArrow /> &nbsp; Blogs
              </NavLink>
            </div>
            <div className="footer_div2subText">
              <NavLink
                className="Navlink"
                style={{ color: "white" }}
                to="/aboutUs"
              >
                <BiRightArrow /> &nbsp; About Us
              </NavLink>
            </div>
            <div className="footer_div2subText">
              <NavLink
                className="Navlink"
                style={{ color: "white" }}
                to="/contactUs"
              >
                <BiRightArrow /> &nbsp; Contact Us
              </NavLink>
            </div>
          </div>
          <div className="footer_div3">
            <div className="footer_div3headText">Contact Info</div>
            <div className="footer_div3subText">
              <HiOutlineLocationMarker className="footer_div2logo" />
              Address: 613, Laxmi Enclave 2, Near Gajera Circle, Katargarm
              Surat - 395004
            </div>
            <div className="footer_div3subText">
              <FiPhoneCall /> &nbsp; +91 9510835413
            </div>
            <div className="footer_div3subText">
              <FiMail /> &nbsp; Mail us at
            </div>
            <div className="footer_div3subText">
              <a style={{textDecoration:"none",color:"white"}}  href="mailto:beyondbharatconsultancy@gmail.com">
              For general inquiries: <br /> beyondbharatconsultancy@gmail.com<br />
              </a>
            </div>
            {/* <div className="footer_div3subText">
               For documentation services: <br />{" "}
              contact@example.com <br />
            </div> */}
          </div>
        </div>
      </div>
      <div className="foot_bootom">
        <div className="foot-border"></div>
        <div className="foot_bottomContent">
          <div className="foot_bottom_text1">
            © All Copyright reserved BEYOUND BHARAT CONSULTANCY
          </div>
          <div className="foot_bottom_icondiv">
            <div className="foot_bootom_icon">
              <NavLink className="Navlink" style={{color:"white"}}  to="/https://www.facebook.com/profile.php?id=6155423901718"  >

              <FaFacebook />
              </NavLink>
            </div>
            {/* <div className="foot_bootom_icon">
              <FaXTwitter />
            </div> */}
            <div className="foot_bootom_icon">
              <NavLink className='Navlink' style={{color:"white"}}  to="/https://www.instagram.com/beyond_bharat_consultancy/?hl=en">

              <GrInstagram />
              </NavLink>
            </div>
            <div className="foot_bootom_icon">
              <NavLink className='Navlink' style={{color:"white"}} to="/https://wa.me/9510835413">
              <FaWhatsapp  />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
