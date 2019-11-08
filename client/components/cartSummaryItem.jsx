/* eslint-disable no-console */
import React from 'react';
function onUpdate(count, item, props) {
  props.updateCart(item, count);
}

function CartSummaryItem(props) {
  const imgSrc = props.item.image;

  return (
    <div className= "row no-gutters d-flex">
      {<img src={imgSrc} className="card-img propsImageCartSummaryItem col-2" alt="imgSrc"/>}
      <div className="card-title propsNameCartSummaryItem col-6 pl-5 my-auto">
        <h5>{props.item.brand}</h5>
        <h6>{props.item.name}</h6>
      </div>
      <p className="card-text propsPriceCartSummaryItem col-2 text-center my-auto " >{'$' + (props.item.price * 0.01).toFixed(2)}</p>
      <select name="cartQty" className="col-1 cartQty align-items-center my-auto" onChange={e => onUpdate(e.currentTarget.value, props.item.id, props)}>
        <option value={props.item.count} selected>{props.item.count}</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="8">7</option>
        <option value="9">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <div className="col-1 my-auto text-center" onClick={() => props.deleteFromCart(props.item.id)}>
        <i className="fa removeIcon"></i>
      </div>
    </div>
  );
}

export default CartSummaryItem;
