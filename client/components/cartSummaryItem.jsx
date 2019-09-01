/* eslint-disable no-console */
import React from 'react';

function CartSummaryItem(props) {
  console.log('item summary', props.cart);
  return (
    <div className= ".no-gutters .col-md-*">
      item details
      <div className="propsImageCartSummaryItem">{props.image}</div>
      <div className="propsNameCartSummaryItem">{props.name}</div>
      <div className="propsPriceCartSummaryItem">{props.price}</div>
      <div className="propsShortdescription">{props.shortdescription}</div>

    </div>
  );
}

export default CartSummaryItem;
