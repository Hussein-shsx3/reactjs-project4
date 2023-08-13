import React from "react";
import "./users.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
const Users = (props) => {
  return (
    <div id="User">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <Stack spacing={1}>
        <Rating name="size-medium" defaultValue="3" size="small" readOnly />
      </Stack>
      <div className="social_link">
        <a href="/">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        quam facere blanditiis in fugiat tempore necessitatibus aliquid. Id
        adipisci, rem corrupti asperiores distinctio delectus quae quia tenetur
        totam laboriosam quam. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Dolores soluta ullam ipsa voluptates repudiandae
        dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo
        pariatur. Fuga aperiam impedit illo atque repellendus!
      </p>
    </div>
  );
};

export default Users;
