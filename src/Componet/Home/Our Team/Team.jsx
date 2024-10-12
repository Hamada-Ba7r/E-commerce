import React from "react";
import "./team.css";
import img1 from "../../../images/team/01.jpg";
import img2 from "../../../images/team/02.jpg";
import img3 from "../../../images/team/03.jpg";
import img4 from "../../../images/team/04.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Team = () => {
  return (
    <section className="teams">
      <div className="title">
        <h1 className=" text-primary">Our Team</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="team">
        <div className="caracter ">
          <img src={img1} alt="team" />
          <h3 className=" text-primary">Amal Ibrahim</h3>
          <h4>Frontend Developer</h4>
          <div className="icon-midey">
            <FaFacebook  className="face"/>
            <FaInstagram  className="insta"/>
            <FaTwitter className="twitt" />
          </div>
        </div>
        <div className="caracter ">
          <img src={img2} alt="team" />
          <h3 className=" text-primary">Sami Azab</h3>
          <h4>Backend Developer</h4>
          <div className="icon-midey">
            <FaFacebook  className="face"/>
            <FaInstagram className="insta" />
            <FaTwitter className="twitt" />
          </div>
        </div>
        <div className="caracter ">
          <img src={img3} alt="team" />
          <h3 className=" text-primary">Amal Ibrahim</h3>
          <h4>Frontend Developer</h4>
          <div className="icon-midey">
            <FaFacebook  className="face"/>
            <FaInstagram  className="insta"/>
            <FaTwitter  className="twitt"/>
          </div>
        </div>
        <div className="caracter ">
          <img src={img4} alt="team" />
          <h3 className=" text-primary">Esraa Adel</h3>
          <h4>Fullstack Developer</h4>
          <div className="icon-midey">
            <FaFacebook  className="face"/>
            <FaInstagram  className="insta"/>
            <FaTwitter  className="twitt"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
