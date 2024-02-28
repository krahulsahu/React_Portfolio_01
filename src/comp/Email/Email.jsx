import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
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
    <form ref={form} onSubmit={sendEmail} className="form">
      <label>Name</label>
      <input type="text" name="user_name" className="name" />
      <label>Email</label>
      <input type="email" name="user_email" className="email" />
      <label>Message</label>
      <textarea name="message" className="msg" />
      <input type="submit" value="Send" className="submitbtn" />
    </form>
  );
};

export default  ContactUs;