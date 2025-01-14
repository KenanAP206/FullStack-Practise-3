import React from 'react'
import './MainFeature.css'
import ProductCard from '../Card/index'
import { useState } from 'react'
import { productContext } from '../..//Context/ProductContext';
import { useContext } from 'react';
function index() {
  let {products,loading} = useContext(productContext)
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredProducts = products
            ? products
                .filter(product => 
                    (activeCategory === "All" || product.category === activeCategory) &&
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .sort((a, b) => {
                    if (sortOrder === "asc") {
                        return a.price - b.price;
                    } else {
                        return b.price - a.price;
                    }
                })
            : [];

  return (
    <div>
      <section id='mainfeature'>
        <div className="mf-up">
          <h2>New Arrivals</h2>
          <hr />
          <div className="navigate">
            <ul>
              <li onClick={() => setActiveCategory("All")}>ALL</li>
              <li onClick={() => setActiveCategory("Women")}>WOMEN'S</li>
              <li onClick={() => setActiveCategory("Accessories")}>ACCESSORIES</li>
              <li onClick={() => setActiveCategory("Men")}>MEN'S</li>
            </ul>
          </div>
          
        </div>

        <input
                        type="text"
                        placeholder="Seach..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #ddd'
                        }}
                    />
                    <button
                        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '4px',
                            border: '1px solid #ddd',
                            cursor: 'pointer'
                        }}
                    >
                        Price: {sortOrder === "asc" ? "Ascending" : "Descending"}
                    </button>

        <div className="mf-content">
          {loading ? (
            <p>Loading...</p>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                name={product.name}
                image={product.image}
                price={product.price}
                discount={product.discount}
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default index
