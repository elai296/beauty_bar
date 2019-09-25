/* eslint-disable no-console */
import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list.jsx';
import ProductDetails from './ProductDetails.jsx';
import CartSummary from './cartSummary.jsx';
import CheckoutForm from './checkoutForm';
import HomePage from './homepage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home page',
      // view: 'checkout',
      params: {},
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.getCartItem = this.getCartItem.bind(this);
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
        console.log('cart item:', cartProducts);
      });
  }

  placeOrder(order) {
    fetch('/api/orders.php', {
      method: 'POST',
      body: order
    }).then(response => response.json());
    this.setState({ cart: [] });
    this.setView('catalog', {});
  }

  addToCart(product) {
    fetch('/api/cart.php', {
      method: 'POST',
      body: JSON.stringify(product)
    }).then(response => response.json());
    this.setState({ cart: [...this.state.cart, product] }
      , () => console.log(this.state.cart)
    );

  }

  cartSummaryCalculate(cart) {
    var sum = 0;
    cart.map(item => {
      return (
        sum += parseInt(item.price)
      );
    });
    return '$' + (sum * 0.01).toFixed(2);
  }

  componentDidMount() {
    this.getCartItem();
  }

  render() {
    let display;
    if (this.state.view === 'home page') {
      display = <HomePage setView={this.setView} />;
    } else if (this.state.view === 'catalog') {
      display = <ProductList setView={this.setView} />;
    } else if (this.state.view === 'cart') {
      display = <CartSummary cart={this.state.cart} setView={this.setView} CartSummaryCalculate={this.cartSummaryCalculate}/>;
    } else if (this.state.view === 'checkout') {
      display = <CheckoutForm cart={this.state.cart} setView={this.setView} placeOrder={this.placeOrder} CartSummaryCalculate={this.cartSummaryCalculate}/>;
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
