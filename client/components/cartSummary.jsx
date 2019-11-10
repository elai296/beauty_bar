import React from 'react';
import CartSummaryItem from './cartSummaryItem';

function handleClick(props) {
  props.setView('catalog', {});
}

function handleCheckOut(props) {
  props.setView('checkout', {});
}

function cartItemCount(cart) {
  var sum = 0;
  cart.map(item => {
    return (
      sum += parseInt(item.count)
    );
  });
  return sum;
}
function returnCart(props) {
  if (!props.cart) {
    return null;
  }
  if (props.cart.length === 0) {
    return (
      <div>
        <h4 className="text-center">Your basket is currently empty.</h4>
        <div className="mt-3 text-center" onClick={e => handleClick(props)}>
          {'< Return to Shopping'}
        </div>
      </div>);
  } else {
    return (
      <div>
        <div className="row">
          <div className="col-12 row dotsBordersTB pt-1 mt-3 pb-1 mb-3">
            <div className="col-2"></div>
            <div className="col-6 pl-5 text-center my-auto">PRODUCT</div>
            <div className="col-2 text-center">PRICE</div>
            <div className="col-1 text-center">QUANTITY</div>

          </div>
          {props.cart.map(item => {
            return (
              <div className="cartSummaryItem mb-3 dotsBordersBottom pb-3" key={item.id}>
                <CartSummaryItem item={item} deleteFromCart={props.deleteFromCart} updateCart={props.updateCart}/>
              </div>
            );
          })}
        </div>
        <div className="cartSummaryCalculation text-right">
          Item Total({cartItemCount(props.cart)} items): {props.CartSummaryCalculate(props.cart)}
        </div>
        <div className="text-left mt-3" onClick={e => handleClick(props)}>
          {'< Return to Shopping'}
        </div>
        <div className="text-right">
          <button className="checkOutbutton "onClick={() => handleCheckOut(props)}>PLACE ORDER</button>
        </div>
      </div>);
  }
}

function CartSummary(props) {
  return (
    <div className="containerCartSummary">
      <h4 className="cartTitle font-weight-bold text-center">MY BASKET</h4>
      {returnCart(props)}
    </div>
  );
}

export default CartSummary;
