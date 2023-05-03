import React from 'react'
import { ProductItem2 } from '../App';
import "./style.css"

type Props = {
  cartItems:ProductItem2[];
  handleCartClear: ()=>void;
}

const CheckOut:React.FC<Props> = ({cartItems,handleCartClear}) => {
  const totalPrice = cartItems.reduce((price,item)=> price +item.quantity * item.price,0)
  return (
    <div className="cart-items">
      <h2 className="cart-item-header">Cart items</h2>
      <div className="clear-cart">
        {cartItems.length >=1 &&(<button onClick={()=>handleCartClear()}>clear cart</button>)}
      </div>


      {(cartItems.length === 0 &&
        (<div className="cart-item-empty"> No item are added. </div>)
      )}

      
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item-list">
            <img className='cart-item-image' src={item.image} alt={item.Name}></img>
            <h2 className="cart-item-name">{item.Name}</h2>
            <div className="cart-item-function">
            </div>
            <div className="cart-item-price">Quantitiy:{item.quantity} *${item.price}</div>
          </div>
        ))}
      </div>
      <div className="cart-item-total">Total:${totalPrice}</div>
    </div>
  )
}

export default CheckOut