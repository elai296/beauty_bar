/* eslint-disable no-console */
import React from 'react';
function CartSummaryItem(props) {
  console.log(props.item.image);
  return (
    <div className= "row no-gutters d-flex">
      {<img src={props.item.images[0]} className="card-img propsImageCartSummaryItem col-2" alt="props.item.images[0]"/>}
      <div className="card-title propsNameCartSummaryItem col-6 pl-5 pt-3">
        <h5>{props.item.brand}</h5>
        <h6>{props.item.name}</h6>
      </div>
      <p className="card-text propsPriceCartSummaryItem col-2 text-center pt-3" >{'$' + (props.item.price * 0.01).toFixed(2)}</p>
      <select name="cartQty" className="col-1 cartQty align-items-center pt-3">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <div className="col-1 removeIcon  pt-3" onClick={() => props.deleteFromCart(props.item.id)}></div>
    </div>
  );
}

export default CartSummaryItem;
