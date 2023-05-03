import React from 'react';
import { ProductItem } from './Data';
import "./style.css"

type Props = {
  productItems: ProductItem[];
  addToCart: (productItems:any)=>void;
}
const Home: React.FC<Props> = ({ productItems,addToCart }) => {

  return (
    <div className='card-page'>{productItems.map((item) => (
    <div className='card'>
    <div ><img className='card-image' src={item.image} alt={item.Name}/></div>
    <h2 className='card-name'>{item.Name}</h2>
    <div className='card-decription'>{item.description}</div>
    <div className='card-price'>${item.price}</div>
    <div className='card-btn'>
    <button onClick={()=>addToCart(item)}>ADD to Cart</button>
    </div>
    </div>))}</div>
  )
}

export default Home;