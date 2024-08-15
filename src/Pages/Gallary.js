
import React from "react";
import Gall from "../componants/gall";
const Gallary = () => {
  function b (){
    console.log("click");
  }
  return (
    <div id="Gallary">
      <h1>
        Our <span onClick={b}>Gallary</span>
      </h1>
      <div id="Gallary__1">
        <Gall img="./img/gallary_1.jpg"/>
        <Gall img="./img/gallary_2.jpg"/>
        <Gall img="./img/gallary_3.jpg"/>
        <Gall img="./img/gallary_4.jpg"/>
        <Gall img="./img/gallary_5.jpg"/>
        <Gall img="./img/gallary_6.jpg"/>
      </div>
    </div>
  );
};

export default Gallary;
