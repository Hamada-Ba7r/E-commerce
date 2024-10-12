import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section>
      <div className="">
        <div className="title">
          <h1 className=" text-primary">Contact Us</h1>
        </div>
        <div className="contact container">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6870.216368034237!2d31.491989358987098!3d30.574491285865996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f058e039587d%3A0x5dbce3320290d436!2z2YPZgdixINmF2K3ZhdivINit2LPZitmG2Iwg2KfZhNiy2YLYp9iy2YrZgtiMINmF2K3Yp9mB2LjYqSDYp9mE2LTYsdmC2YrYqQ!5e0!3m2!1sar!2seg!4v1710861561863!5m2!1sar!2seg"
              width="100%"
              height="400"
            ></iframe>
          </div>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="number" placeholder="Your Phone" />
            <textarea
              name=""
              placeholder="Your Massage"
              cols="30"
              rows="10"
            ></textarea>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
