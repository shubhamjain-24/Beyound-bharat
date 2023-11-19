import React from 'react'
import BP_intro from './Introduction/BP_intro'
import Blogpage2 from './Intro2/Blogpage2'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

const BP = () => {
  return (
    <>
    <Navbar/>
    <BP_intro/>
    <Blogpage2/>
    <Footer/>
    </>
  )
}

export default BP