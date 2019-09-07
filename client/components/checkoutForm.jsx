import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      creditCard: null,
      shippingAddress: {
        address: '',
        address2: null,
        city: null,
        state: null,
        zip: null
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
    }
    // , () => console.log(this.state)
    );
  }
  handleClick() {
    this.props.placeOrder();
  }
  render() {
    return (
      <div className="container">
        <form id ="placeOrder">
          {/* action="/api/order.php" method="post"> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Name</label>
              <input type="text" className="form-control" id="inputName" placeholder="Name" name="name" onChange={this.handleInputChange}/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Credit Card</label>
              <input type="text" className="form-control" id="inputCard" placeholder="Credit Card" name="creditCard"onChange={this.handleInputChange}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="" name="address.address"onChange={this.handleInputChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="address.address2"onChange={this.handleInputChange}/>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" name="address.city"onChange={this.handleInputChange}/>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select id="inputState" className="form-control" name="address.state" onChange={this.handleInputChange}>
                <option defaultValue>Choose...</option>
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
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" name="address.zip"onChange={this.handleInputChange}/>
            </div>
          </div>
          <button type="submit"
            className="btn btn-primary"
            onClick={() => this.handleClick()}
          >
            Place Order
          </button>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
