import React from "react";
import "./product.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
const Product = (props) => {
  const [value, setValue] = React.useState(2);
  return (
    <div id="Product">
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.disc} </p>
      <h4>{props.price}</h4>
      <Box>
        <Rating
          name="simple-controlled"
          value={value}
          color="error"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <button>
        Order Now
        <div class="arrow-wrapper">
          <div class="arrow"></div>
        </div>
      </button>
      <i class="fa-solid fa-heart"></i>
    </div>
  );
};

export default Product;
