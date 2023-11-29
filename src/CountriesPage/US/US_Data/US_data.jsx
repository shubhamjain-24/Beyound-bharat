import React from "react";
import "./Germnay_data.css";
import { FaBookReader } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
const US_data = () => {
  return (
    <>
      <div className="g_data_mainContainer">
        <div className="g_data_subContainer">
          <div className="g_data_headText">Study in USA</div>
          <div className="g_data_subText">
          Embark on an academic adventure in the United States with Beyond Bharat Consultancy, where your dreams of an international education are nurtured into reality. The USA, known for its educational prowess and vibrant campus life, offers more than just degrees; it’s a gateway to a world of opportunities.
          </div>
          <div className="g_data_textDiv">
            <div className="g_data_headText">
            Unique Educational Landscape of the USA
            </div>
            <div className="g_data_subText">
            American universities are celebrated for their innovative approaches to learning, research opportunities, and diverse academic communities. This environment fosters not only academic growth but also personal development, making it an ideal destination for students seeking a comprehensive educational experience.
            </div>
          </div>
          <div className="g_data_cards_div">
            <div className="g_data_headText2">
            Tailored Support for Your American Dream
            </div>
            <div className="g_data_flexContainer">
              {/* div start */}
              <div className="g_data_flexDataContanier">
                <div className="g_flexcon1">
                  <GiBookshelf />
                </div>
                <div className="g_flexcon2">
                  <div className="g_data_flexHead">Diverse Program Choices</div>
                  <div className="g_data_flexData">
                  Whether it’s the liberal arts, STEM fields, or specialized professional courses, the USA’s educational system offers an unparalleled range of programs. We assist in selecting the program that aligns with your aspirations and potential.
                  </div>
                </div>
              </div>
              {/* div end */}
              {/* div start */}
              <div className="g_data_flexDataContanier">
                <div className="g_flexcon1">
                  <MdSupportAgent />
                </div>
                <div className="g_flexcon2">
                  <div className="g_data_flexHead">
                  Guidance Through Complexities
                  </div>
                  <div className="g_data_flexData">
                  The application process in the US can be multifaceted, involving unique requirements like the SAT, ACT, or GRE, along with essays and extracurricular portfolios. We provide expert guidance to navigate this process effectively.
                  </div>
                </div>
              </div>
              {/* div end */}
              {/* div start */}
              <div className="g_data_flexDataContanier">
                <div className="g_flexcon1">
                  <FaClipboardList />
                </div>
                <div className="g_flexcon2">
                  <div className="g_data_flexHead">
                  Visa Counseling Tailored to US Policies
                  </div>
                  <div className="g_data_flexData">
                  Understanding the nuances of the US visa process is crucial. Our team offers comprehensive support in obtaining your F-1 or J-1 student visa, ensuring that you meet all the necessary requirements.
                  </div>
                </div>
              </div>
              {/* div end */}
              {/* div start */}
              <div className="g_data_flexDataContanier">
                <div className="g_flexcon1">
                  <RiFlightTakeoffFill />
                </div>
                <div className="g_flexcon2">
                  <div className="g_data_flexHead">
                  Pre-Departure and Cultural Orientation: 
                  </div>
                  <div className="g_data_flexData">
                  To ease your transition into American life, we offer thorough pre-departure briefings. These sessions cover not only logistical aspects but also cultural nuances, helping you adapt quickly to the American way of life.
                  </div>
                </div>
              </div>
              {/* div end */}
              
            </div>
          </div>
          <div className="g_data_textDiv">
                <div className="g_data_headText">
                Experience American Campus Life
                </div>
                <div className="g_data_subText">
                Studying in the USA also means immersing yourself in a campus culture that is vibrant and diverse. It’s an opportunity to interact with students from all over the world, participate in a variety of extracurricular activities, and develop a global perspective.
                  <br />
                  At Beyond Bharat Consultancy, we are committed to providing a comprehensive pathway for your educational aspirations in the USA. From choosing the right university to settling into American life, we are with you every step of the way, ensuring a rewarding and enriching educational journey.
                </div>
              </div>
              {/* div end */}
              {/* Table Starts */}
              <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Process Step</th>
            <th>Detail</th>
            <th> Timeline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Initial Consultation</td>
            <td>Understand your profile, discuss course and country options with you. </td>
            <td>Instantly</td>
          </tr>
          <tr>
            <td>Course and college shortlisting</td>
            <td>Based on your profile, and interest, we will help you with shortlisting course and college</td>
            <td>2 hours</td>
          </tr>
          <tr>
            <td>Preparation for Entrance Exams</td>
            <td>Depending upon the country and eligibility we provide you coaching for IELTS / PTE / Duolingo</td>
            <td>2 – 3 Months </td>
          </tr>
          <tr>
            <td>Document preparation</td>
            <td>Compile Transcripts, employment certificate, SOP, LORs, Funding</td>
            <td>15 days - 1 month</td>
          </tr>
          <tr>
            <td>Applying for Colleges / University</td>
            <td>Depending upon your eligibility and profile we apply to 4 – 5 colleges</td>
            <td>1 day</td>
          </tr>
          <tr>
            <td>Tuition Fees and living expenses. </td>
            <td>We will assist you with loan if required. You only have to show the funds not pay the fees</td>
            <td>4 – 5 days (In case of loan)</td>
          </tr>
          <tr>
            <td>Tuition Fees </td>
            <td>Fees payment of 1000 Euro</td>
            <td>1 day</td>
          </tr>
          <tr>
            <td>I-20 </td>
            <td>After all the above processes, you will receive the offer letter.</td>
            <td>28-30 days</td>
          </tr>
          <tr>
            <td>DS-160 and start of Visa Process</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Medical</td>
            <td>We will help you with appointments and guide you through the entire process </td>
            <td>4 – 5 days</td>
          </tr>
          <tr>
            <td>Bio metric</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Interview Preparation</td>
            <td>Our team of experts will help you with the entire interview process with explaining what to expect and how to tackle </td>
            <td>2-4 days</td>
          </tr>
          <tr>
            <td>Visa Filling</td>
            <td> </td>
            <td></td>
          </tr>
          <tr>
            <td>Ready to Fly</td>
            <td>We will help you with flight tickets too.</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
        </div>
      </div>
    </>
  );
};

export default US_data;
