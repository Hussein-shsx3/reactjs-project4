import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div id="footer">
      <div className="contact">
        <h1>Location</h1>
        <p>Sri Lanka</p>
        <p>USA</p>
        <p>India</p>
        <p>Japan</p>
        <p>Italy</p>
      </div>

      <div className="tag">
        <h1>Quick Link</h1>
        <Link href="/" className="center">
          Home
        </Link>
        <Link href="/" className="center">
          About
        </Link>
        <Link href="/" className="center">
          Menu
        </Link>
        <Link href="/" className="center">
          Gallary
        </Link>
        <Link href="/" className="center">
          Order
        </Link>
      </div>

      <div className="tag">
        <h1>Contact</h1>
        <p>+94 12 3456 789</p>
        <p>+94 25 5568456</p>
        <p>johndeo123@gmail.com</p>
        <p>foodshop123@gmail.com</p>
      </div>

      <div className="tag">
        <h1>Our Service</h1>
        <p>Fast Delivery</p>
        <p>Easy Payments</p>
        <p>24 x 7 Service</p>
      </div>

      <div className="end">
        <h1>Follows</h1>
        <div className="icons">
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
      </div>
    </div>
  );
};

export default Footer;
