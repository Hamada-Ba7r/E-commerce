import React from "react";
import "./footer.css";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import img1 from "../../images/footer visa/1.png";
import img2 from "../../images/footer visa/2.png";
import img3 from "../../images/footer visa/3.png";
import img4 from "../../images/footer visa/4.png";
import img5 from "../../images/footer visa/5.png";
import img6 from "../../images/footer visa/6.png";
const Footer = () => {
  return (
    <footer>
      <div className=" container">
        <div className="top-footer">
          <div className="left-ico">
            <MdOutlineShoppingCartCheckout className=" text-primary i" />
            <h3>Shop Grids</h3>
          </div>
          <div>
            <h2>Subscribe to our Newsletter</h2>
            <h4>Get all the latest information, Sales and Offers.</h4>
          </div>
          <div>
            <input type="text" placeholder="Email Addess...." />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
        <hr />
        <div className="midel-footer">
          <div className="info">
            <h3>Bravo Company</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod
              exercitationem ea, deserunt accusamus esse sequi in sint,
              molestiae modi laboriosam corporis nemo! Quidem, totam unde
              cupiditate natus doloribus est?
            </p>
          </div>
          <div className="coshal-icon">
            <h3>Useful Links</h3>
            <div>
              <CiFacebook className="a" />
              <CiTwitter className="a" />
              <FaInstagram className="a" />
              <FaWhatsapp className="a" />
              <FaYoutube className="a" />
            </div>
          </div>
          <div className="social">
            <h3>Social Media</h3>
            <div>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Shop</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <hr />
        <div className="button-footer">
          <p>Copyright by@Bravo Team - 2024</p>
          <div className="img-footer">
            <img src={img1} alt="visa" />
            <img src={img2} alt="visa" />
            <img src={img3} alt="visa" />
            <img src={img4} alt="visa" />
            <img src={img5} alt="visa" />
            <img src={img6} alt="visa" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
