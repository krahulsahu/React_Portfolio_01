import React from "react";
import "./About.css";
import Myimage from "../../assets/profile.png";
import hire from '../../assets/hireme.png'

const About = () => {
    return (
      <div className="About" id="about">
        <div className="textArea">
          <span className="hello">Hello</span>
          <span className="intro">
            I'm <span className="name">Rahul</span>
          </span>
          <span>Website Developer</span>
          <p className="pragraph">
            This ia paragraph section Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ratione nihil iusto ipsam deserunt nostrum
            reiciendis.
          </p>
          <a href="#" className="hiring">
            {" "}
            <img src={hire} alt="hire" />
            Hire me
          </a>
        </div>
        <div className="imageArea">
          <img src={Myimage} alt="Profile" />
        </div>
      </div>
    );
};

export default About;
