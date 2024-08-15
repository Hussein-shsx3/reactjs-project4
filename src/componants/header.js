import React from "react";
import "./header.css";
const Header = () => {
  function m() {
    const nav = document.getElementById("res");
    nav.classList.add("act");
    document.getElementById("bar").style.display = "none";
  }
  function c() {
    const nav = document.getElementById("res");
    nav.classList.remove("act");
    document.getElementById("bar").style.display = "flex";
  }
  return (
    <header>
      <img src="./img/logo.png" alt="" />
      <div id="res">
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Menu">Menu</a>
          </li>
          <li>
            <a href="#Gallary">Gallary</a>
          </li>
          <li>
            <a href="#Review">Review</a>
          </li>
          <li>
            <a href="#Order">Order</a>
          </li>
        </ul>
        <div id="icons">
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-user"></i>
        </div>
        <i className="fa-solid fa-xmark" onClick={c}></i>
      </div>
      <i id="bar" className="fas fa-outdent" onClick={m}></i>
    </header>
  );
};

export default Header;
