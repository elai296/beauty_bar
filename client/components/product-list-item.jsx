import React from 'react';
function ProductListItem(props) {
  return (
    <div className="card mt-4">
      <div className="quickLook">Quick Look</div>
      {<img className="propsImage" src={props.image} onClick={() => props.handleClick(props.productId) }/>}
      <div className="card-body">
        <div className="propsName my-2 text-center" onClick={() => props.handleClick(props.productId)}>{props.brand}</div>
        <div className="propsName2 my-2 text-center">{props.name}</div>
        <div className="propsPrice text-center">{props.price}</div>
      </div>
    </div>
  );
}
export default ProductListItem;
