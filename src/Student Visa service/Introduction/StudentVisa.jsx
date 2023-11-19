import React from "react";
import Introduction from "./Introduction";
import Intro_2 from "../Intro2/Intro_2";
import Countrypage from "../Country page/Countrypage";
import Trust from "../../Components/Trust/Trust";
import Testemonial from '../../Home/Testemonials/Testemonial'
import Gic from '../../Home/Get_In_touch/Gic'
import './StudentVisa.css'
import Footer from "../../Components/Footer/Footer";
import Faq from "../../Home/Faq/Faq";
import Navbar from "../../Components/Navbar/Navbar";
// import Testemonial2 from '../../Components/Testemonials2/Testemonial2'

const StudentVisa = () => {
  return (
    <>
    <Navbar/>
      <Introduction />
      <Intro_2 />
      <Countrypage/>
      <Trust/>
      <div className="gic_svDiv2">

      <Testemonial/>
      </div>
      {/* <div className="gic_svDiv"> */}

      <Faq />
      {/* </div> */}
      <Footer/>
    </>
  );
};

export default StudentVisa;
