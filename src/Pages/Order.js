import React from "react";

const Order = () => {
  return (
    <div id="Order">
      <h1>
        <span>Order</span> Now
      </h1>
      <div id="Order__1">
        <img src="./img/order.jpg" alt="" />
        <form>
          <div id="in">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div id="in">
            <label htmlFor="name">Email</label>
            <input type="text" placeholder="Your Email" />
          </div>
          <div id="in">
            <label htmlFor="name">Number</label>
            <input type="text" placeholder="Your Number" />
          </div>
          <div id="in">
            <label htmlFor="name">How Much</label>
            <input type="number" />
          </div>
          <div id="in">
            <label htmlFor="name">Youe Order</label>
            <input type="text" placeholder="Your Order" />
          </div>
          <div id="in">
            <label htmlFor="name">Addres</label>
            <input type="text" placeholder="Your Addres" />
          </div>
          <button>
            Order Now
            <div class="arrow-wrapper">
              <div class="arrow"></div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
