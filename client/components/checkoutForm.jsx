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
      },
      valid: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleConfirmationPage = this.handleConfirmationPage.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.validateInput = this.validateInput.bind(this);
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
    if (name === 'nameOnCard' || name === 'creditCardNumber' || name === 'expiration' || name === 'CVV') {
      this.setState(prevState => ({
        payment: { ...prevState.payment, [name]: value }
      }));
    } else {
      this.setState(prevState => ({
        billingAddress: { ...prevState.billingAddress, [name]: value }
      }));
    }
  }
  handleClick(event) {
    event.preventDefault();
    this.validateForm();
    if (this.state.valid) {
      const data = new FormData(document.querySelector('form'));
      this.handleConfirmationPage();
      setTimeout(this.props.placeOrder(data), 2000);
    }
  }
  validateForm() {
    let elements = document.getElementsByTagName('input');
    let validated = true;
    for (let i = 0; i < elements.length; i++) {
      let validate = this.validateInput(elements[i]);
      if (!validated) {
        if (this.state.valid) {
          this.setState({ valid: false });
        }
      } else {
        validated = validate;
      }
    }
    elements = document.getElementsByTagName('select');
    for (let i = 0; i < elements.length; i++) {
      let validate = this.validateInput(elements[i]);
      if (!validated) {
        if (this.state.valid) {
          this.setState({ valid: false });
        }
      } else {
        validated = validate;
      }
    }
    this.setState({ valid: validated });
  }
  validateInput(target) {
    const name = target.name;
    if (name === 'firstName' || name === 'lastName' || name === 'nameOnCard') {
      return this.handleLetters(target);
    } else if (name === 'address' || name === 'address2') {
      return this.handleBothNumbersAndLetter(target);
    } else if (name === 'email') {
      return this.handleEmail(target);
    } else if (
      name === 'zip' ||
      name === 'creditCardNumber' ||
      name === 'CVV' ||
      name === 'expiration'
    ) {
      return this.handleNumbers(target);
    } else if (name === 'state' || name === 'country') {
      return this.handleDropDown(target);
    } else {
      return true;
    }
  }
  cartItemCount(cart) {
    var sum = 0;
    if (!cart) {
      return null;
    }
    cart.map(item => {
      return (sum += parseInt(item.count));
    });
    return sum;
  }

  handleConfirmationPage() {
    this.props.setView('thankyouconfirmationpage', {});
  }
  handleDropDown(target) {
    const value = target.value;
    if (value !== '') {
      target.nextSibling.classList.remove('d-block');
      return true;
    } else {
      target.nextSibling.classList.add('d-block');
      return false;
    }
  }
  handleNumbers(target) {
    const number = /^[0-9]+$/;
    const value = target.value;
    if (value.match(number)) {
      target.nextSibling.classList.remove('d-block');
      return true;
    } else {
      target.nextSibling.classList.add('d-block');
      return false;
    }
  }

  handleLetters(target) {
    const letters = /^[A-Za-z_\s]+$/;
    const value = target.value;
    if (value.match(letters)) {
      target.nextSibling.classList.remove('d-block');
      return true;
    } else {
      target.nextSibling.classList.add('d-block');
    }
    return false;
  }

  handLengthRange(target, minlength, maxlength) {
    const userInput = target.value;
    if (userInput.length >= minlength && userInput.length <= maxlength) {
      target.nextSibling.classList.remove('d-block');
      return true;
    } else {
      target.nextSibling.classList.add('d-block');
      return false;
    }
  }

  handleEmail(target) {
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]? \w+)*(\.\w{2,3})+$/;
    const value = target.value;
    if (value.match(mailformat)) {
      target.nextSibling.classList.remove('d-block');
      return true;
    } else {
      target.nextSibling.classList.add('d-block');
      return false;
    }
  }

  handleBothNumbersAndLetter(target) {
    const letterNumber = /^\s*\S+(?:\s+\S+){2}/;
    const value = target.value;
    if (value.match(letterNumber)) {
      target.nextSibling.classList.remove('d-block');
      return true;
    } else {
      target.nextSibling.classList.add('d-block');
      return false;
    }
  }

  render(props) {
    return (
      <div className="container">
        <div className="py-5 text-center">
          <h2 className="underlineRed">Checkout</h2>
        </div>

        <div className="row">
          <div className="col-md-4 order-md-2 mb-4 checkoutItems pt-4 dotsBorders">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">ORDER SUMMARY</span>
              <span className="badge badge-secondary badge-pill">
                {this.cartItemCount(this.props.cart)} items
              </span>
            </h4>
            <ul className="list-group mb-4">
              {this.props.cart.map(item => {
                return (
                  <li
                    className="list-group-item d-flex justify-content-between lh-condensed dotsBordersTB"
                    key={item.id}
                  >
                    <BasketItem
                      cart={item}
                      deleteFromCart={this.props.deleteFromCart}
                    />
                  </li>
                );
              })}
              <li className="list-group-item d-flex justify-content-between blueColor"></li>
              <li className="list-group-item d-flex justify-content-between text-dark">
                <span>Estimated Total (USD)</span>
                <strong>
                  {this.props.cartSummaryCalculate(this.props.cart)}
                </strong>
              </li>
            </ul>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    id="firstName"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Invalid Name"
                    placeholder=""
                    required
                    onChange={this.handleInputChange}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    id="lastName"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Invalid Last Name"
                    placeholder=""
                    required
                    onChange={this.handleInputChange}
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Invalid E-mail"
                  placeholder=""
                  onChange={this.handleInputChange}
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Invalid address"
                  name="address"
                  required
                  onChange={this.handleInputChange}
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address2">
                  Address 2 <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Invalid Address"
                  placeholder="Apartment or suite"
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select
                    className="custom-select d-block w-100"
                    id="state"
                    name="state"
                    required
                    onChange={this.handleInputChange}
                  >
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
                  <input
                    type="text"
                    className="form-control"
                    name="zip"
                    id="zip"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Invalid Zip Code"
                    placeholder=""
                    required
                    onChange={this.handleInputChange}
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr className="mb-4" />
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="same-address"
                  onChange={this.handleInputChange}
                />
                <label className="custom-control-label" htmlFor="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="save-info"
                  onChange={this.handleInputChange}
                />
                <label className="custom-control-label" htmlFor="save-info">
                  Save this information for next time
                </label>
              </div>
              <hr className="mb-4" />
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Name on card</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nameOnCard"
                    id="cc-name"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Invalid Name"
                    placeholder=""
                    required
                    onChange={this.handleInputChange}
                  />
                  <small className="invalid-feedback">
                    Full name as displayed on card
                  </small>
                  {/* <div className="invalid-feedback">
                    Name on card is required
                  </div> */}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Credit card number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="creditCardNumber"
                    id="cc-number"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Invalid Credit Card Number"
                    placeholder=""
                    required
                    onChange={this.handleInputChange}
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">Expiration</label>
                  <input
                    type="text"
                    className="form-control"
                    name="expiration"
                    id="cc-expiration"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Invalid Number"
                    placeholder=""
                    required
                    onChange={this.handleInputChange}
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-cvv">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    name="CVV"
                    id="cc-cvv"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Invalid Number"
                    placeholder=""
                    required
                    onChange={this.handleInputChange}
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr className="mb-4" />
              <div className="m-3">
                *Reminder! This site is for demo purposes and this is not a real
                order.
              </div>
              <button
                type="button"
                onClick={this.handleClick}
              >
                Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default CheckoutForm;
