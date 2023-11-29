import React from "react";
import "./Germnay_data.css";
import { FaBookReader } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
const Germany_data = () => {
  return (
    <>
      <div className="g_data_mainContainer">
        <div className="g_data_subContainer">
          <div className="g_data_headText">Study in Germany</div>
          <div className="g_data_subText">
            Embark on a distinctive educational journey in Germany with Beyond
            Bharat Consultancy, where academic rigor meets innovative research
            and a rich historical backdrop. Germany stands out as a premier
            destination for students worldwide, offering a unique blend of
            high-quality education and a life-enriching cultural experience.
          </div>
          <div className="g_data_textDiv">
            <div className="g_data_headText">
              Germany's Academic Excellence and Innovation
            </div>
            <div className="g_data_subText">
              Germany is renowned for its robust education system, characterized
              by its emphasis on research, science, and technology. The country
              hosts some of the world's most prestigious universities, known for
              their academic rigor, cutting-edge research facilities, and strong
              industry connections. This environment is ideal for students eager
              to engage in practical, hands-on learning, particularly in fields
              like engineering, natural sciences, and information technology
            </div>
          </div>
          <div className="g_data_cards_div">
            <div className="g_data_headText2">
              Navigating the German Education Landscape
            </div>
            <div className="g_data_flexContainer">
              {/* div start */}
              <div className="g_data_flexDataContanier">
                <div className="g_flexcon1">
                  <FaBookReader />
                </div>
                <div className="g_flexcon2">
                  <div className="g_data_flexHead">No or Low Tuition Fees</div>
                  <div className="g_data_flexData">
                    One of the most appealing aspects of studying in Germany is
                    the affordability. Many public universities offer no or very
                    low tuition fees, making quality education accessible.
                  </div>
                </div>
              </div>
              {/* div end */}
              {/* div start */}
              <div className="g_data_flexDataContanier">
                <div className="g_flexcon1">
                  <FaLanguage />
                </div>
                <div className="g_flexcon2">
                  <div className="g_data_flexHead">
                    Wide Range of Programs in English
                  </div>
                  <div className="g_data_flexData">
                    While German is the primary language of instruction, there
                    is a growing number of programs offered entirely in English,
                    particularly at the postgraduate level, making it easier for
                    international students to adapt.
                  </div>
                </div>
              </div>
              {/* div end */}
              {/* div start */}
              <div className="g_data_flexDataContanier">
                <div className="g_flexcon1">
                  <FaUniversity />
                </div>
                <div className="g_flexcon2">
                  <div className="g_data_flexHead">
                    Application and Admission Guidance
                  </div>
                  <div className="g_data_flexData">
                    Our team assists in navigating the German university
                    application process, which can vary significantly from other
                    countries. We provide insights into university-specific
                    requirements, help with language preparation, and guide you
                    through the paperwork.
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
                    Student Visa and Residence Permit Assistance
                  </div>
                  <div className="g_data_flexData">
                    We simplify the German student visa and residence permit
                    process, ensuring you have all the necessary documentation
                    and meet the requirements for a successful application.
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
                    Cultural Integration and Language Support
                  </div>
                  <div className="g_data_flexData">
                    To fully embrace your German experience, we encourage
                    language learning and cultural integration. We offer
                    resources and tips to help you acclimatize to German life
                    and culture, enhancing both your academic and social
                    experience.
                  </div>
                </div>
              </div>
              {/* div end */}
              
            </div>
          </div>
          <div className="g_data_textDiv">
                <div className="g_data_headText">
                  A Holistic Educational Experience
                </div>
                <div className="g_data_subText">
                  In Germany, education extends beyond the classroom. You’ll
                  have the opportunity to immerse yourself in a country known
                  for its historical richness, architectural marvels, and
                  vibrant cultural scene. Additionally, Germany’s central
                  location in Europe makes it an excellent base for exploring
                  other European countries.
                  <br />
                  At Beyond Bharat Consultancy, we are dedicated to guiding you
                  through every aspect of your educational journey in Germany.
                  From selecting the right course and university to helping you
                  settle into a new cultural environment, our goal is to ensure
                  a smooth, enriching educational experience in one of the
                  world’s most student-friendly countries.
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
            <td>Admission Letter</td>
            <td>After all the above processes, you will receive the offer letter.</td>
            <td>7 – 15 Days</td>
          </tr>
          <tr>
            <td>Tuition Fees </td>
            <td>Fees payment of 1000 Euro</td>
            <td>1 day</td>
          </tr>
          <tr>
            <td>APS certificate </td>
            <td>Fees payment of 1000 Euro</td>
            <td>2 – 3 Weeks</td>
          </tr>
          <tr>
            <td>Unconditional admission Letter </td>
            <td>Once APS Certificate is made and documents are verified, you will receive unconditional offer letter </td>
            <td></td>
          </tr>
          <tr>
            <td>Block Account Opening & Funding</td>
            <td>We will help you loan if required </td>
            <td>4 – 5 days</td>
          </tr>
          <tr>
            <td>Visa Document Preparation</td>
            <td>Offer letter, block account certificate, APS certificate and other documents </td>
            <td>1 day</td>
          </tr>
          <tr>
            <td>Visa Filing</td>
            <td>VFS Centre</td>
            <td></td>
          </tr>
          <tr>
            <td>Ready to Fly</td>
            <td>We will help you with flight tickets too.</td>
            <td>Approval takes 30 – 45 days on an average</td>
          </tr>
        </tbody>
      </table>
    </div>
        </div>
      </div>
    </>
  );
};

export default Germany_data;
