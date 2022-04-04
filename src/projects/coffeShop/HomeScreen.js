import React from "react";
import "./style.css";
import logo from "../coffeShop/assets/images/logo.png";
import item1 from "../coffeShop/assets/images/cart-item-1.png";
import item2 from "../coffeShop/assets/images/cart-item-2.png";
import item3 from "../coffeShop/assets/images/cart-item-3.png";
import item4 from "../coffeShop/assets/images/cart-item-4.png";
export const HomeScreen = () => {
  let navbar = document.querySelector(".navbar");

  document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
  };

  let searchForm = document.querySelector(".search-form");

  document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");

    cartItem.classList.remove("active");
  };

  let cartItem = document.querySelector(".cart-items-container");

  document.querySelector("#cart-btn").onclick = () => {
    cartItem.classList.toggle("active");
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
  };

  window.onscroll = () => {
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
  };

  return (
    <div>
      <header className="header">
        <a href="abcd.com" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
        </nav>
        <div className="icons">
          <div className="fas fa-search" id="search-btn"></div>
          <div className="fas fa-shopping-cart" id="cart-btn"></div>
          <div className="fas fa-bars" id="menu-btn"></div>
        </div>

        <div className="search-form">
          <input
            type="search"
            name=""
            id="search-box"
            placeholder="Search here..."
          />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container">
          <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src={item1} alt="" />
            <div className="content">
              <h3>cart item 01</h3>
              <div className="price">$15.99/-</div>
            </div>
          </div>

          <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src={item2} alt="" />
            <div className="content">
              <h3>cart item 02</h3>
              <div className="price">$15.99/-</div>
            </div>
          </div>

          <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src={item3} alt="" />
            <div className="content">
              <h3>cart item 03</h3>
              <div className="price">$15.99/-</div>
            </div>
          </div>

          <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src={item4} alt="" />
            <div className="content">
              <h3>cart item 04</h3>
              <div className="price">$15.99/-</div>
            </div>
          </div>
          <a href="abcdefg.com" className="btn">
            checkout now
          </a>
        </div>
      </header>

      {/* Home section starts */}

      {/* Home section ends */}
    </div>
  );
};
