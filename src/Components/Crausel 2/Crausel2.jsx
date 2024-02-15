import React from "react";
import "./Crausel2.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Crausel2 = () => {
   const next = () => {
     let container = document.getElementById("slide");
     let list = container.querySelectorAll(".c_item");
     container.appendChild(list[0]);
   };

   const prev = () => {
     let container = document.getElementById("slide");
     let list = container.querySelectorAll(".c_item");
     container.insertBefore(list[list.length - 1], list[0]);
   };
  return (
    <div className="c_body">
      <div className="carousel_container">
        <div id="slide">
          <div
            className="c_item"
            style={{ backgroundImage: 'url("https://ik.imagekit.io/ai3bgppzf/Untitled/Untitled-3.png?updatedAt=1701495830473")' }}
          >
            <div class="image-overlay"></div>
            <div className="content">
            
              <div className="main_c_header">
                NEXT OPPORTUNITIES TO STUDY OVERSEAS
              </div>
              <div className="main_c_des">upcoming intakes</div>
              <NavLink className="Navlink" to="/aboutUs">
              <button>See More</button>
              </NavLink>
            </div>
            <div className="c_text_middle_design2">
             <p className="text_border">Study <br /> Overseas</p> </div>
          </div>
          <div
            className="c_item"
            style={{ backgroundImage: 'url("https://i.ibb.co/pwMgjZz/imglink.png ")' }}
          >
            {" "}
            <div class="image-overlay"></div>
            <div className="content">
            <div style={{ color: "white" }}
             className="main_c_header">Study Abroad</div>
              <div className="main_c_header">
                <span style={{ color: "#bdbcbc" }}>Study in </span>
                <span style={{ color: "white" }}>
                  Canada ,USA UK, Australia, New Zealand
                </span>
              </div>
              <div className="main_c_des">
                <span style={{ color: "#ededed" }}>
                  {" "}
                  A World of opportunities lies ahead
                </span>
              </div>
              <NavLink className="Navlink" to="/studentVisa">
              <button>See More</button>
              </NavLink>
              <div className="flag_button_container">
                <button className="flag_button" id="flag1">CN</button>
                <button className="flag_button" id="flag2">USA</button>
                <button className="flag_button"  id="flag3">AUS</button>
                <button className="flag_button" id="flag4">GER</button>
              </div>
            </div>
            <div className="c_text_middle_design2">
              <NavLink className="Navlink" to="/studentVisa">

             <p className="text_border">Study <br /> Abroad</p>
              </NavLink>
              </div>
          </div>
          <div
            className="c_item"
            style={{ backgroundImage: 'url("https://ik.imagekit.io/ai3bgppzf/Untitled/Untitled-4.png?updatedAt=1701495817060")' }}
          >
            <div class="image-overlay"></div>
            <div className="content">
            <div style={{ color: "rgb(0 80 197)" }}
             className="main_c_header">Abroad Studies</div>
              <div className="main_c_header">
                <span style={{ color: "#bdbcbc" }}>Attend </span>
                <span style={{ color: "rgb(0 80 197)" }}>
                  IELTS CELPIP, PTE
                </span>
                <span style={{ color: "#bdbcbc" }}> Coaching </span>
                <span style={{ color: "rgb(0 80 197)" }}>Online!</span>
              </div>
              <div className="main_c_des">
                <span style={{ color: "#928c8c", fontSize: "14px" }}>
                  JOIN CLASSES FROM ANY PLACE ,ANY TIME
                </span>
              </div>
              <NavLink className="Navlink" to="/coaching">
              <button>See More</button>
              </NavLink>
              
            
            </div>
            <div className="c_text_middle_design2">
              <NavLink to="/coaching" className="Navlink">
              <p className="text_border">Online Coaching</p>
              </NavLink>
             </div>
          </div>
          
          <div
            className="c_item"
            style={{ backgroundImage: 'url("https://ik.imagekit.io/ai3bgppzf/Untitled/Untitled-5.png?updatedAt=1701495840984")' }}
          >
            {" "}
            <div class="image-overlay"></div>
            <div className="content">
              <div className="main_c_header">
                <span style={{ color: "#bdbcbc" }}>Prepare with the </span>
                <span style={{ color: "rgb(0 80 197)" }}> Perfect</span>{" "}
                <span style={{ color: "#bdbcbc" }}>Overseas Education </span>
                <span style={{ color: "rgb(0 80 197)" }}>Consultants</span>
              </div>
              <div className="main_c_des">
                <span style={{ color: "#bdbcbc" }}> want to study abroad?</span>
              </div>
              <NavLink className="Navlink" to="/contactUs">
              <button >See More</button>
              </NavLink>
            </div>
              <div className="c_text_middle_design2">
                <NavLink className="Navlink" to="/contactUs">
             <p className="text_border">Perfect <br /> Consultants</p> 
                </NavLink>
             </div>
          </div>
        </div>
        <div className="c_buttons">
          <button id="prev" onClick={prev}>
            <FaChevronLeft />
          </button>
          <button id="next" onClick={next}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Crausel2;