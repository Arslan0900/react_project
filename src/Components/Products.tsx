import React from 'react'
import Data from './Data';
import { ProductItems } from './Data';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Actions';

const Products = () => {
  const dispatch = useDispatch();
  const {ProductItems} = Data;
  return (
    <div className='card-page'>{ProductItems.map((item:ProductItems) => (
      <div className='card' key={item.id}>
      <div ><img className='card-image' src={item.image} alt={item.name}/></div>
      <h2 className='card-name'>{item.name}</h2>
      <div className='card-decription'>{item.description}</div>
      <div className='card-price'>${item.price}</div>
      <div className='card-btn'>
      <button onClick={()=>dispatch(addToCart(item))}>ADD to Cart</button>
      </div>
      </div>))}</div>
  )
}

export default React.memo(Products);