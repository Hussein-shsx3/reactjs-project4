import React from "react";
import Product from "../componants/product";
import { Data } from "../componants/Data";
const Menu = () => {
  const dataShow = Data.map((el) => (
    <Product img={el.img} title={el.title} disc={el.disc} price={el.price} />
  ));
  return (
    <div id="Menu">
      <h1>
        Our <span>Menu</span>
      </h1>
      <div id="Menu__1">
        {dataShow}
      </div>
    </div>
  );
};

export default Menu;
