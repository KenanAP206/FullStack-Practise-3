import React from 'react'
import './Blogs.css'
import { FaTruckMoving } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { WiTime9 } from "react-icons/wi";

function index() {
  return (
    <div>
      <section id='blogs'>
        <div className="blogs-up">
          <div className="blogs-up-info">
          <FaTruckMoving />
          <div className="bui-txt">
            <h5>free shipping</h5>
            <p>Suffered Alteration in Some Form</p>
          </div>
          </div>
          <div className="blogs-up-info">
          <BsCash />
          <div className="bui-txt">
            <h5>cach on delivery</h5>
            <p>The Internet Tend To Repeat</p>
          </div>
          </div>
          <div className="blogs-up-info">
          <FaArrowRotateLeft />
          <div className="bui-txt">
            <h5>45 days return</h5>
            <p>Making it Look Like Readable</p>
          </div>
          </div>
          <div className="blogs-up-info">
          <WiTime9 />
          <div className="bui-txt">
            <h5>opening all week</h5>
            <p>8AM - 09PM</p>
          </div>
          </div>
        </div>

        <div className="blogs-main">
          <h2>Latest Blogs</h2>
          <hr />
          <div className="blogs-cards">
            <div className="blogs-card">
              <img src="../../src/assets/Images/blog_1.jpg" alt="" />
              <div className="blogs-c-txt">
                <h3>Here are the trends I see coming this fall</h3>
                <p>by admin | dec 01, 2017</p>
                <a href="">Read more</a>
              </div>
            </div>
            <div className="blogs-card">
              <img src="../../src/assets/Images/blog_2.jpg" alt="" />
              <div className="blogs-c-txt">
                <h3>Here are the trends I see coming this fall</h3>
                <p>by admin | dec 01, 2017</p>
                <a href="">Read more</a>
              </div>
            </div>
            <div className="blogs-card">
              <img src="../../src/assets/Images/blog_3.jpg" alt="" />
              <div className="blogs-c-txt">
                <h3>Here are the trends I see coming this fall</h3>
                <p>by admin | dec 01, 2017</p>
                <a href="">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default index
