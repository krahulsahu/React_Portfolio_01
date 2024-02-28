import React from 'react'
import './Footer.css'
import Fb from '../../assets/facebook-icon.png'
import X from '../../assets/twitter.png'
import YT from '../../assets/youtube.png'
import Insta from '../../assets/instagram.png'



const Footer = () => {
  return (
      <section className="footer">
          <div className="socialmedialink">
              <img src={Fb} alt="" className="link" />
              <img src={X} alt="" className="link" />
              <img src={YT} alt="" className="link" />
              <img src={Insta} alt="" className="link" />
      </div>
      <footer className="footerItem" >
        Copyright  &copy; 2024 All rights reserved | Designed by Rahul Kumar
      </footer>
    </section>
  )
}

export default Footer
