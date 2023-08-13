import React from "react";
import Chef from "../componants/Chef";
const Team = () => {
  return (
    <div id="Team">
      <h1>
        Our <span>Team</span>
      </h1>
      <div id="Team__1">
        <Chef img="./img/chef1.png" />
        <Chef img="./img/chef2.png" />
        <Chef img="./img/chef3.jpg" />
        <Chef img="./img/chef4.jpg" />
      </div>
    </div>
  );
};

export default Team;
