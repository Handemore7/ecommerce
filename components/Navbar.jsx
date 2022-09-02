import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './'
import { useStateContext } from '../context/StateContext';

const Navbar = () => {

  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className='navbar-container'>
      <p>
        <Link href='/'>Tienda de tecnologia</Link>
      </p>

      <button type='button' className='card-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='card-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar