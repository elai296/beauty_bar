import React from 'react';
function ProductListItem(props) {
  return (
    <div className="card mt-4">
      {<img className="propsImage" src={props.image} />}
      <div className="card-body">
        <div className="propsName my-2">{props.name}</div>
        <div className="propsPrice">{props.price}</div>
        <div className="propsShortdescription pb-4">{props.shortdescription}</div>
      </div>
    </div>
  );
}

export default ProductListItem;
