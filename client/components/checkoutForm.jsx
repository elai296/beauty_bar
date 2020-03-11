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
      valid: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleConfirmationPage = this.handleConfirmationPage.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  handleInputChange(event) {
    const target = event.currentTarget;
    let value = target.value;
    let name = target.name;
    target.nextSibling.classList.remove('d-block');
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
    if (name === 'lastName' || name === 'firstName') {
      let num = value.toString();
      if (num.length >= 2 && num.length >= 33) {
        target.value = num.substr(0, num.length - 1);
      }
    }
    if (name === 'creditCardNumber') {
      let num = value.toString();
      const number = /^[0-9]+$/;
      if (num.length >= 19) {
        target.value = num.substr(0, 19);
      } else if (num.length === 4 || num.length === 9 || num.length === 14) {
        target.value = num + ' ';
      } else if (num[num.length - 1] === ' ') {
        target.value = num.substr(0, num.length - 1);
      } else if (!num[num.length - 1].match(number)) {
        target.value = num.substring(0, num.length - 1);
      }
    }
    // if (name === 'expiration') {
    //   let num = value.toString();
    //   const number = /^[0-9/0-9]+$/;
    //   if (num.length >= 7) {
    //     target.value = num.substr(0, 7);
    //   } else if (num.length === 2) {
    //     target.value = num + '/';
    //   } else if (num[num.length - 1] === '/') {
    //     target.value = num.substr(0, num.length - 1);
    //   } else if (!num[num.length - 1].match(number)) {
    //     target.value = num.substring(0, num.length - 1);
    //   }
    // }
    // if (name === 'expirationYear') {
    //   let num = parseInt(value);
    //   let date = new Date();
    //   const currentYear = date.getFullYear();
    //   // const currentMonth = date.getMonth();
    //   if (num < currentYear) {
    //     // const expirationMonth = document.getElementsByName('expirationMonth').value;
    //     console.log(expirationMonth);
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }

    // if (name === 'expirationMonth') {
    //   let num = parseInt(value);
    //   let date = new Date();
    //   // const currentYear = date.getFullYear();
    //   const currentMonth = date.getMonth();
    //   if (num < currentMonth) {
    //     // const expirationMonth = document.getElementsByName('expirationMonth').value;
    //     console.log(expirationMonth);
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }

    if (name === 'CVV') {
      let num = value.toString();
      const number = /^[0-9]+$/;
      if (num.length >= 4) {
        target.value = num.substring(0, 3);
      } else if (!num[num.length - 1].match(number)) {
        target.value = num.substring(0, num.length - 1);
      }
    }

    if (name === 'address' || name === 'address2') {
      let num = value.toString();
      if (num.length >= 6 && num.length >= 42) {
        target.value = num.substr(0, num.length - 1);
      }
    }

    if (name === 'zip') {
      let num = value.toString();
      const number = /^[0-9/]+$/;
      if (num.length > 5) {
        target.value = num.substr(0, 5);
      } else if (num.length === 0) {
        target.value = '';
      } else if (!num[num.length - 1].match(number)) {
        target.value = num.substring(0, num.length - 1);
      }
    }
  }
  handleClick(event) {
    event.preventDefault();
    this.validateForm();
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
    this.setState({ valid: validated }, () => {
      if (this.state.valid) {
        const data = new FormData(document.querySelector('form'));
        this.handleConfirmationPage();
        setTimeout(this.props.placeOrder(data), 2000);
      }
    });

  }
  validateInput(target) {
    const name = target.name;
    if (name === 'firstName' || name === 'lastName') {
      const validation = {
        validate: /^[A-Za-z_\s]+$/,
        min: 2,
        max: 32,
        message: {
          short: 'Name is too short',
          long: 'Name is too long',
          invalid: 'Not a valid name'
        }
      };
      // const validation = /^[A-Za-z_\s]+$/;
      // return this.handleName(target, 2, 32);
      return this.handleName(target, validation);
      // return this.handleName(target, 2, 32, validation);
    } else if (name === 'nameOnCard') {
      return this.handleName(target, 2, 64);
    } else if (name === 'address' || name === 'address2') {
      return this.handleBothNumbersAndLetter(target);
    } else if (name === 'email') {
      const validation = {
        validate: /^\w+([.-]?\w+)*@\w+([.-]? \w+)*(\.\w{2,3})+$/,
        min: 6,
        max: 254,
        message: {
          short: 'Email is too short',
          long: 'Email is too long',
          invalid: 'Not a valid Email'
        }
      };
      return this.handleName(target, validation);
    } else if (
      name === 'zip' ||
      name === 'creditCardNumber' ||
      name === 'CVV'
    ) {
      return this.handleNumbers(target);
    } else if (name === 'expirationYear') {
      return this.handleExpiration(target);
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
    const value = target.value.replace(' ', '');
    if (value.match(number)) {
      target.nextSibling.classList.remove('d-block');
      return true;
    } else {
      target.nextSibling.classList.add('d-block');
      return false;
    }
  }

  handleName(target, validation) {

    const value = target.value;
    if (value.length < validation.min) {
      target.nextSibling.classList.add('d-block');
      target.nextSibling.innerHTML = validation.message.short;
      return false;
    } else if (value.length > validation.max) {
      target.nextSibling.classList.add('d-block');
      target.nextSibling.innerHTML = validation.message.long;
      return false;
    }

    if (validation.validate) {
      if (value.match(validation.validate)) {
        target.nextSibling.classList.remove('d-block');
        return true;
      } else {
        target.nextSibling.classList.add('d-block');
        target.nextSibling.innerHTML = validation.message.invalid;
        return false;
      }
    } else {
      target.nextSibling.classList.remove('d-block');
      return true;
    }
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
    if (value.match(mailformat) && value.length >= 6) {
      target.nextSibling.classList.remove('d-block');
      target.nextSibling.innerHTML = 'Email is too short';
      return true;
    } else if (value.match(mailformat) && value.length <= 254) {
      target.nextSibling.classList.remove('d-block');
      target.nextSibling.innerHTML = 'Email is too long';
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
  handleExpiration(target) {
    let num = parseInt(target.value);
    let date = new Date();
    const currentYear = date.getFullYear();
    if (num === currentYear) {
      const currentMonth = date.getMonth();
      var expMonth = document.getElementsByName('expirationMonth')[0].value;
      if (expMonth <= currentMonth) {
        target.parentNode.nextSibling.classList.add('d-block');
        return false;
      } else {
        target.parentNode.nextSibling.classList.remove('d-block');
        return true;
      }
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
                Total: {this.cartItemCount(this.props.cart)} items
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
              <div className="row d-flex">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-expiration">Expiration</label>
                  {/* <input
                    type="text"
                    className="form-control"
                    name="expiration"
                    id="cc-expiration"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Invalid Number"
                    placeholder="MM/YYYY"
                    required
                    onChange={this.handleInputChange}
                  /> */}
                  <div className="col-md-12 d-flex p-0 justify-content-between">
                    <select className="form-control  required valid col-md-6" name="expirationMonth" aria-required="true" aria-invalid="false">
                      <option className="select-option" label="January" value="1">January</option>
                      <option className="select-option" label="February" value="2">February</option>
                      <option className="select-option" label="March" value="3">March</option>
                      <option className="select-option" label="April" value="4">April</option>
                      <option className="select-option" label="May" value="5">May</option>
                      <option className="select-option" label="June" value="6">June</option>
                      <option className="select-option" label="July" value="7">July</option>
                      <option className="select-option" label="August" value="8">August</option>
                      <option className="select-option" label="September" value="9">September</option>
                      <option className="select-option" label="October" value="10">October</option>
                      <option className="select-option" label="November" value="11">November</option>
                      <option className="select-option" label="December" value="12">December</option>
                    </select>
                    <span className="m-2"> / </span>
                    <select className="form-control  required valid col-md-4" name="expirationYear" aria-required="true" aria-invalid="false">
                      <option className="select-option" label="2020" value="2020">2020</option>
                      <option className="select-option" label="2021" value="2021">2021</option>
                      <option className="select-option" label="2022" value="2022">2022</option>
                      <option className="select-option" label="2023" value="2023">2023</option>
                      <option className="select-option" label="2024" value="2024">2024</option>
                      <option className="select-option" label="2025" value="2025">2025</option>
                      <option className="select-option" label="2026" value="2026">2026</option>
                      <option className="select-option" label="2027" value="2027">2027</option>
                      <option className="select-option" label="2028" value="2028">2028</option>
                      <option className="select-option" label="2029" value="2029">2029</option>
                      <option className="select-option" label="2030" value="2030">2030</option>
                      <option className="select-option" label="2031" value="2031">2031</option>
                      <option className="select-option" label="2032" value="2032">2032</option>
                      <option className="select-option" label="2033" value="2033">2033</option>
                      <option className="select-option" label="2034" value="2034">2034</option>
                      <option className="select-option" label="2035" value="2035">2035</option>
                      <option className="select-option" label="2036" value="2036">2036</option>
                      <option className="select-option" label="2037" value="2037">2037</option>
                    </select>
                  </div>
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
