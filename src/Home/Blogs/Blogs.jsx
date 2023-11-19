import React from "react";
import "./Blogs.css";
import "../../style.css";
import { BsClock } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Blogs = ({ tittle, data, date, img }) => {
  return (
    <>
      <div className="blog_gridContainer">
        <div className="blog_card">
          <div className="blog_imgDiv">
            <img src={img} alt="image" className="blogImage" />
          </div>
          <div className="blog_content_div">
            <div className="blog_tittle">{tittle}</div>
            <div className="blog_data">{data}</div>
            <div className="blog_timeDiv">
              <div className="blogdata">
                <BsClock style={{ marginRight: "5px" }} />
                {date}
              </div>
              <div className="blog_readMore">
                Read more{" "}
                <MdKeyboardDoubleArrowRight style={{ marginLeft: "5px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
