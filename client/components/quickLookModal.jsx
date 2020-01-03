import React from 'react';

function onUpdate(input, btn) {
  let count = input.value;
  if (btn === 'plus') {
    count++;
  } else {
    count--;
  }
  if (count > 0) {
    input.value = count;
  }
}
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
                <div className="quantity">
                  <button className="plus-btn" type="button" name="plus" onClick={e => onUpdate(e.currentTarget.nextSibling, e.currentTarget.name)}>
                    <i className="fas fa-plus"></i>
                  </button>
                  <input id="qty" className="text-center" type="text" name="quantity" defaultValue="1" />
                  <button className="minus-btn" type="button" name="minus" onClick={e => onUpdate(e.currentTarget.previousSibling, e.currentTarget.name)}>
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
                <div className="m-4">
                  <button onClick={() => props.handleAddToCart(product)} data-toggle="modal" data-target="#quickLookModal">ADD TO BASKET</button>
                </div>
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
