import React from 'react';
import DeleteConfirmationModal from './deleteComfirmationModal';

export default function basketItem(props) {
  const cart = props.cart;
  const price = '$' + (cart.price * 0.01).toFixed(2);
  return (
    <div className="basketBox row container">
      <div className="col-3 p-0">
        <img src={cart.image} className="basketImage" />
      </div>
      <div className='col-8 p-0'>
        <h5 className="my-0 text-dark">{cart.brand}</h5>
        <h6 className="my-0 text-dark">{cart.name}</h6>
        <span className="text-muted text-dark d-block d-flex">{price}</span>
        <span className="badge badge-secondary badge-pill">
          {cart.count} items
        </span>
      </div>
      <div className="col-1 text-center p-0">
        <div className="text-center my-auto ml-2" data-toggle="modal" data-target="#deleteConfirm">
          <DeleteConfirmationModal delete={() => props.deleteFromCart(cart.id)} />
          <a href="#"><i className="fa removeIcon"></i></a>
        </div>
      </div>
    </div>
  );
}
