import React, { useEffect } from "react";
import "./style.css";
import logo from "../coffeShop/assets/images/logo.png";
import item1 from "../coffeShop/assets/images/cart-item-1.png";
import item2 from "../coffeShop/assets/images/cart-item-2.png";
import item3 from "../coffeShop/assets/images/cart-item-3.png";
import item4 from "../coffeShop/assets/images/cart-item-4.png";
import about from "../coffeShop/assets/images/about-img.jpeg";

import menu1 from "../coffeShop/assets/images/menu-1.png";
import menu2 from "../coffeShop/assets/images/menu-2.png";
import menu3 from "../coffeShop/assets/images/menu-3.png";
import menu4 from "../coffeShop/assets/images/menu-4.png";
import menu5 from "../coffeShop/assets/images/menu-5.png";
import menu6 from "../coffeShop/assets/images/menu-6.png";

import product1 from "../coffeShop/assets/images/product-1.png";
import product2 from "../coffeShop/assets/images/product-2.png";
import product3 from "../coffeShop/assets/images/product-3.png";

import quote from "../coffeShop/assets/images/quote-img.png";

import blog1 from "../coffeShop/assets/images/blog-1.jpeg";
import blog2 from "../coffeShop/assets/images/blog-2.jpeg";
import blog3 from "../coffeShop/assets/images/blog-3.jpeg";

