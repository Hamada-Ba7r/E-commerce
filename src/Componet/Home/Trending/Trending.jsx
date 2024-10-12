import React from "react";
import "./trending.css";
import img1 from "../../../images/products/product-1.jpg";
import img2 from "../../../images/products/product-2.jpg";
import img3 from "../../../images/products/product-3.jpg";
import img4 from "../../../images/products/product-4.jpg";
import img5 from "../../../images/products/product-5.jpg";
import img6 from "../../../images/products/product-6.jpg";
import img7 from "../../../images/products/product-7.jpg";
import img8 from "../../../images/products/product-8.jpg";
import { FaStar } from "react-icons/fa";
const Trending = () => {
  return (
    <section className="trending ">
      <div className="title">
        <h1 className=" text-primary">Trending Product</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="cards container">
        <div className="card shadow">
          <div>
            <img src={img1} alt="" />
          </div>
          <div className="info">
            <h4>Watches</h4>
            <h5>Xiaomi Mi Band 5</h5>
            <div className="star-icon">
              <div>
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
              <span>4.0 Review(s)</span>
            </div>
          </div>
          <h2 className=" text-primary">$350.00</h2>
        </div>
        <div className="card shadow">
          <div>
            <img src={img2} alt="" />
          </div>
          <div className="info">
            <h4>Speaker</h4>
            <h5>Big Power Sound Speaker</h5>
            <div className="star-icon">
              <div>
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
              <span>4.0 Review(s)</span>
            </div>
          </div>
          <h2 className=" text-primary">$275.00</h2>
        </div>
        <div className="card shadow">
          <div>
            <img src={img3} alt="" />
          </div>
          <div className="info">
            <h4>Camera</h4>
            <h5>WiFi Security Camera</h5>
            <div className="star-icon">
              <div>
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
              <span>4.0 Review(s)</span>
            </div>
          </div>
          <h2 className=" text-primary">$399.00</h2>
        </div>
        <div className="card shadow">
          <div>
            <img src={img4} alt="" />
          </div>
          <div className="info">
            <h4>Phones</h4>
            <h5>iphone 6x plus</h5>
            <div className="star-icon">
              <div>
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
              <span>4.0 Review(s)</span>
            </div>
          </div>
          <h2 className=" text-primary">$400.00</h2>
        </div>
        <div className="card shadow">
          <div>
            <img src={img5} alt="" />
          </div>
          <div className="info">
            <h4>Headphones</h4>
            <h5>Wireless Headphones</h5>
            <div className="star-icon">
              <div>
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
              <span>4.0 Review(s)</span>
            </div>
          </div>
          <h2 className=" text-primary">$350.00</h2>
        </div>
        <div className="card shadow">
          <div>
            <img src={img6} alt="" />
          </div>
          <div className="info">
            <h4>Speaker</h4>
            <h5>Mini Bluetooth Speaker</h5>
            <div className="star-icon">
              <div>
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
              <span>4.0 Review(s)</span>
            </div>
          </div>
          <h2 className=" text-primary">$70.00</h2>
        </div>
        <div className="card shadow">
          <div>
            <img src={img7} alt="" />
          </div>
          <div className="info">
            <h4>Headphones</h4>
            <h5>PX7 Wireless Headphones</h5>
            <div className="star-icon">
              <div>
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
              <span>4.0 Review(s)</span>
            </div>
          </div>
          <h2 className=" text-primary">$100.00</h2>
        </div>
        <div className="card shadow">
          <div>
            <img src={img8} alt="" />
          </div>
          <div className="info">
            <h4>Laptop</h4>
            <h5>Apple MacBook Air</h5>
            <div className="star-icon">
              <div>
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
              <span>4.0 Review(s)</span>
            </div>
          </div>
          <h2 className=" text-primary">$899.00</h2>
        </div>
      </div>
    </section>
  );
};

export default Trending;
