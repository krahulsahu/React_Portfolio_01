import React from "react";
import "./Skill.css";
import UIimg from "../../assets/ui-design.png";
import Webimg from "../../assets/website-design.png";
import Appimg from "../../assets/app-design.png";

const Skill = () => {
  return (
    <section id="skill" >
      <h2 className="skillTitle">What I do</h2>
      <p className="skillpara">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, sint
        veritatis explicabo, facere obcaecati in iusto voluptas quisquam ab
        ullam modi distinctio, temporibus odio possimus ipsum? Alias nulla in
        nihil!
      </p>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIimg} alt="" />
          <div className="textContent">
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, hic?
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Webimg} alt="" />
          <div className="textContent">
            <h3>Website Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, hic?
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Appimg} alt="" />
          <div className="textContent">
            <h3>App Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, hic?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
