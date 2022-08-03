import React, { useRef } from "react";
import TypeAnimation from 'react-type-animation';
import emailjs from '@emailjs/browser';


import imgBack from "../../../src/images/mailz.jpeg";
import ScreenHeading from "../../utilitys/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilitys/scrollService";
import Animations from "../../utilitys/Animations";
import Footer from "../../components/Footer/Footer";
import "./ContactMe.css";

export default function ContactUs(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_k1ml1d9', 'template_rn12bfn', form.current, "nbD-qGep0doQ6e3no")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
          <TypeAnimation
      cursor={false}
      sequence={["Get In Touch 📧", 1000, ""]} />
          </h2>{" "}
          <a href="https://github.com/CodyAskew9">
            <i className="fa fa-github-square" />
          </a>
          <a href="https://www.linkedin.com/in/codyaskew/">
            <i className="fa fa-linkedin-square" />
          </a>
         
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form ref={form} onSubmit={sendEmail}>

            <label htmlFor="name">Name</label>
            <input type="text"  name={"user_name"} />

            <label htmlFor="email">Email</label>
            <input type="email" name={"user_email"} />

            <label htmlFor="message">Message</label>
            <textarea  name="message"  />

            <div className="send-btn">
              <button type="submit" value="send">
                send
                <i className="fa fa-paper-plane" />
                 
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
