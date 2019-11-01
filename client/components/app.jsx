/* eslint-disable no-console */
import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list.jsx';
import ProductDetails from './ProductDetails.jsx';
import CartSummary from './cartSummary.jsx';
import CheckoutForm from './checkoutForm';
import HomePage from './homepage';
import Footer from './footer.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home page',
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.getCartItem = this.getCartItem.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.sumCartItem = this.sumCartItem.bind(this);
    this.updateCart = this.updateCart.bind(this);
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
    fetch('/api/orders.php', {
      method: 'POST',
      body: order
    }).then(response => response.json());
    this.setState({ cart: [] });
    this.setView('catalog', {});
  }

  addToCart(product) {
    fetch('/api/cart.php?id=' + product.id, {
      method: 'POST',
      body: JSON.stringify(product)
    }).then(response => response.json());
    this.setState({ cart: [...this.state.cart, product] });

  }

  deleteFromCart(product) {
    fetch('/api/cart.php?id=' + product, {
      method: 'DELETE',
      body: JSON.stringify(product)
    }).then(this.getCartItem());
  }
  updateCart(item, count) {
    fetch('/api/cart.php?id=' + item + '&qty=' + count, {
      method: 'PUT'
    }).then(this.getCartItem());
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
  sumCartItem() {
    const cart = this.state.cart;
    let cartCount = 0;
    if (cart.length > 0) {
      for (let item of cart) {
        const itemCount = parseInt(item.count);
        cartCount += itemCount;
      }
    }
    return cartCount;
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
      display = <CartSummary cart={this.state.cart} setView={this.setView} CartSummaryCalculate={this.cartSummaryCalculate} deleteFromCart={this.deleteFromCart} updateCart={this.updateCart}/>;
    } else if (this.state.view === 'checkout') {
      display = <CheckoutForm cart={this.state.cart} setView={this.setView} placeOrder={this.placeOrder} CartSummaryCalculate={this.cartSummaryCalculate}/>;
    } else if (this.state.view === 'detail') {
      display = <ProductDetails setView={this.setView}
        productId={this.state.params}
        AddToCart={this.addToCart}/>;
    }

    return (
      <React.Fragment>
        <Header cartItemCount= {this.sumCartItem()} setView={this.setView} />
        {display}
        <Footer />
      </React.Fragment>
    );
  }
}
