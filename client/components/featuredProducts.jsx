import React from 'react';

export default function FeaturedProducts(props) {
  let productList = props.FeaturedProducts;
  productList.length = 4;

  return (
    <div id="bestSeller" className="">
      <h3 className="mt-3 text-center featuredLogoBorder">FEATURED PRODUCTS</h3>
      <div className="d-flex">
        {productList.map(item => {
          return (
            <div className="bestSeller featuredCard featuredBorder mt-4 d-inline-block col-sm-3" key={item.id}>
              {<img className="propsFeaturedImage" src={item.image} onClick={() => props.handleClick(props.productId)} />}
              <div className="card-body">
                <div className="propsName my-2 text-center" onClick={() => props.handleClick(item.productId)}>{item.brand}</div>
                <div className="propsName2 my-2 text-center">{item.name}</div>
                <div className="propsPrice text-center">{'$' + (item.price * 0.01).toFixed(2)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
