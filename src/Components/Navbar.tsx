import React from 'react'
import { Link } from 'react-router-dom';
import "./Style.css"
import { useSelector } from 'react-redux';
import { AppState } from './CheckOut';

const Navbar = () => {
  const myState = useSelector((state:AppState) =>state.addItemToCart)
  return (
    <>
    <div className='nav'>
      <div className='logo'><Link to="/">LOGO</Link></div>
      <div>
        <ul className='nav_ul'>
          <li className='nav_li'><Link to="/">Home</Link></li>
          <li className='nav_li'><Link to="/Products">Products</Link></li>
        </ul>
      </div>
      <div className='Btn'>
      {myState.length}
        <button><Link to="/CheckOut">CheckOut</Link></button>
      </div>
    </div>
  </>
)
}
export default React.memo(Navbar);