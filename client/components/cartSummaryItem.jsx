/* eslint-disable no-console */
import React from 'react';

function CartSummaryItem(props) {
  return (
    <div className="card mb-3">
      <div className= "row no-gutters">
        <div className="col-md-4">
          {<img src={props.item.images[0]} className="card-img propsImageCartSummaryItem" alt="props.item.images[0]"/>}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title propsNameCartSummaryItem">{props.item.name}</h5>
            <p className="card-text propsShortdescription">{props.item.shortDescription}</p>
            <p className="card-text propsPriceCartSummaryItem">{'$' + (props.item.price * 0.01).toFixed(2)}</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default CartSummaryItem;
