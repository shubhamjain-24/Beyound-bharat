import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestemonialCard from "./TestemonialCard";
import "./Testemonial.css";
import { testemonialData } from "./TestemonialData";

const Testemonial = () => {
  const [data, setData] = useState(testemonialData);
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <div className="teste_mainContainer">
        <div className="teste_textContainer">
            <div className="teste_headText">From the Desks of Our Satisfied Students</div>
            <div className="teste_subText">
            Be inspired by our alumni. Hear firsthand accounts from students who have navigated the path to their dream universities with us.
            </div>
        </div>
        </div>
        <div className="teste_sliderContainer">
        <Carousel className="teste_crausel" responsive={responsive}>
          {testemonialData.map((testemonialData) => (
            <TestemonialCard
              key={testemonialData.id}
              name={testemonialData.name}
              message={testemonialData.message}
              university={testemonialData.university}
              avatar={testemonialData.avatar}
            />
          ))}
        </Carousel>
        </div>
      
    </>
  );
};

export default Testemonial;
