import React from "react";
import "./gall.css";
const Gall = (props) => {
  return (
    <div id="Gall">
      <img src={props.img} alt="" />
      <div id="gallary_image"></div>
      <div id="Gall__1">
        <h3>Food</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint
          eveniet laboriosam
        </p>
        <button>
          Order Now
          <div class="arrow-wrapper">
            <div class="arrow"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Gall;
