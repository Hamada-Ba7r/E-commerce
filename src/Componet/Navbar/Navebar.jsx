import React from "react";
import "./navbar.css";
import { GiShoppingCart } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { RiShoppingBag2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const Navebar = ({ cartItems }) => {
  return (
    <nav>
      <div className="nav-left">
        <GiShoppingCart className="left-icon" />
      </div>
      <div className="nav-midel">
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/Shop" className="link">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/Services" className="link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <FaHeart className="heart" />
        <Link to="/carts">
          <div className=" position-relative">
            <RiShoppingBag2Line className="cart" />
            <span className=" position-absolute text-primary">
              {cartItems.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navebar;
