import React from "react";
import "./maincarousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MainCarousel = () => {
   const next = () => {
     let container = document.getElementById("slide");
     let list = container.querySelectorAll(".c_item");
     container.appendChild(list[0]);
   };

   const prev = () => {
     let container = document.getElementById("slide");
     let list = container.querySelectorAll(".c_item");
     // Move the last item to the beginning
     container.insertBefore(list[list.length - 1], list[0]);
   };
  return (
    <div className="c_body">
      <div className="carousel_container">
        <div id="slide">
          <div
            className="c_item"
            style={{ backgroundImage: 'url("images/11.png")' }}
          >
            <div class="image-overlay"></div>
            <div className="content">
              <div className="main_c_header">
                NEXT OPPORTUNITIES TO STUDY OVERSEAS
              </div>
              <div className="main_c_des">upcoming intakes</div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="c_item"
            style={{ backgroundImage: 'url("images/15.png")' }}
          >
            {" "}
            <div class="image-overlay"></div>
            <div className="content">
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
              <button>See More</button>
            </div>
          </div>
          <div
            className="c_item"
            style={{ backgroundImage: 'url("images/12.png")' }}
          >
            <div class="image-overlay"></div>
            <div className="content">
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
              <button>See More</button>
            </div>
          </div>
          <div
            className="c_item"
            style={{ backgroundImage: 'url("images/14.png")' }}
          >
            <div class="image-overlay"></div>
            <div className="content">
              <div className="main_c_header">
                Immigrate to Canada, Australia
              </div>
              <div className="main_c_des">
                we appreciate your immigration needs
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="c_item"
            style={{ backgroundImage: 'url("images/13.png")' }}
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
              <button>See More</button>
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

export default MainCarousel;
