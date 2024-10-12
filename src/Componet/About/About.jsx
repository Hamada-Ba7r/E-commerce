import "./about.css";
import NumberCounter from "number-counter";
import img1 from "../../images/team/01.jpg";
import img2 from "../../images/team/02.jpg";
import img3 from "../../images/team/03.jpg";
import img4 from "../../images/team/04.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const About = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="about-us">
      <div className="title">
        <h1 className=" text-primary">About US</h1>
      </div>
      <div className="about container">
        <div className="number-count">
          <div>
            <NumberCounter
              start={0}
              end={3000}
              delay={2}
              className="i"
              postFix="+"
            ></NumberCounter>
            <h3>Students</h3>
          </div>
          <div>
            <NumberCounter
              start={0}
              end={1800}
              delay={2}
              className="i"
              postFix="+"
            ></NumberCounter>
            <h3>Instrutors</h3>
          </div>
          <div>
            <NumberCounter
              start={0}
              end={2000}
              delay={2}
              className="i"
              postFix="+"
            ></NumberCounter>
            <h3>Rooms</h3>
          </div>
          <div>
            <NumberCounter
              start={0}
              end={100}
              delay={3}
              className="i"
              postFix="%"
            ></NumberCounter>
            <h3>Successfully</h3>
          </div>
        </div>
      </div>
      <div className="teams">
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
              <FaFacebook className="face" />
              <FaInstagram className="insta" />
              <FaTwitter className="twitt" />
            </div>
          </div>
          <div className="caracter ">
            <img src={img2} alt="team" />
            <h3 className=" text-primary">Sami Azab</h3>
            <h4>Backend Developer</h4>
            <div className="icon-midey">
              <FaFacebook className="face" />
              <FaInstagram className="insta" />
              <FaTwitter className="twitt" />
            </div>
          </div>
          <div className="caracter ">
            <img src={img3} alt="team" />
            <h3 className=" text-primary">Amal Ibrahim</h3>
            <h4>Frontend Developer</h4>
            <div className="icon-midey">
              <FaFacebook className="face" />
              <FaInstagram className="insta" />
              <FaTwitter className="twitt" />
            </div>
          </div>
          <div className="caracter ">
            <img src={img4} alt="team" />
            <h3 className=" text-primary">Esraa Adel</h3>
            <h4>Fullstack Developer</h4>
            <div className="icon-midey">
              <FaFacebook className="face" />
              <FaInstagram className="insta" />
              <FaTwitter className="twitt" />
            </div>
          </div>
        </div>
      </div>
      <div className="client-says">
        <Slider className="slider" {...settings}>
          <div>
            <img src={img1} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              enim doloribus soluta aliquam magnam ea dolor facilis, nostrum
              quos sapiente eligendi hic itaque illo quisquam corporis sequi
              nihil perferendis. Pariatur.
            </p>
            <div>
              <FaStar className= "star"/>
              <FaStar className= "star"/>
              <FaStar className= "star"/>
              <FaStar className= "star"/>
              <FaStar className= "star"/>
            </div>
            <h2>Ahmed micro</h2>
          </div>
          <div>
            <img src={img2} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quaerat tempore veritatis velit eligendi praesentium
              natus nisi doloremque dolores sunt. Ad accusamus deserunt iste
              facilis esse atque fuga quod eveniet?
            </p>
            <div>
              <FaStar className= "star"/>
              <FaStar className= "star"/>
              <FaStar className= "star"/>
              <FaStar className= "star"/>
              <FaStar className= "star"/>
            </div>
            <h2>Ahmed micro</h2>
          </div>
          <div>
            <img src={img3} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quaerat tempore veritatis velit eligendi praesentium
              natus nisi doloremque dolores sunt. Ad accusamus deserunt iste
              facilis esse atque fuga quod eveniet?
            </p>
            <div>
              <FaStar className= "star"/>
              <FaStar className= "star"/>
              <FaStar className= "star"/>
              <FaStar className= "star"/>
              <FaStar className= "star"/>
            </div>
            <h2>Ahmed micro</h2>
          </div>
          <div>
            <img src={img4} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quaerat tempore veritatis velit eligendi praesentium
              natus nisi doloremque dolores sunt. Ad accusamus deserunt iste
              facilis esse atque fuga quod eveniet?
            </p>
            <div>
              <FaStar className= "star"/>
              <FaStar className= "star"/>
              <FaStar className= "star"/>
              <FaStar className= "star"/>
              <FaStar className= "star"/>
            </div>
            <h2>Ahmed micro</h2>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default About;
