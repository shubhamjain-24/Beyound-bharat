import React, { useState } from "react";
import "./Faq.css";
import "../../style.css";

import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const Faq_main = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  const toggleAnswer = () => {
    setShow(!show);
  };

  return (
    <div className="faq_mainContainer">
      <div
        className={`faq_questionContainer ${show ? "expanded" : ""}`}
        onClick={toggleAnswer}
      >
        <h3 className="faq_question">{question}</h3>
        <p className="faq_icon">{show ? <BiMinus /> : <BsPlusLg />}</p>
      </div>
      <div className={`faq_answerDiv ${show ? "show" : ""}`}>
        <p className="faq_answer">{answer}</p>
      </div>
    </div>
  );
};

export default Faq_main;
