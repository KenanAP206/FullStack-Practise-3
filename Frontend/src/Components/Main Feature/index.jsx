import React from 'react'
import './MainFeature.css'
import Card from '../Card/index'
function index() {
  return (
    <div>
      <section id='mainfeature'>
        <div className="mf-up">
          <h2>New Arrivals</h2>
          <hr />
          <div className="navigate">
            <ul>
              <li>ALL</li>
              <li>WOMEN'S</li>
              <li>ACCESSORIES</li>
              <li>MEN'S</li>
            </ul>
          </div>
          
        </div>
        <div className="mf-content">
      <Card/>
        </div>
      </section>
    </div>
  )
}

export default index
