import React from 'react';

function checkoutButton(props) {
  props.setView('checkout', {});
}

function continueShoppingButton(props) {
  props.setView('catalog', {});
}

export default function CheckoutModal(props) {
  return (
    <div className="modal fade text-dark" id="checkoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                {<img src={props.product.images[0]} className="card-img propsImageCartSummaryItem" alt="imgSrc"/>}
              </div>
              <div className="card-title propsNameCartSummaryItem col-6 pl-5 my-auto text-center">
                <h5>{props.product.brand}</h5>
                <h6>{props.product.name}</h6>
                <strong>We have added {props.itemQty} items to your basket.</strong>
              </div>
              <div className="modal-footer borderDetail">
                <button type="button" className="btn btn-secondary text-center" data-dismiss="modal" onClick={e => checkoutButton(props)}>Checkout</button>
                <button type="button" className="button text-center" data-dismiss="modal" onClick={e => continueShoppingButton(props)}>Continue Shopping</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
