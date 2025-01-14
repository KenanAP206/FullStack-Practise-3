import React from 'react'
import './Navbar.css'
import { FaSearch, FaUser, FaRegHeart, FaShoppingCart } from 'react-icons/fa'
import { IoChevronDownSharp } from "react-icons/io5";
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>
  
      <div className="top_nav">
        <div className="container">
          <div className="top_nav_content">
            <div className="free_shipping">
              Free shipping on all u.s orders over $50
            </div>
            <div className="top_nav_right">

              <div className="currency_select">
                <select>
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="gbp">GBP</option>
                </select>
              </div>

              <div className="language_select">
                <select>
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                </select>
              </div>

              <div className="account">
                <ul>
                  <li>
                    <a href="#">My Account <IoChevronDownSharp  /></a>
                    <ul>
                      <li><a href="#">Sign In</a></li>
                      <li><a href="#">Register</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="main_nav">
        <div className="container">
          <div className="main_nav_content">
            <div className="logo">
              <NavLink to="/">colo<span>shop</span></NavLink>
            </div>
            <div className="main_menu">
              <ul>
                <li><NavLink to="/">home</NavLink></li>
                <li><NavLink to="/add">Add</NavLink></li>
                <li><a href="#">promotion</a></li>
                <li><a href="#">pages</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">contact</a></li>
              </ul>
            </div>

            <div className="right_menu">
              <ul>
                <li className="search">
                  <a href="#"><FaSearch /></a>
                </li>
                <li className="user">
                  <a href="#"><FaUser /></a>
                </li>

                <li className="cart">
                  <NavLink to="/basket">
                    <FaShoppingCart />
                    <span className="cart_count">0</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
