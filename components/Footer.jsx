import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';


const Footer = ( {footer}) => {
  return (
    <div className='footer-container'>
      <p>2022 tienda electronica - todos los derechos reservados</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer