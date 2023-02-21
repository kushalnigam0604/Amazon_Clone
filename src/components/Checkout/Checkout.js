import React from 'react';
import './Checkout.css';
import checkout_Ad from '../../assets/checkout_Ad.jpg';
import Subtotal from '../Subtotal/Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
      <div className="checkout__left">
          <img className='checkout_Ad' src={checkout_Ad} alt="" />
          <h2 className="checkout__title">
              Your Shopping Basket
          </h2>
      </div>
      <div className="checkout__right">
          <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
