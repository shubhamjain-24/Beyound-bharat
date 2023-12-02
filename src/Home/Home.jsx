import React from 'react'
import Brand_s from './BrandSection/Brand_s'
import What from './What_we_offer/What'
import Why_us from './WhyUs/Why_us'
import Faq from './Faq/Faq'
import Gic from './Get_In_touch/Gic'
import Blogdata from './Blogs/Blogdata'
import Coaching from './Coaching_slider/Coaching'
import Country from './Country_Slider/Country'
import Testemonial from './Testemonials/Testemonial'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import MainCarousel from './Main Component/Main_Carousel'
import WhatsAppButton from '../Components/Whatsapp button/WhatsAppButton'
import Crausel2 from '../Components/Crausel 2/Crausel2'

const Home = () => {
  return (
   <>

   <Navbar/>
  

   {/* <MainCarousel/> */}
   <Crausel2/>
  
   <Brand_s/>
   <What/>
   <Why_us/>
   <Faq/>
   <Gic/>
   <Blogdata/>
   <Testemonial/>
   <Country/>
   <Coaching/>
   <WhatsAppButton/>
   <div style={{marginTop:"-20px"}}>

   <Footer/>
   </div>
   </>
  )
}

export default Home