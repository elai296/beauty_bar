import React from 'react';

function OrderNumber() {
  const randomNumber = Math.floor(Math.random() * 30000000);
  return randomNumber;
}

function handleClick(props) {
  props.setView('catalog', {});
}

function newDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  return today;
}

export default function ThankYouConfirmationPage(props) {
  return (
    <div>
      <div className="modal-body text-center pb-5">
        <h3>Thank you for your order! </h3>

            Your confirmation number is {OrderNumber()}. <br/>

            Order Date: {newDate()} <br/>

            Arrives in 5-6 business days. <br/>

            Please keep the above numbers for your reference.  Please allow up to 24 hours for us to process your order for shipment.
      </div>

      <div className="row justify-content-center">
        <div className="col-md-5 order-md-2 mb-4 checkoutItems pt-4 dotsBorders">
          <h4 className="d-flex justify-content-between align-items-center mb-3 text-center">
            <div className="text-muted text-center">ITEMS ORDERED</div>
            <span className="badge badge-secondary badge-pill">
              Total: {props.cartItemCount(props.cart)} items
            </span>
          </h4>
          <ul className="list-group mb-4">
            {props.cart.map(item => {
              return (
                <li
                  className="list-group-item d-flex justify-content-between lh-condensed dotsBordersTB"
                  key={item.id}
                >
                  <div className="col-12 row">
                    <div className='col-8'>
                      <h6 className="my-0 text-dark">{item.brand + ' - ' + item.name}</h6>
                      <div className="d-flex justify-content-center">
                        <img src={item.image}className="basketImage" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className= "text-muted text-right">{item.count} items </div>
                      <div className="text-muted text-right">{'$' + (item.price * 0.01).toFixed(2)}</div>
                    </div>
                  </div>
                </li>
              );
            })}
            <li className="list-group-item d-flex justify-content-between blueColor"></li>
            <li className="list-group-item d-flex justify-content-between text-dark">
              <span>Estimated Total (USD):</span>
              <strong>
                {props.cartSummaryCalculate(props.cart)}
              </strong>
            </li>
            <button type="button" className="button text-center" data-dismiss="modal" onClick={e => handleClick(props)}>Continue Shopping</button>
          </ul>
        </div>
      </div>
    </div>
  );
}
