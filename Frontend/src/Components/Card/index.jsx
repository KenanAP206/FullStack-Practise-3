import React from 'react'
import './Card.css'

function ProductCard({ discount, isNew, isSale, image, name, price, oldPrice }) {
  return (
    <div className="product-item">
    <div className="product-image">
      <img src="https://preview.colorlib.com/theme/coloshop/images/product_1.png.webp" alt="product" />
      
      <div className="product-badges">
        <span className="discount-badge">-$20</span>
      </div>

   
    </div>

    <div className="product-info">
      <h6 className="product-name">Fujifilm X100T 16 MP Digital Camera</h6>
      <div className="product-price">
        <span className="current-price">$520.00</span>
        <span className="old-price">$590.00</span>
      </div>
    </div>
    <button className="add-to-cart">
        add to cart
      </button>
  </div>
  )
}

export default ProductCard