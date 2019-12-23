import React from 'react';

export default function quickLookModal(props) {
  const product = props.product;
  return (
    <div className="modal fade text-dark" id="quickLookModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content text-black">
          <div>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-center pb-5">
            <div className= "row no-gutters d-flex justify-content-center">
              <div className="col-4">
                {<img src={product.image} className="card-img propsImageCartSummaryItem" alt="imgSrc"/>}
              </div>
              <div className="card-title propsNameCartSummaryItem col-6 my-auto text-center">
                <h4>{product.brand}</h4>
                <h5>{product.name}</h5>
                <h6>{'$' + (product.price * 0.01).toFixed(2)}</h6>
              </div>
              <div className="borderDetail">
                <select name="quantity" className="cartQty align-items-center my-auto mr-3" id='qty'>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <button className="addToCartButton" onClick={() => props.handleAddToCart(product)} data-toggle="modal" data-target="#quickLookModal">ADD TO BASKET</button>
              </div>
              <div className="modal-footer borderDetail">
                <p>{product.shortDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
