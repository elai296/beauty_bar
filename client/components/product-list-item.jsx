import React from 'react';
function ProductListItem(props) {
  return (
    <div className="card mt-4">
      {<img className="propsImage" src={props.image} onClick={() => props.handleClick(props.productId)} />}
      <div className="card-body">
        <div className="propsName my-2 font-weight-bold">{props.brand}</div>
        <div className="propsName my-2 font-weight-bold">{props.name}</div>
        <button className="propsPrice btn btn-primary" onClick={() => props.handleClick(props.productId)}>{props.price}</button>
      </div>
    </div>
  );
}
export default ProductListItem;
