import React from 'react'
import Introduction from './Coaching Intro/Introduction'
import CoIntro2 from './Coaching intro 2/CoIntro2'
import Cocontent from './Content Div/Cocontent'
import Section4 from './Section4/Section4'
import WhyUs2 from './Why_us/WhyUs2'
import Gic from '../Home/Get_In_touch/Gic'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Coaching = () => {
  return (
    <>
    <Navbar/>
    <Introduction/>
    <CoIntro2/>
    <Cocontent/>
    <Section4/>
    <WhyUs2/>
    <div style={{marginTop:"-40px"}}>

    <Gic/>
    </div>
    <div style={{marginTop:"-20px"}}>
    <Footer/>
    </div>
    </>
  )
}

export default Coaching