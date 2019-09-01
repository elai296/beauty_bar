import React from 'react';

function CartSummaryItem(props) {
  return (
    <div className= ".no-gutters .col-md-*">
      <div className="propsImageCartSummaryItem">{props.image}</div>
      <div className="propsNameCartSummaryItem">{props.name}</div>
      <div className="propsPriceCartSummaryItem">{props.price}</div>
      <div className="propsShortdescription">{props.shortdescription}</div>

    </div>
  );
}

export default CartSummaryItem;
