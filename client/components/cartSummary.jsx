import React from 'react';
import CartSummaryItem from './cartSummaryItem';
function CartSummary(props) {
  return (
    <div className="container">
      <div className="title">
      Your Cart
      </div>
      <div className="row">
        {props.cart.map(item => {
          return (
            <div key={item.id}>
              <CartSummaryItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartSummary;
