import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import contactlogo from "../../assets/contact.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [show, setShow] = React.useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <div className="navitem">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="action"
          >
            {" "}
            Home
          </Link>
          <Link
            to="skill"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="action"
          >
            About
          </Link>
          <Link
            to="works"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="action"
          >
            Portfolio
          </Link>
        </div>
      </div>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="desktopMenuBtn"
        activeClass="action"
      >
        <img src={contactlogo} alt="logo" className="desktopMenuImg" /> Contact
        Me
      </Link>

      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShow(!show)}
      />
      <div className="navMenu" style={{ display: show ? "flex" : "none" }}>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="action"
          className="listItem"
          onClick={() => setShow(false)}
        >
          {" "}
          Home
        </Link>
        <Link
          to="skill"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="action"
          className="listItem"
          onClick={() => setShow(false)}
        >
          About
        </Link>
        <Link
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="action"
          className="listItem"
          onClick={() => setShow(false)}
        >
          Portfolio
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="action"
          className="listItem"
          onClick={() => setShow(false)}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
