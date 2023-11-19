
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
        <Route path="/coaching" element={< Coaching/>} />
        </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
