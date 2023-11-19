import React from "react";
import "./Gic.css";
import "../../style.css";
import img1 from "../../Images/gic.png";
import { NavLink } from "react-router-dom";

const Gic = () => {
  return (
    <>
      <div className="gic_mainContainer">
        <div className="gic_flexContainer">
          <div className="gic_flexDiv1">
            <div className="gic_textContainer">
              <div className="gic_headText">
                Need Counselling?  Get in Touch
              </div>
              <div className="gic_subText">
                Begin your educational odyssey with Beyond Bharat Consultancy.
                Our specialized counsellors are ready to tailor a plan for your
                study abroad success.
              </div>
            </div>
          </div>
          <div className="gic_flexDiv2">
            <div className="gic_formDiv">
            <div className=" gic_headText2">
            Get Free Counselling for Student Visa
              </div>
              <form className="gic_form" action="">
                <input className="gic_input" type="text" placeholder="Name" />
                <input className="gic_input" type="phone" placeholder="Phone Number" />
                <input className="gic_input" type="email" placeholder="Email Address" />
                <input className="gic_input gic_message_input" type="text" placeholder="Message" />
                <NavLink className="Navlink" to="/contactUs">
                <div className="gic_button">
                    Get in touch
                </div>
                </NavLink>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gic;
