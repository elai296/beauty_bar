import React from 'react';

export default function FeaturedProducts(props) {
  let productList = props.FeaturedProducts;
  productList.length = 4;

  return (
    <div id="bestSeller container" className="">
      <h4 className="mt-5 py-1 text-center underlineRed ">Featured Products</h4>
      <div className="d-flex flex-wrap">
        {productList.map(item => {
          return (
            <div className="featuredProducts card dotsBordersRight my-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 d-none d-flex flex-column justify-content-center" key={item.id}>
              <div className='quickLook'>
                <a href="#" onClick={() => props.showQuickLook(item)} data-toggle="modal" data-target="#quickLookModal"><span className="text-center">Quick Look</span></a>
              </div>
              {<img className="propsFeaturedImage" src={item.image} onClick={() => props.setView('detail', { id: item.id })} />}
              <div className="card-body">
                <div className="propsName my-2 text-center" onClick={() => props.setView('detail', { id: item.id })}>{item.brand}</div>
                <div className="propsName2 my-2 text-center" onClick={() => props.setView('detail', { id: item.id })}>{item.name}</div>
                <div className="propsPrice text-center" onClick={() => this.setView('detail', { id: item.id })}>{'$' + (item.price * 0.01).toFixed(2)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
