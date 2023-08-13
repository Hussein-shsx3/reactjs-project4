import React from "react";
import Users from "../componants/users";
const Review = () => {
  return (
    <div id="Review">
      <h1>
        Customer <span>Review</span>
      </h1>
      <div id="Review__1">
        <Users img="./img/review_1.png" name="Jon Watson"/>
        <Users img="./img/review_2.png" name="Jon Watson"/>
        <Users img="./img/review_3.png" name="Jon Watson"/>
        <Users img="./img/review_4.png" name="Jon Watson"/>
      </div>
    </div>
  );
};

export default Review;
