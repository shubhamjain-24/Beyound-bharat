import React from 'react'
import Introduction from './Introduction/Introduction'
import Intro2ab from './Intro2/Intro2ab'
import AboutUs_data from './About data/AboutUs_data'
import Gic from '../Home/Get_In_touch/Gic'
import Testemonial from '../Home/Testemonials/Testemonial'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <Introduction/>
    <Intro2ab/>
    <AboutUs_data/>
  <Gic/>
  {/* <Testemonial/> */}
<div style={{marginTop:"-20px"}}>

  < Footer/>
</div>
    </>
  )
}

export default AboutUs