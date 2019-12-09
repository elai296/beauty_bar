import React from 'react';

export default function basketItem(props) {
  const cart = props.cart;
  const price = '$' + (cart.price * 0.01).toFixed(2);

  return (
    <div className="basketBox row">
      <div className='col-10'>
        <div className=''>
          <h6 className="my-0 text-dark">{cart.brand + ' - ' + cart.name}</h6>
          <div className="d-flex justify-content-center">
            <img src={cart.image}className="basketImage" />
          </div>
        </div>
        <span className="text-muted text-dark d-block d-flex">{price}</span>
      </div>
      <a href="#">
        <div className="col-1 my-auto text-center" onClick={() => props.deleteFromCart(cart.id)}>
          <i className="fa removeIcon"></i>
        </div>
      </a>
    </div>
  );
}
