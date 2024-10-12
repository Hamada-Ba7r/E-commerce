import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="container">
      <div className="head">
        <div className=" left-head">
          <h2>No restocking fee ($35 savings)</h2>
          <h3>M75 Sport Watch</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
            incididunt ut labore dolore magna aliqua.
          </p>
          <h3>Now Only $320.99</h3>
          <button className="btn btn-primary">Shop Now</button>
        </div>
        <div className="right-head">
          <div className="top-right">
            <h2>New line required</h2>
            <h3>iPhone 12 Pro Max</h3>
            <h3>$259.99</h3>
          </div>
          <div className="button-right">
            <h2>Weekly Sale!</h2>
            <h3>Saving up to 50% off all online store items this week.</h3>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
