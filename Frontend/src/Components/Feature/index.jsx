import React from 'react'
import './Feature.css'
let array = [
  {
    image:'../../src/assets/Images/banner_1.jpg',
    title:"WOMEN'S"
  },
  {
    image:'../../src/assets/Images/banner_2.jpg',
    title:"ACCESSORIES'S"
  },
  {
    image:'../../src/assets/Images/banner_3.jpg',
    title:"MEN'S"
  }
]

function index() {
  return (
    <div>
      <section id='feature'>
            <div className="fcards">
            {array.map((item, index) => (
            <div className="fcard" key={index}>
              <img src={item.image} alt={item.title.toLowerCase()} />
              <div className="fc_txt">
                {item.title}
              </div>
            </div>
          ))}

            </div>
      </section>
    </div>
  )
}

export default index
