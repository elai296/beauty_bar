/* eslint-disable no-console */
import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list.jsx';
import ProductDetails from './ProductDetails.jsx';
import CartSummary from './cartSummary.jsx';
import CheckoutForm from './checkoutForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'catalog',
      params: {},
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
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

  placeOrder(order) {
    // fetch('/api/orders.php', {
    //   method: 'POST',
    //   body: order
    // }).then(response => response.json());
    this.setState({ cart: [] });
    this.setView('catalog', {});
  }

  addToCart(product) {
    // fetch('/api/cart.php', {
    //   method: 'POST',
    //   body: product
    // }).then(response => response.json());
    this.setState({ cart: [...this.state.cart, product] }
      // , () => console.log(this.state.cart)
    );

  }

  componentDidMount() {
    // this.getCartItem();
  }

  render() {
    let display;
    if (this.state.view === 'catalog') {
      display = <ProductList setView={this.setView} />;
    } else if (this.state.view === 'cart') {
      display = <CartSummary cart={this.state.cart} setView={this.setView} />;
    } else if (this.state.view === 'checkout') {
      display = <CheckoutForm cart={this.state.cart} setView={this.setView} placeOrder={this.placeOrder} />;
    } else if (this.state.view === 'detail') {
      display = <ProductDetails setView={this.setView}
        productId={this.state.params}
        AddToCart={this.addToCart}/>;
    }

    return (
      <React.Fragment>
        <Header cartItemCount= {this.state.cart.length} setView={this.setView} />
        {display}

      </React.Fragment>
    );
  }
}
