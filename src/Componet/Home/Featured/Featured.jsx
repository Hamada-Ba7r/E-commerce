import React from "react";
import "./featured.css";
import img1 from "../../../images/featured-categories/fetured-item-1.png";
import img2 from "../../../images/featured-categories/fetured-item-2.png";
import img3 from "../../../images/featured-categories/fetured-item-3.png";
import img4 from "../../../images/featured-categories/fetured-item-4.png";
import img5 from "../../../images/featured-categories/fetured-item-5.png";
import img6 from "../../../images/featured-categories/fetured-item-6.png";
const Featured = () => {
  return (
    <div className="featureds">
      <div className="title">
        <h1 className=" text-primary">Featured Categories</h1>
        <p className="">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="featured row">
        <div className="col-lg-4 col-md-6 col-sm-12 gank">
          <div>
            <h3>TV & Audios</h3>
            <h3>Smart Television</h3>
            <h3>QLED TV </h3>
            <h3>Audios</h3>
            <h3>Headphones</h3>
          </div>
          <div>
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 gank">
          <div>
            <h3>TV & Audios</h3>
            <h3>Smart Television</h3>
            <h3>QLED TV </h3>
            <h3>Audios</h3>
            <h3>Headphones</h3>
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 gank">
          <div>
            <h3>TV & Audios</h3>
            <h3>Smart Television</h3>
            <h3>QLED TV </h3>
            <h3>Audios</h3>
            <h3>Headphones</h3>
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 gank">
          <div>
            <h3>TV & Audios</h3>
            <h3>Smart Television</h3>
            <h3>QLED TV </h3>
            <h3>Audios</h3>
            <h3>Headphones</h3>
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 gank">
          <div>
            <h3>TV & Audios</h3>
            <h3>Smart Television</h3>
            <h3>QLED TV </h3>
            <h3>Audios</h3>
            <h3>Headphones</h3>
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 gank">
          <div>
            <h3>TV & Audios</h3>
            <h3>Smart Television</h3>
            <h3>QLED TV </h3>
            <h3>Audios</h3>
            <h3>Headphones</h3>
          </div>
          <div>
            <img src={img6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
