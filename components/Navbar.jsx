import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p>
        <Link href='/'>Tienda de tecnologia</Link>
      </p>

      <button type='button' className='card-icon' onClick=''>
        <AiOutlineShopping />
        <span className='card-item-qty'>1</span>
      </button>
    </div>
  )
}

export default Navbar