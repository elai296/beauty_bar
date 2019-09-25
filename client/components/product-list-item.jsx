import React from 'react';
function ProductListItem(props) {
  return (
    <div className="card mt-4">
      {<img className="propsImage" src={props.image} onClick={() => props.handleClick(props.productId)} />}
      <div className="card-body">
        <div className="propsName my-2 font-weight-bold" onClick={() => props.handleClick(props.productId)}>{props.brand}</div>
        <div className="propsName my-2 font-weight-bold">{props.name}</div>
        <div className="propsPrice">{props.price}</div>
      </div>
    </div>
  );
}
export default ProductListItem;