export const HomeScreen = () => {
  useEffect(() => {
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
  }, []);

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
      <section className="home" id="home">
        <div className="content">
          <h3>fresh coffe in the morning</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
            praesentium quo optio unde ipsum, vitae facere modi voluptatum? Quis
            ut laudantium aut.
          </p>
          <a href="abcd.com" className="btn">
            get yours now
          </a>
        </div>
      </section>
      {/* Home section ends */}
      {/* About section starts */}

      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us{" "}
        </h1>
        <div className="row">
          <div className="image">
            <img src={about} alt="about" />
          </div>
          <div className="content">
            <h3>What makes our coffee special?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              voluptates, eos fuga quis amet repudiandae voluptate dicta
              mollitia. Quae exercitationem consequuntur voluptatibus impedit
              totam. Repellendus a iste at possimus maiores!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              dignissimos distinctio mollitia optio. Voluptatibus, itaque eaque?
              Ducimus cupiditate minima inventore!
            </p>
            <a href="abcd.com" className="btn">
              Learn more
            </a>
          </div>
        </div>
      </section>
      {/* About section ends */}
      {/* Menu section starts */}
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={menu1} alt="menu" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <a href="abcd.com" className="btn">
              add to cart
            </a>
          </div>

          <div className="box">
            <img src={menu2} alt="menu" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <a href="abcd.com" className="btn">
              add to cart
            </a>
          </div>

          <div className="box">
            <img src={menu3} alt="menu" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <a href="abcd.com" className="btn">
              add to cart
            </a>
          </div>

          <div className="box">
            <img src={menu4} alt="menu" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <a href="abcd.com" className="btn">
              add to cart
            </a>
          </div>

          <div className="box">
            <img src={menu5} alt="menu" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <a href="abcd.com" className="btn">
              add to cart
            </a>
          </div>

          <div className="box">
            <img src={menu6} alt="menu" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <a href="abcd.com" className="btn">
              add to cart
            </a>
          </div>
        </div>
      </section>
      {/* Menu section ends */}
      {/* Products section starts */}
      <section className="products" id="products">
        <h1 className="heading">
          our <span>products</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="icons">
              <a href="abcd.com" className="fas fa-shopping-cart">
                {" "}
              </a>
              <a href="abcd.com" className="fas fa-heart">
                {" "}
              </a>
              <a href="abcd.com" className="fas fa-eye">
                {" "}
              </a>
            </div>
            <div className="image">
              <img src={product1} alt="product1" />
            </div>
            <div className="content">
              <h3>fresh coffee</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <a href="abcd.com" className="fas fa-shopping-cart">
                {" "}
              </a>
              <a href="abcd.com" className="fas fa-heart">
                {" "}
              </a>
              <a href="abcd.com" className="fas fa-eye">
                {" "}
              </a>
            </div>
            <div className="image">
              <img src={product2} alt="product2" />
            </div>
            <div className="content">
              <h3>fresh coffee</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <a href="abcd.com" className="fas fa-shopping-cart">
                {" "}
              </a>
              <a href="abcd.com" className="fas fa-heart">
                {" "}
              </a>
              <a href="abcd.com" className="fas fa-eye">
                {" "}
              </a>
            </div>
            <div className="image">
              <img src={product3} alt="product3" />
            </div>
            <div className="content">
              <h3>fresh coffee</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Products section ends */}
      {/* Review section starts */}
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={quote} alt="quote" className="quote" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              expedita quo impedit incidunt ducimus, tempore veniam. Repellat
              facere veritatis quis reiciendis nihil, illo aspernatur.
            </p>
            <h3>john doe</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>

          <div className="box">
            <img src={quote} alt="quote" className="quote" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              expedita quo impedit incidunt ducimus, tempore veniam. Repellat
              facere veritatis quis reiciendis nihil, illo aspernatur.
            </p>
            <h3>john doe</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>

          <div className="box">
            <img src={quote} alt="quote" className="quote" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              expedita quo impedit incidunt ducimus, tempore veniam. Repellat
              facere veritatis quis reiciendis nihil, illo aspernatur.
            </p>
            <h3>john doe</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </section>
      {/* Review section ends */}
      {/* Contact section starts */}
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>contact</span> us
        </h1>
        <div className="row">
          <iframe
            className="map"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59394.751869155865!2d-104.91192432924302!3d21.50098215042497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842735d8893dcfdb%3A0x83784645f40c2d79!2sTepic%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1649181286490!5m2!1ses-419!2smx"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <form action="">
            <h3>get in touch</h3>
            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input type="text" name="" id="" placeholder="name" />
            </div>
            <div className="inputBox">
              <span className="fas fa-envelope"></span>
              <input type="email" name="" id="" placeholder="email" />
            </div>
            <div className="inputBox">
              <span className="fas fa-phone"></span>
              <input type="number" name="" id="" placeholder="number" />
            </div>
            <input type="submit" value="contact now" className="btn" />
          </form>
        </div>
      </section>
      {/* Contact section ends */}
      {/* Blog section starts */}
      <section className="blogs" id="blogs">
        <h1 className="heading">
          our <span>blogs</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={blog1} alt="blog1" />
            </div>
            <div className="content">
              <a href="abcd.com" className="title">
                tasty and refreshing coffee
              </a>
              <span>by Carlos / 21st may, 2021</span>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum
                aspernatur numquam ullam incidunt saepe tempore id temporibus ut
                nesciunt.
              </p>
              <a href="abcd.com" className="btn">
                read more
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog2} alt="blog2" />
            </div>
            <div className="content">
              <a href="abcd.com" className="title">
                tasty and refreshing coffee
              </a>
              <span>by Carlos / 21st may, 2021</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum
                aspernatur numquam ullam incidunt saepe tempore id temporibus ut
                nesciunt.
              </p>
              <a href="abcd.com" className="btn">
                read more
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog3} alt="blog3" />
            </div>
            <div className="content">
              <a href="abcd.com" className="title">
                tasty and refreshing coffee
              </a>
              <span>by Carlos / 21st may, 2021</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum
                aspernatur numquam ullam incidunt saepe tempore id temporibus ut
                nesciunt.
              </p>
              <a href="abcd.com" className="btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Blog section ends */}
      {/* Footer section starts */}
      <section className="footer">
        <div className="share">
          <a href="abcd.com" className="fab fa-facebook-f">
            {" "}
          </a>
          <a href="abcd.com" className="fab fa-twitter">
            {" "}
          </a>
          <a href="abcd.com" className="fab fa-instagram">
            {" "}
          </a>
          <a href="abcd.com" className="fab fa-linkedin">
            {" "}
          </a>
          <a href="abcd.com" className="fab fa-pinterest">
            {" "}
          </a>
        </div>
        <div className="links">
          <a href="abcd.com">home</a>
          <a href="abcd.com">about</a>
          <a href="abcd.com">menu</a>
          <a href="abcd.com">products</a>
          <a href="abcd.com">review</a>
          <a href="abcd.com">contact</a>
          <a href="abcd.com">blogs</a>
        </div>
        <div className="credit">
          created by <span>Carlos Valencia</span>
        </div>
      </section>
      {/* Footer section ends */}
    </div>
  );
};
