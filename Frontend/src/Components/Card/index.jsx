import React from 'react'
import './Card.css'
import { basketContext } from '../../context/BasketContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Swal from 'sweetalert2';
function ProductCard(props) {

    let {basket,setBasket}=useContext(basketContext)
    const navigate = useNavigate();

    const someEventHandler = () => {
        navigate(`/${props.id}`);
    } 
  
    function handleAddBasket(product){
      let findBasket=basket.find(item=>item.id==product.id)
      if(findBasket){
          findBasket.count++
          setBasket([...basket])
  
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "+1 to Cart"
          });
      }else{
          setBasket([...basket,{...product,count:1}])
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Added to Cart"
          });
      }
  }

  return (
    <div onClick={()=>someEventHandler()} className="product-item">
      <div className="product-image">
        <img src={props.image} alt={props.name} />
        
        <div className="product-badges">
          <span className="discount-badge">
            ${props.discount - props.price}
          </span>
        </div>
      </div>

      <div className="product-info">
        <h6 className="product-name">{props.name}</h6>
        <div className="product-price">
          <span className="current-price">${props.price}</span>
          <span className="old-price">${props.discount}</span>
        </div>
      </div>
      <button onClick={(e) => { e.stopPropagation(); handleAddBasket(props); }} className="add-to-cart" >
        add to cart
      </button>
    </div>
  )
}

export default ProductCard