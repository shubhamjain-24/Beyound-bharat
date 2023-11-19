import React from 'react'
import './Cocontent.css'
import img1 from '../../Images/ccg1.png'
import img2 from '../../Images/ccg2.png'
import img3 from '../../Images/ccg3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Cocontent = () => {
  return (
    <>
    <div className="content_mainDiv">
        <div className="content_headDiv">
            <div className="content_headText">Comprehensive Test Preparation</div>
            <div className="content_subText">
            Our test preparation courses are tailored to the most widely recognized English language assessments
            </div>
        </div>
        <div className="content_CUContainer">
        <div className="content_flexContainer">
        <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
             className="canada_flexDiv1 contnet1">
                <div  style={{color:"var(--color1r)"}} className="canada_headText content_border">
                IELTS
                </div>
                <div className="canada_headText2">
                The International English Language Testing System measures your English proficiency in an international environment. Our expert instructors provide personalized training, focusing on each of the four critical skills assessed. 
                </div>
                
                <div style={{marginTop:"10px"}} className="canada_headText2">
                Our IELTS coaching program is designed to prepare you comprehensively for the world's premier English language test. Recognized by over 9,000 organizations worldwide, the IELTS is your passport to international education and employment.
                </div>
                <ul className="canada_list">
                    <li className="canada_listContent"> <span className='ul_boldText'>Personalized Study Plans   </span>&nbsp;	Each student receives a study plan tailored to their current proficiency level and target IELTS score.</li>
                    <br />
                    <li className="canada_listContent">	
                    <span className='ul_boldText'>		Expert Instructors:  </span>&nbsp;
                    Our experienced teachers specialize in delivering engaging lessons that focus on the specific demands of the IELTS modules: Listening, Reading, Writing, and Speaking.</li>
                    <br />
                    <li className="canada_listContent">
                    <span className='ul_boldText'>	Mock Exams and Feedback:   </span> &nbsp;
                    Regular mock tests under exam conditions provide a real IELTS experience, followed by detailed feedback to improve your performance.
                    </li>
                </ul>
            </div>
            <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className="canada_flexDiv2 cocon1">
                <img src={img1} alt="" className="canadaImage" />
            </div>
        </div>


        {/* div 2 */}
        <div  className="content_flexContainer">
        <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
             className="germany_flexDiv1 gernacon">
                <div style={{color:"var(--color2b)"}} className="germany_headText content_border2">
               PTE
                </div>
                <div className="germany_headText2">
                PTE Academic is a fair and secure English test trusted by universities and governments worldwide. Our PTE coaching services have the latest tools and techniques to help you succeed.
                </div>
                <div style={{marginTop:"10px"}} className="germany_headText2">
                The Pearson Test of English Academic is a computer-based assessment that measures your English language ability. Our coaching offers a deep dive into the digital format of the test, ensuring you are well-prepared for the actual exam environment.
                </div>
                <ul className="germany_list">
                    <li className="germany_listContent"> <span className='ul_boldText'>Computer-Based Test Strategies  </span>&nbsp;	Specialized training to master the computer-based testing format, with techniques to manage time effectively during the exam.</li>
                    <br />
                    <li className="germany_listContent">	
                    <span className='ul_boldText'>	In-depth Sectional Practice </span>&nbsp;
                    Intensive practice sessions for each part of the test - Speaking and writing, Reading, and Listening - to build confidence and proficiency.</li>
                    <br />
                    <li className="germany_listContent">
                    <span className='ul_boldText'>Real-Time Practice Platforms </span> &nbsp;
                    Utilize our cutting-edge online platforms that simulate the natural PTE test environment, helping you become accustomed to the test's format.
                    </li>
                </ul>
            </div>
            <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className="germany_flexDiv2 germanc">
                <img src={img2} alt="" className="germanyImage" />
            </div>
        </div>
        {/* div 3 */}

        <div className="content_flexContainer">
        <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className="canada_flexDiv1 cadacon">
                <div  style={{color:"var(--color1r)"}} className="canada_headText content_border">
                Duolingo English Test
                </div>
                <div className="canada_headText2">
                A convenient and modern approach to language certification. Our coaching covers the unique aspects of this adaptive test, ensuring you can showcase your language skills confidently.
                </div>
                
                <div style={{marginTop:"10px"}} className="canada_headText2">
                The Duolingo English Test has become a modern and convenient way to certify your English language ability. Our coaching program ensures you are fully prepared to excel in this adaptive test format.
                </div>
                <ul className="canada_list">
                    <li className="canada_listContent"> <span className='ul_boldText'>Flexible Test Prep    </span>&nbsp;The Duolingo English Test can be taken online anytime. Our coaching is just as flexible, with resources available 24/7 to fit your schedule.</li>
                    <br />
                    <li className="canada_listContent">	
                    <span className='ul_boldText'>		 Comprehensive Skill Building  </span>&nbsp;
                   Focus on improving your overall English skills with integrated practice that benefits all aspects of language learning - reading, writing, speaking, and listening.</li>
                    <br />
                    <li className="canada_listContent">
                    <span className='ul_boldText'>Interactive Learning Tools  </span> &nbsp;
                    Engage with interactive content that mimics the types of questions you'll face, from completing missing letters to real-time speaking and listening tasks.
                    </li>
                </ul>
            </div>
            <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className="canada_flexDiv2 candac3">
                <img src={img3} alt="" className="canadaImage" />
            </div>
        </div>

        </div>
    </div>
    </>
  )
}

export default Cocontent