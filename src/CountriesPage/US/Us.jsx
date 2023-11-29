import React from 'react'
import Us_intro from './Us_intro/Us_intro'
import US_data from './US_Data/US_data'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Us = () => {
  return (
   <>
   <Navbar/>
   <Us_intro/>
   <US_data/>
   <Footer/>
   </>
  )
}

export default Us