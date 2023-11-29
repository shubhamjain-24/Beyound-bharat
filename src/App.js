
import './App.css';
import Home from './Home/Home';
import Coaching from './Coaching/Coaching';
import StudentVisa from './Student Visa service/Introduction/StudentVisa';
import AboutUs from './AboutUs/AboutUs';
import Contactus from './Contact Us/Contactus';
import Navbar from './Components/Navbar/Navbar';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import BacktoScroll from './Components/BacktoScroll'
import BP from './Blog Page/BP';
import Uk from './CountriesPage/UK/Uk'
import Us from './CountriesPage/US/Us';
import Canada from './CountriesPage/Canda/Canada';
import Germany_intro from './CountriesPage/Germany/Germany_Intro/Germany_intro';
import Germany from './CountriesPage/Germany/Germany';
import WhatsAppButton from './Components/Whatsapp button/WhatsAppButton';
import CallButton from './Components/Callbutton/CallButton';
function App() {
  return (
    <>
    <BrowserRouter>
    <BacktoScroll/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BP />} />
        <Route path="/studentVisa" element={<StudentVisa />} />
        <Route path="/contactUs" element={<Contactus />} />
        <Route path="/aboutUs" element={< AboutUs/>} />
        <Route path="/uk" element={< Uk/>} />
        <Route path="/us" element={< Us/>} />
        <Route path="/canada" element={< Canada/>} />
        <Route path="/germany" element={< Germany/>} />
        <Route path="/coaching" element={< Coaching/>} />
        </Routes>
    </BrowserRouter>
    <CallButton/>
    <WhatsAppButton/>
    {/* <Uk/> */}
    {/* <Us/> */}
    {/* <Canada/> */}
    {/* <Germany/> */}
    </>
  );
}

export default App;
