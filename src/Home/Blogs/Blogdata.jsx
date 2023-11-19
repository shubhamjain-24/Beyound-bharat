import React, { useState } from "react";
import "./Blogs.css";
import "../../style.css";
import { blog } from "./Blog_data";
import Blogs from "./Blogs";
const Blogdata = () => {
  const [data, setData] = useState(blog);
  return (
    <>
      <div className="blog_mainContainer">
        <div className="blog_textContainer">
          <div className="blog_headtext">Latest News/Blogs</div>
          <div className="blog_subText">
            Stay up-to-date with the latest in global education trends, visa
            updates, and hear success stories from our blog.
          </div>
        </div>
        <div className="blog_mapContainer">
        {blog.map((blogItem) => (
          <Blogs
            key={blogItem.id}
            img={blogItem.img}
            tittle={blogItem.tittle}
            data={blogItem.data}
            date={blogItem.date}
          />
        ))}
        </div>
      </div>
    </>
  );
};

export default Blogdata;
