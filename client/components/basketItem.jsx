import React from 'react';

export default function basketItem(props) {
  const cart = props.cart;
  const price = '$' + (cart.price * 0.01).toFixed(2);
  return (
    <div className="basketBox">
      <div>
        <h6 className="my-0 text-dark">{cart.brand + ' - ' + cart.name}</h6>
        <img src={cart.image}className="basketImage" />

      </div>
      <span className="text-muted text-dark">{price}</span>
    </div>
  );
}
