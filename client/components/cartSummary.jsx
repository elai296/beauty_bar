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
        <a href="#"><div className="mt-3 text-center" onClick={e => handleClick(props)}>
          {'< Return to Shopping'}
        </div>
        </a>
      </div>);
  } else {
    return (
      <div>
        <div className="row">
          <div className='d-none d-md-block col-12' >

            <div className="col-12 d-flex dotsBordersTB py-1 my-3">
              <div className="col-2"></div>
              <div className="col-5 pl-5 text-center my-auto">PRODUCT</div>
              <div className="col-2 text-center">PRICE</div>
              <div className="col-3 text-center">QUANTITY</div>
            </div>
          </div>
          <div className="d-sm-block d-md-none d-lg-none col-12 dotsBordersTB  py-1 my-3">
            <div className="text-center">Items in basket</div>
          </div>
          {!props.cart ? null : props.cart.map(item => {
            return (
              <div className="cartSummaryItem mb-3 dotsBordersBottom pb-3 col-12" key={item.id}>
                <CartSummaryItem item={item} deleteFromCart={props.deleteFromCart} updateCart={props.updateCart}/>
              </div>
            );
          })}
        </div>
        <div className="cartSummaryCalculation text-right">
          Item Total({cartItemCount(props.cart)} items): {props.CartSummaryCalculate(props.cart)}
        </div>
        <a href="#">
          <div className="text-left mt-3" onClick={e => handleClick(props)}>
            {'< Return to Shopping'}
          </div>
        </a>
        <div className="text-right">
          <button className="checkOutbutton "onClick={() => handleCheckOut(props)}>PLACE ORDER</button>
        </div>
      </div>);
  }
}

function CartSummary(props) {
  return (
    <div className="col-12 col-md-10 col-lg-8 m-auto">
      <h4 className="cartTitle font-weight-bold text-center underlineRed m-4">MY BASKET</h4>
      {returnCart(props)}
    </div>
  );
}

export default CartSummary;
