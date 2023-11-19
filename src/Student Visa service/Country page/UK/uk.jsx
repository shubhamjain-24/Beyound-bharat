import React from "react";
import "./uk.css";
import img1 from "../../../Images/ukstudy.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const uk = () => {
  return (
    <>
      <div className="uk_mainContainer">
        <div className="uk_flexContainer">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="uk_flexDiv1"
          >
            <div className="uk_headText">Study in UK</div>
            <div className="uk_headText2">
              The UK's centuries-old universities call for the brightest minds.
              With half a decade of experience, we know the ins and outs of the
              UK's points-based visa system, ensuring you meet all the
              requirements, from financial proofs to the CAS (Confirmation of
              Acceptance for Studies).
            </div>
            <ul className="uk_list">
              <li className="uk_listContent">
                {" "}
                <span className="ul_boldText">Visa Counseling: </span>&nbsp;
                Benefit from our deep understanding of the Tier 4 student visa
                route, including advice on navigating the health surcharge and
                maintenance funds.
              </li>
              <li className="uk_listContent">
                <span className="ul_boldText">Application Assistance: </span>
                &nbsp; We leverage our experience to streamline your
                application, avoiding common pitfalls that lead to delays or
                refusals.
              </li>
              <li className="uk_listContent">
                <span className="ul_boldText">Interview Preparation: </span>{" "}
                &nbsp; We've refined our interview prep to reflect the specific
                criteria UK visa officers look for, ensuring you present your
                case with confidence.
              </li>
            </ul>
          </div>
          <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="uk_flexDiv2">
            <img src={img1} alt="" className="ukImage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default uk;
