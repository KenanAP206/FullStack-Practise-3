import React from 'react'
import './Footer.css'
import { FaHeart } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_newsletter">
        <div className="container">
          <div className="newsletter_content">
          <div className="newsletter_left">
          <h6>Newsletter</h6>
          <p>Subscribe to our newsletter and get 20% off your first purchase</p>
          </div>
            <div className="newsletter_form">
              <input type="email" placeholder="Your email" />
              <button>subscribe</button>
            </div>
          </div>
        </div>
      </div>


      <div className="footer_bottom">
        <div className="container">
          <div className="footer_content">
            <div className="footer_links">
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div className="footer_copyright">
              <p>©2018 All Rights Reserverd. This template is made with <FaHeart /> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer