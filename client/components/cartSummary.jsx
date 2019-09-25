import React from 'react';
import CartSummaryItem from './cartSummaryItem';

function handleClick(props) {
  props.setView('catalog', { });
}

function handleCheckOut(props) {
  props.setView('checkout', {});
}

function CartSummary(props) {
  return (
    <div className="container">
      <div onClick={e => handleClick(props)}>
            Back To Catalog
      </div>
      <h4 className="cartTitle font-weight-bold">
      Shopping Cart
      </h4>
      <div className="row">
        {props.cart.map(item => {
          return (
            <div key={item.id}>
              <CartSummaryItem item={item} />
            </div>
          );
        })}
      </div>
      <div className="cartSummaryCalculation text-right">
        Item Total({props.cart.length} items): {props.CartSummaryCalculate(props.cart)}
      </div>
      <button className="checkOutbutton"onClick={() => handleCheckOut(props)}>
          Place Order
      </button>
    </div>
  );
}

export default CartSummary;
