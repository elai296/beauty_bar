import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list.jsx';
import ProductDetails from './ProductDetails.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'catalog',
      params: {},
      cart: []
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: name,
      params: { params }
    });

  }

  getCartItem() {
    fetch('/api/cart.php')
      .then(response =>
        response.json()
      )
      .then(cartProducts => {
        this.setState({ cart: cartProducts });
      });
  }

  addToCart(product) {
    fetch('/api/cart.php', {
      method: 'POST',
      body: product
    }).then(response => response.json());
    this.setState({ cart: [...this.state.cart, product] });
  }

  componentDidMount() {
    this.getCartItem();
  }

  render(props) {
    let display;
    if (this.state.view === 'catalog') {
      display = <ProductList setView={this.setView} />;
    } else {
      display = <ProductDetails setView={this.setView}
        productId={this.state.params}
        AddToCart={this.addToCart}/>;
    }
    return (
      <React.Fragment>
        <Header cartItemCount= {this.state.cart.length} />
        {display}

      </React.Fragment>
    );
  }
}
