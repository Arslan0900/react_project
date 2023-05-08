import React from 'react'
import { Link } from 'react-router-dom'
import { CartItm } from '../App';
type Props = {
  cartItems:CartItm[] ;
}

const Navbar:React.FC<Props> = ({cartItems}) => {
  return (
    <>
      <div className='nav'>
        <div className='logo'><Link to="/">LOGO</Link></div>
        <div>
          <ul className='nav_ul'>
            <li className='nav_li'><Link to="/">Home</Link></li>
            <li className='nav_li'><Link to="/Signin">Signin</Link></li>
          </ul>
        </div>
        <div className='Btn'>
          <button><Link to="/CheckOut">CheckOut</Link></button>
          <div>{cartItems.length === 0 ? 0:cartItems.length}</div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Navbar);
