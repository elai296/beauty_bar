import React from 'react';

function onUpdate(input, item, btn, props) {

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
    // eslint-disable-next-line no-undef
    $('#deleteConfirm').modal('show');
    // props.deleteFromCart(item);
  }
}

function CartSummaryItem(props) {
  const imgSrc = props.item.image;

  return (
    <div className="container" id="cartSummary">
      <div className= "d-block d-md-none d-flex">
        {<img src={imgSrc} className="card-img col-5 h-100 w-100 p-0" alt="imgSrc"/>}
        <div className="card-title col-5 p-1 my-auto">
          <h5 className="itemBrand">{props.item.brand}</h5>
          <h6 className="itemName">{props.item.name}</h6>
          <p className="itemPrice text-center" >{'$' + (props.item.price * 0.01).toFixed(2)}</p>
          <div className="quantity d-flex justify-content-center col-12 my-auto">
            <button className="plus-btn" type="button" name="plus" onClick={e => onUpdate(e.currentTarget.nextSibling, props.item.id, e.currentTarget.name, props)}>
              <i className="fas fa-plus"></i>
            </button>
            <input className="text-center" type="text" name="name" defaultValue={props.item.count} onChange={e => props.updateCart(props.item.id, e.currentTarget.value)}/>
            <button className="minus-btn" type="button" name="minus" onClick={e => onUpdate(e.currentTarget.previousSibling, props.item.id, e.currentTarget.name, props)}>
              <i className="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <div className="text-center my-auto col-2" data-toggle="modal" data-target="#deleteConfirm">
          <a href="#">
            <i className="fa removeIcon"></i>
          </a>
        </div>
      </div>
      <div className="container d-none d-md-block">
        <div className= "no-gutters d-flex flex-no-wrap">
          {<img src={imgSrc} className="card-img col-2" alt="imgSrc"/>}
          <div className="card-title propsNameCartSummaryItem col-5 pl-5 my-auto">
            <h5>{props.item.brand}</h5>
            <h6>{props.item.name}</h6>
          </div>
          <p className="card-text col-2 text-center my-auto " >{'$' + (props.item.price * 0.01).toFixed(2)}</p>
          <div className="quantity col-3 d-flex justify-content-center my-auto">
            <div className='d-flex d-wrap'>
              <button className="plus-btn" type="button" name="plus" onClick={e => onUpdate(e.currentTarget.nextSibling, props.item.id, e.currentTarget.name, props)}>
                <i className="fas fa-plus"></i>
              </button>
              <input className="text-center" type="text" name="name" defaultValue={props.item.count} onChange={e => props.updateCart(props.item.id, e.currentTarget.value)}/>
              <button className="minus-btn" type="button" name="minus" onClick={e => onUpdate(e.currentTarget.previousSibling, props.item.id, e.currentTarget.name, props)}>
                <i className="fas fa-minus"></i>
              </button>
            </div>
            <div className="text-center my-auto ml-2" data-toggle="modal" data-target="#deleteConfirm">
              <a href="#">
                <i className="fa removeIcon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummaryItem;
