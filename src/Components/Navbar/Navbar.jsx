import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import logo from '../../Images/nav_logo.png';
import React from "react";
import './Navbar.css';

const Navbar = () => {
  const [first, setFirst] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleToggle = () => setFirst(!first);

  return (
    <>
      <div className="navbars">
        <div className="navbar-child">
          <div className="navv_logo">
            <img src={logo} alt="" className="navv_logo_img" />
          </div>
          <ul className="navbar-ul">
          <NavLink className="Navlink" to="/">
              <li className="navbar-li">HOME</li>
            </NavLink>
            {/* <li className="navbar-li" onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
              <span className="span-service">
                SERVICES {first ? <p>-</p> : <p>+</p>}
              </span>
              <div className="navs-dropdown">
                <div className="navs-dropMenu">
                  <ul className="drop-ul">
                    <li className="drop-li">SOP: Statement of Purpose</li>
                    <li className="drop-li">LOR: Letter of Recommendation</li>
                    <li className="drop-li">Assignment</li>
                  </ul>
                </div>
              </div>
            </li> */}
             <NavLink className="Navlink" to="/blog">

            <li className="navbar-li">BLOGS</li>
             </NavLink>
             <NavLink className="Navlink" to="/studentVisa">
              
            <li className="navbar-li">STUDENT VISA</li>
              </NavLink>
              <NavLink className="Navlink" to="/coaching">

            <li className="navbar-li">COACHING</li>
              </NavLink>
              <NavLink className="Navlink" to="/aboutUs">

            <li className="navbar-li">ABOUT US</li>
              </NavLink>
              <NavLink className="Navlink" to="/contactUs">

            <li className="navbar-li">CONTACT US</li>
              </NavLink>
          </ul>
        </div>
        <div className="R_NavBar-nav">
          <div className="navs-logo">
            <img src={logo} className="navs-logoImg" alt="" />
          </div>
          <div onClick={() => setShow(!show)} className="Burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <Offcanvas
            show={show}
            placement="end"
            className={`off_canvas ${show ? 'show' : ''}`}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="phoneviewtittle"> BEYOND BHARAT CONSULTANCY</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="R_Navigation">
                <li className="R_navs-list">
                  <a href="/">Home Page</a>
                </li>
                <li className="R_navs-list">
                  <a href="/blog">Blogs</a>
                </li>
                <li className="R_navs-list">
                  <a href="/studentVisa">Student Visa</a>
                </li>
                <li className="R_navs-list">
                  <a href="/Coaching">Coaching</a>
                </li>
                <li className="R_navs-list">
                  <a href="/contactUs">Contact Us</a>
                </li>
                <li className="R_navs-list">
                  <a href="/aboutUs">About Us</a>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
};

export default Navbar;
