import React from 'react';

export default function basketItem(props) {
  const cart = props.cart;
  const price = '$' + (cart.price * 0.01).toFixed(2);
  return (
    <div>
      <div>
        <h6 className="my-0">{cart.brand + ' - ' + cart.name}</h6>
        <small className="text-muted">{cart.shortDescription}</small>
      </div>
      <span className="text-muted">{price}</span>
    </div>
  );
}
