import React from 'react'
import { useSelector } from 'react-redux';
import { cartItems } from '../Reducers/AddItemToCart';
import { useDispatch } from 'react-redux';
import { clearCart } from '../Actions';
export type AppState = {
  addItemToCart: cartItems[];
};
const CheckOut = () => {
  const dispatch = useDispatch();
  const myState:AppState["addItemToCart"] = useSelector((state:AppState) =>state.addItemToCart)
  const Total = myState.reduce((price:number, item:cartItems) =>  price+item.quantity*item.price, 0)
  return (
    <>
    <div className="cart-items">
      <h2 className="cart-item-header">Cart items</h2>
      {(myState.length === 0 &&
        (<div className="cart-item-empty"> No item are added. </div>)
      )} 
      {(myState.length!==0?(<button onClick={()=>dispatch(clearCart())}>clear</button>):"")}
      <div>
        {myState.map((item:cartItems) => (
          <div key={item.id} className="cart-item-list">
            <img className='cart-item-image' src={item.image} alt={item.name}></img>
            <h3 className="cart-item-name">{item.name}</h3>
            <div className="cart-item-price">Quantitiy:{item.quantity} *${item.price}</div>
          </div>
        ))}
      </div>
      <div className="cart-item-total">Total:${Total}</div>
    </div>
    </>
  )
}

export default React.memo(CheckOut);