import React from "react";

const Home = () => {
  return (
    <div id="Home" >
      <div id="Home__1">
        <h1>
          Get Fresh<span>Food</span>
          <br />
          in a Easy Way
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
          reiciendis quaerat nobis deleniti amet non inventore. Reprehenderit
          recusandae voluptatibus minus tenetur itaque numquam cum quos dolorem
          maxime. Quas, quaerat nisi. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Cumque facilis, quaerat cupiditate nulla quibusdam
          quo sunt esse tempore inventore vel voluptate, amet laudantium
          adipisci veniam nihil quam molestiae omnis mollitia.
        </p>
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Order Now</span>
        </button>
      </div>
      <img src="./img/main_img.png" alt="" />
    </div>
  );
};

export default Home;
