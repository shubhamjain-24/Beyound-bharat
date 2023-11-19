import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countrycard from "./Countrycard";
import "./Country.css";
import { countryData } from "./CountryData";

const Country = () => {
  const [data, setData] = useState(countryData);
  useEffect(() => {
    setData(countryData);
  }, []);

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
      <div className="country_mainContainer">
        <div className="country_flexContainer"></div>
        <div className="country_textContainer">
          <div className="country_headText">
            Explore Global Education Opportunities
          </div>
          <div className="country_subText">
            Discover top-tier universities and diverse student experiences. From
            the prestigious education system in the UK to tuition-free options
            in Germany, plan your international academic journey with insights
            into visas, applications, and vibrant student life.
          </div>
        </div>
      </div>
      <div className="country_cardContainer">
        <Carousel className="country_crausel" responsive={responsive}>
          {countryData.map((countryData) => (
            <Countrycard
              key={countryData.id}
              background={countryData.background}
              tittle={countryData.tittle}
              data={countryData.data}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Country;
