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
    <div className="containerCartSummary">
      <h4 className="cartTitle font-weight-bold text-center">
      MY BASKET
      </h4>
      <div className="row">
        <div className="col-12 row dotsBordersTB pt-1 mt-3 pb-1 mb-3">
          <div className="col-2"></div>
          <div className="col-8 pl-5 text-center">PRODUCT</div>
          <div className="col-2 text-center">PRICE</div>
        </div>
        {props.cart.map(item => {
          return (
            <div className="cartSummaryItem mb-3 dotsBordersBottom pb-3" key={item.id}>
              <CartSummaryItem item={item} deleteFromCart={props.deleteFromCart}/>

            </div>
          );
        })}
      </div>
      <div className="cartSummaryCalculation text-right">
        Item Total({props.cart.length} items): {props.CartSummaryCalculate(props.cart)}
      </div>
      <div className="text-left mt-3" onClick={e => handleClick(props)}>
        {'< Return to Shopping'}
      </div>
      <div className="text-right">
        <button className="checkOutbutton "onClick={() => handleCheckOut(props)}>
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}

export default CartSummary;
