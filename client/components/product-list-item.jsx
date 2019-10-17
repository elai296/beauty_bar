import React from 'react';
function ProductListItem(props) {
  return (
    <div className="card mt-4">
      <div className="propsImage vignette-inset" style={{ backgroundImage: 'url(' + props.image + ')' }} onClick={() => props.handleClick(props.productId)}>
        {/* {<img className="propsImage" src={props.image} />} */}
      </div>
      <div className="card-body">
        <div className="propsName my-2 text-center" onClick={() => props.handleClick(props.productId)}>{props.brand}</div>
        <div className="propsName2 my-2 text-center">{props.name}</div>
        <div className="propsPrice text-center">{props.price}</div>
      </div>
    </div>
  );
}
export default ProductListItem;
