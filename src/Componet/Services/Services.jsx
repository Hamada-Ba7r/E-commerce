import React from "react";
import "./services.css";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineImageNotSupported } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";

const Services = () => {
  return (
    <section className="services-tsts">
      <div className="title">
        <h1 className=" text-primary">Our Services</h1>
      </div>
      <section className="services">
        <div className="cheld-servic shadow">
          <FaShippingFast className="icon text-primary" />
          <h3>Free Shipping</h3>
        </div>
        <div className="cheld-servic shadow">
          <MdOutlineImageNotSupported className="icon text-primary" />
          <h3>24/7 Support.</h3>
        </div>
        <div className="cheld-servic shadow">
          <MdOutlinePayment className="icon text-primary" />
          <h3>Online Payment.</h3>
        </div>
        <div className="cheld-servic shadow">
          <TfiReload className="icon text-primary" />
          <h3>Easy Return.</h3>
        </div>
      </section>
    </section>
  );
};

export default Services;
