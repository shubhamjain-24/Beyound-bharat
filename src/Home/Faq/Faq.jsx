import React, { useState } from "react";
import "./Faq.css";
import "../../style.css";
import { questions } from "./faq_data";
import Faq_main from "./Faq_main";
const Faq = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <div className="faq_outer_mainContainer">
        <div className="faq_outer_textDiv">
          <div className="faq_outer_headText">FAQ's</div>
          <div className="faq_outer_subtext">
            All your questions answered. Our FAQ section addresses common
            queries and provides insights to ease your study abroad process.
          </div>
        </div>
        <div className="faq_outer_dataDiv">
          {data.map((curElem) => {
            const { id } = curElem;
            return <Faq_main key={id} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;
