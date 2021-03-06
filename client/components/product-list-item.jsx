import React from 'react';

function ProductListItem(props) {
  return (

    <div className="card mt-4">
      <div className="quickLook"><a href="#" onClick={() => props.showQuickLook(props.product)} data-toggle="modal" data-target="#quickLookModal"> Quick Look</a></div>
      <a href="#" onClick={() => props.handleClick(props.productId)}>
        {<img className="propsImage imgObjFitContain" src={props.image} onClick={() => props.handleClick(props.productId) }/>}
        <div className="card-body">
          <div className="propsName my-2 text-center" onClick={() => props.handleClick(props.productId)}>{props.brand}</div>
          <div className="propsName2 my-2 text-center">{props.name}</div>
          <div className="propsPrice text-center">{props.price}</div>
        </div>
      </a>
    </div>
  );
}
export default ProductListItem;
