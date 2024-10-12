import React from "react";
import "./popular.css";
import img1 from "../../../images/brands/01.png";
import img2 from "../../../images/brands/02.png";
import img3 from "../../../images/brands/03.png";
import img4 from "../../../images/brands/04.png";
import img5 from "../../../images/brands/05.png";
import img6 from "../../../images/brands/06.png";
const Popular = () => {
  return (
    <section className="Popular ">
      <div className="title">
        <h1 className=" text-primary">Popular Brands</h1>
      </div>
      <div className=" container">
         <div className="brands">
        <img src={img1} alt="brande" />
        <img src={img2} alt="brande" />
        <img src={img3} alt="brande" />
        <img src={img4} alt="brande" />
        <img src={img5} alt="brande" />
        <img src={img6} alt="brande" />
      </div>
      </div>
     
    </section>
  );
};

export default Popular;
