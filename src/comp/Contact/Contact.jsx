import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_gtzzovi", "template_s8uxi1o", form.current, {
        publicKey: "jCh1cw5w09H-aN564ReLN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="Contact" id="contact">
      <h2 className="contactTitle">Get in touch</h2>
      <p className="contactParagraph">
        Feel free to contact me for any questions or collaboration
        opportunities! I am open to discussing{" "}
      </p>
      <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="user_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="user_email"
        />
        <textarea
          name="message"
          rows="3"
          placeholder=" Your Message"
          className="msg"
        ></textarea>

        <button
          type="submit"
          value="send"
          className="submitbtn"
          onSubmit={{sendEmail}}
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
