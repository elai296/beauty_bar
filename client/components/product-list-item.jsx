import React from 'react';
function ProductListItem(props) {
  return (
    <div className="card mt-4">
      {<img className="propsImage" src={props.image} />}
      <div className="card-body">
        <div className="propsName my-2 font-weight-bold">{props.name}</div>
        <div className="propsShortdescription pb-4">{props.shortdescription}</div>
        <button className="propsPrice btn btn-primary" onClick={e => props.handleClick(props.productId)}>{props.price}</button>
      </div>
    </div>
  );
}
export default ProductListItem;
