import React from 'react'
import CuIntroduction from './Introduction/CuIntroduction'
import CuIntro2 from './Introduction2/cuIntro2'
import Address from './Address/Address'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

const Contactus = () => {
  return (
    <>
    <Navbar/>
    <CuIntroduction/>
    <CuIntro2/>
    <Address/>
    <Footer/>
    </>
  )
}

export default Contactus