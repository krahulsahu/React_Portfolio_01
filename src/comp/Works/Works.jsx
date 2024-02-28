import React from 'react'
import './Works.css'
import Img1 from '../../assets/portfolio-1.png'
import Img2 from "../../assets/portfolio-2.png";
import Img3 from "../../assets/portfolio-3.png";
import Img4 from "../../assets/portfolio-4.png";
import Img5 from "../../assets/portfolio-5.png";
import Img6 from "../../assets/portfolio-6.png";


const Works = () => {
  return (
    <div id='works'>
        <h1 className='worksTitle'>My Portfolio</h1>
        <p className="info">Here are some of my projects that I have worked on: </p>
          <div className="cart">
              <img src={Img5} alt="" className="worksImg" />
              <img src={Img3} alt="" className="worksImg" />
              <img src={Img4} alt="" className="worksImg" />
              <img src={Img1} alt="" className="worksImg" />
              <img src={Img6} alt="" className="worksImg" />
              <img src={Img2} alt="" className="worksImg" />
          </div>
          <button className="worksbtn">See more...</button>
    </div>
  )
}

export default Works
