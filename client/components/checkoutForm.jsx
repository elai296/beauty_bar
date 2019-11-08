import React from 'react';
import BasketItem from './basketItem';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      billingAddress: {
        firstName: null,
        lastName: null,
        userName: null,
        email: null,
        address: null,
        address2: null,
        country: null,
        state: null,
        zip: null
      },
      payment: {
        nameOnCard: null,
        creditCardNumber: null,
        expiration: null,
        CVV: null
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    let value = target.value;
    let name = target.name;

    if (name.substr(0, 7) === 'address') {
      name = name.split('.');
      let name2 = name[1];
      let addressCopy = Object.assign({}, this.state.address);
      addressCopy[name2] = value;
      name = name[0];
      value = addressCopy;
    }
    this.setState({
      [name]: value
    });
  }
  handleClick() {
    this.props.placeOrder();
  }
  cartItemCount(cart) {
    var sum = 0;
    cart.map(item => {
      return (
        sum += parseInt(item.count)
      );
    });
    return sum;
  }

  render(props) {
    return (
      <div className="container">
        <div className="py-5 text-center">
          <h2>Checkout</h2>
        </div>

        <div className="row">
          <div className="col-md-4 order-md-2 mb-4 checkoutItems pt-4 dotsBorders">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">ORDER SUMMARY</span>
              <span className="badge badge-secondary badge-pill">{this.cartItemCount(this.props.cart)} items</span>
            </h4>
            <ul className="list-group mb-4">
              {this.props.cart.map(item => {
                return (
                  <li className="list-group-item d-flex justify-content-between lh-condensed dotsBordersTB" key={item.id}>
                    <BasketItem cart={item} deleteFromCart={this.props.deleteFromCart}/>
                  </li>
                );
              })}
              <li className="list-group-item d-flex justify-content-between bg-light">
              </li>
              <li className="list-group-item d-flex justify-content-between text-dark">
                <span>Total (USD)</span>
                <strong>{this.props.CartSummaryCalculate(this.props.cart)}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" className="form-control" name="firstName" id="firstName" placeholder="" value="" required onChange={this.handleInputChange}/>
                  <div className="invalid-feedback">
              Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="" value="" required onChange={this.handleInputChange}/>
                  <div className="invalid-feedback">
              Valid last name is required.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                <input type="email" className="form-control" id="email" placeholder="" onChange={this.handleInputChange}/>
                <div className="invalid-feedback">
            Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" placeholder="" required onChange={this.handleInputChange}/>
                <div className="invalid-feedback">
            Please enter your shipping address.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" onChange={this.handleInputChange}/>
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select className="custom-select d-block w-100" id="country" required>
                    <option value="">Choose...</option>
                    <option>United States</option>
                    <option>Canada</option>
                  </select>
                  <div className="invalid-feedback">
              Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select className="custom-select d-block w-100" id="state" required>
                    <option value="">Choose...</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                  <div className="invalid-feedback">
              Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input type="text" className="form-control" id="zip" placeholder="" required onChange={this.handleInputChange}/>
                  <div className="invalid-feedback">
              Zip code required.
                  </div>
                </div>
              </div>
              <hr className="mb-4"/>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="same-address" onChange={this.handleInputChange}/>
                <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="save-info" onChange={this.handleInputChange}/>
                <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
              </div>
              <hr className="mb-4"/>

              <h4 className="mb-3">Payment</h4>

              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required onChange={this.handleInputChange}/>
                  <label className="custom-control-label" htmlFor="credit">Credit card</label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required onChange={this.handleInputChange}/>
                  <label className="custom-control-label" htmlFor="debit">Debit card</label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required onChange={this.handleInputChange}/>
                  <label className="custom-control-label" htmlFor="paypal">PayPal</label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Name on card</label>
                  <input type="text" className="form-control" id="cc-name" placeholder="" required onChange={this.handleInputChange}/>
                  <small className="text-muted">Full name as displayed on card</small>
                  <div className="invalid-feedback">
              Name on card is required
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Credit card number</label>
                  <input type="text" className="form-control" id="cc-number" placeholder="" required onChange={this.handleInputChange}/>
                  <div className="invalid-feedback">
              Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">Expiration</label>
                  <input type="text" className="form-control" id="cc-expiration" placeholder="" required onChange={this.handleInputChange}/>
                  <div className="invalid-feedback">
              Expiration date required
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-cvv">CVV</label>
                  <input type="text" className="form-control" id="cc-cvv" placeholder="" required onChange={this.handleInputChange}/>
                  <div className="invalid-feedback">
              Security code required
                  </div>
                </div>
              </div>
              <hr className="mb-4"/>
              <div className="m-3">*Reminder! This site is for demo purposes and this is not a real order.</div>
              <button type="submit" onClick={() => this.handleClick()}>Checkout</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default CheckoutForm;
