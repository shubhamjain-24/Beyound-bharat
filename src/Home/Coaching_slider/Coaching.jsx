import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Coaching.css";
import Coaching_card from "./Coaching_card";
import { coachingData } from "./Coachingdata";

const Coaching = () => {
  const [data, setData] = useState(coachingData);

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
      <div className="coaching_mainContainer">
        <div className="coaching_flexContainer">
          <div className="coaching_flexDiv1">
            <div className="coaching_textContainer">
              <div className="coaching_headtext">
                Unlock Your Language Proficiency Journey
              </div>
              <div className="coaching_subtext">
                Explore our specialized coaching programs tailored to elevate
                your language test performance. From IELTS and Duolingo to PTE
                Academic, our expert instructors, strategic insights, and
                comprehensive materials are your keys to success. Choose your
                path and embark on a journey towards excellence.
              </div>
            </div>
          </div>
          <div className="coaching_flexDiv2">
            <Carousel responsive={responsive} >
              {coachingData.map((coachingData) => (
                <Coaching_card
                  key={coachingData.id}
                  background={coachingData.background}
                  tittle={coachingData.tittle}
                  data={coachingData.data}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coaching;
