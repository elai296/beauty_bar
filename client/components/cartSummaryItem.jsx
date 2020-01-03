/* eslint-disable no-console */
import React from 'react';
function onUpdate(input, item, btn, props) {
  // console.log('original', count);
  let count = input.value;
  if (btn === 'plus') {
    count++;
  } else {
    count--;
  }
  if (count > 0) {
    input.value = count;
    props.updateCart(item, count);
  } else {
    props.deleteFromCart(item);
  }
}

// function updateValue(count, item, props) {
//   props.updateCart(item, count);
// }
function CartSummaryItem(props) {
  const imgSrc = props.item.image;

  return (
    <div className="container" id="cartSummary">
      <div className= "no-gutters d-flex flex-no-wrap">
        {<img src={imgSrc} className="card-img propsImageCartSummaryItem col-2" alt="imgSrc"/>}
        <div className="card-title propsNameCartSummaryItem col-5 pl-5 my-auto">
          <h5>{props.item.brand}</h5>
          <h6>{props.item.name}</h6>
        </div>
        <p className="card-text propsPriceCartSummaryItem col-2 text-center my-auto " >{'$' + (props.item.price * 0.01).toFixed(2)}</p>
        <div className="quantity col-3 d-flex justify-content-center my-auto">
          <div>
            <button className="plus-btn" type="button" name="plus" onClick={e => onUpdate(e.currentTarget.nextSibling, props.item.id, e.currentTarget.name, props)}>
              <i className="fas fa-plus"></i>
            </button>
            <input className="text-center" type="text" name="name" defaultValue={props.item.count} onChange={e => props.updateCart(props.item.id, e.currentTarget.value)}/>
            <button className="minus-btn" type="button" name="minus" onClick={e => onUpdate(e.currentTarget.previousSibling, props.item.id, e.currentTarget.name, props)}>
              <i className="fas fa-minus"></i>
            </button>
          </div>
          <div className="text-center my-auto ml-2" onClick={() => props.deleteFromCart(props.item.id)}>
            <a href="#">
              <i className="fa removeIcon"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CartSummaryItem;
