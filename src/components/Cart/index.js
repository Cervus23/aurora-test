import React from 'react';
import { basket } from '../../img/index';
import './style.scss';

const Cart = () => {
  return (
    <div className="cart-container">
      <img src={basket} alt="basket" />
    </div>
  );
};

export default Cart;
