import React from "react";
import "./Chef.css";
const Chef = (props) => {
  return (
    <div id="Chef">
      <div id="Chef_img" style={{ backgroundImage: `url(${props.img})` }}></div>
      <div id="Chef__1">
        <h2>Chef</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="Social_link">
          <a href="/">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Chef;
