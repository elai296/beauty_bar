/* eslint-disable no-console */
import React from 'react';

function CartSummaryItem(props) {
  return (
    <div className= "row no-gutters">
      {<img src={props.item.image} className="card-img propsImageCartSummaryItem col-2" alt="props.item.images[0]"/>}
      <div className="card-title propsNameCartSummaryItem col-8 pl-5 pt-3">
        <h5>{props.item.brand}</h5>
        <h6>{props.item.name}</h6>
      </div>
      <p className="card-text propsPriceCartSummaryItem col-2 text-center pt-3" >{'$' + (props.item.price * 0.01).toFixed(2)}</p>
    </div>
  );
}

export default CartSummaryItem;
