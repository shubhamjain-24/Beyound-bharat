import React from 'react'
import Germany_intro from './Germany_Intro/Germany_intro'
import Germany_data from './Germany_Data/Germany_data'
// import Testemonial from '../../Home/Testemonials/Testemonial'
import Gic from '../../Home/Get_In_touch/Gic'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'

const Germany = () => {
  return (
    <>
    <Navbar/>
    <Germany_intro/>
    <Germany_data/>
    {/* <Gic/> */}
    <Footer/>
    </>
  )
}

export default Germany