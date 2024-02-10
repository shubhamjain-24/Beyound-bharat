import React from "react";
import "./Germnay_data.css";
// import { FaBookReader } from "react-icons/fa";
// import { FaLanguage } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
// import { RiFlightTakeoffFill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { TbNavigationStar } from "react-icons/tb";
import { GiLifeBar } from "react-icons/gi";
const Canada_data = () => {
  return (
    <>
      <div className="g_data_mainContainer">
        <div className="g_data_subContainer">
          <div className="g_data_headText">Study in Canada </div>
          <div className="g_data_subText">
          Embark on an enriching educational journey in Canada with Beyond Bharat Consultancy, where diverse cultures, stunning natural landscapes, and world-class academic institutions converge. Canada is increasingly becoming a preferred destination for international students, offering a welcoming, inclusive environment along with a high standard of education.
          </div>
          <div className="g_data_textDiv">
            <div className="g_data_headText">
            Canada's Academic Excellence and Diverse Opportunities:
                        </div>
            <div className="g_data_subText">
            Canada's education system is distinguished by its focus on research and development, particularly in fields like technology, environmental science, and health sciences. Canadian universities, known for their high academic standards and innovative teaching methods, provide a stimulating environment for intellectual growth. Additionally, these institutions offer a wide array of programs across various disciplines, catering to a diverse range of interests and career aspirations.
            </div>
          </div>
          <div className="g_data_cards_div">
            <div className="g_data_headText2">
            Our Comprehensive Guidance for Studying in Canada
                        </div>
            <div className="g_data_flexContainer">
              {/* div start */}
              <div className="g_data_flexDataContanier">
                <div className="g_flexcon1">
                <FaUniversity />
                </div>
                <div className="g_flexcon2">
                  <div className="g_data_flexHead">
                  Selection of Universities and Programs
                  </div>
                  <div className="g_data_flexData">
                  We assist in selecting the right Canadian university and program that aligns with your academic goals and career plans. With our deep understanding of the Canadian education system, we make this process seamless and personalized.
                  </div>
                </div>
              </div>
              {/* div end */}
              {/* div start */}
              <div className="g_data_flexDataContanier">
                <div className="g_flexcon1">
                <TbNavigationStar />
                </div>
                <div className="g_flexcon2">
                  <div className="g_data_flexHead">
                  Navigating the Admission Process
                  </div>
                  <div className="g_data_flexData">
                  Each Canadian university has its unique application process and requirements. We provide expert advice on meeting these requirements, preparing a strong application, and enhancing your chances of acceptance.
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
                  Student Visa and Permit Assistance
                  </div>
                  <div className="g_data_flexData">
                  The Canadian study permit, coupled with visa processes, requires careful attention to detail. Our team guides you through each step, ensuring that your application is complete and meets all the criteria for approval.
                  </div>
                </div>
              </div>
              {/* div end */}
              {/* div start */}
              <div className="g_data_flexDataContanier">
                <div className="g_flexcon1">
                <GiLifeBar />
                </div>
                <div className="g_flexcon2">
                  <div className="g_data_flexHead">
                  	Preparation for Life in Canada
                  </div>
                  <div className="g_data_flexData">
                  Adjusting to life in a new country can be challenging. We offer pre-departure briefings that cover not only academic aspects but also practical advice on Canadian life, including insights into the culture, climate, and day-to-day living.
                  </div>
                </div>
              </div>
              {/* div end */}
             
              
            </div>
          </div>
          <div className="g_data_textDiv">
                <div className="g_data_headText">
                A Multicultural and Safe Learning Environment
                </div>
                <div className="g_data_subText">
                Canada is renowned for its multicultural society, offering a safe and inclusive environment for students from all over the world. This multicultural fabric provides a rich learning environment, helping you develop a global perspective and cross-cultural communication skills. Canadian cities are known for their high quality of life, safety, and cultural diversity, making them ideal for international students.
                  <br />
                  At Beyond Bharat Consultancy, we are committed to making your educational aspirations in Canada a reality. From the initial stages of choosing a university to settling in Canada and thriving in your academic journey, we provide end-to-end support to ensure a fulfilling and successful experience in one of the most student-friendly countries in the world.
                </div>
              </div>
              {/* div end */}
              {/* Table Starts */}
              <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Process Step</th>
            <th>What we will Do</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Course and College Shortlisting</td>
            <td>We will first understand your Profile and based on that, and your interest, we will help you with shortlisting course and college</td>
          </tr>
          <tr>
            <td>Document Preparation</td>
            <td>Compile Transcripts, employment certificate, SOP, LORs, Test Results, and other necessary documents	</td>
          </tr>
          <tr>
            <td>University / College Application</td>
            <td>Depending upon your eligibility and profile we apply to 4 – 5 colleges	</td>
           
          </tr>
          <tr>
            <td>Admission Letter</td>
            <td>After all the above processes, you will receive the offer letter.</td>
          </tr>
          <tr>
            <td>ATuition Fees and GIC</td>
            <td>If Funding is what you seek, then we can help you with loan vendors, currency exchange, fund transfer etc.</td>
          </tr>
          <tr>
            <td>Medical  </td>
            <td>We will help you with appointments and guide you through the entire process</td>
          </tr>
          <tr>
            <td>Visa Filing </td>
            <td>Once all the documents and formalities are done, we will be filing for visa </td>
            
          </tr>
          <tr>
            <td>Ready to Fly</td>
            <td>We will help you with Flight Tickets and accommodation too. </td>
           
          </tr>
        </tbody>
      </table>
    </div>
        </div>
      </div>
    </>
  );
};

export default Canada_data;
