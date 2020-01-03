/* eslint-disable no-console */
import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list.jsx';
import ProductDetails from './ProductDetails.jsx';
import CartSummary from './cartSummary.jsx';
import CheckoutForm from './checkoutForm';
import HomePage from './homepage';
import Footer from './footer.jsx';
import ThankYouConfirmationPage from './thankYouConfirmationPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home page',
      cart: [],
      cartItems: 0
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
        this.setState({ cartItems: this.sumCartItem(cartProducts) });
      });
  }

  placeOrder(order) {
    fetch('/api/orders.php', {
      method: 'POST',
      body: order
    }).then(response => response.json());
  }

  addToCart(product, quantity) {
    fetch('/api/cart.php?id=' + product.id + '&quantity=' + quantity, {
      method: 'POST',
      body: JSON.stringify(product)
    })
      .then(() => this.getCartItem());
  }

  deleteFromCart(product) {
    fetch('/api/cart.php?id=' + product, {
      method: 'DELETE',
      body: JSON.stringify(product)
    })
      .then(() => this.getCartItem());
  }
  updateCart(item, count) {
    fetch('/api/cart.php?id=' + item + '&qty=' + count, {
      method: 'PUT'
    })
      .then(() => this.getCartItem());
  }

  cartSummaryCalculate(cart) {
    var sum = 0;
    cart.map(item => {
      return (
        sum += parseInt(item.price) * parseInt(item.count)
      );
    });
    return '$' + (sum * 0.01).toFixed(2);
  }
  sumCartItem(cart) {
    let Items = 0;
    if (cart !== undefined) {
      for (let item of cart) {
        const itemCount = parseInt(item.count);
        Items += itemCount;
      }
    }
    return Items;
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

  componentDidMount() {
    this.getCartItem();
  }

  render() {
    let display;
    if (this.state.view === 'home page') {
      display = <HomePage setView={this.setView} AddToCart={this.addToCart}/>;
    } else if (this.state.view === 'catalog') {
      display = <ProductList setView={this.setView} AddToCart={this.addToCart}/>;
    } else if (this.state.view === 'cart') {
      display = <CartSummary cart={this.state.cart} setView={this.setView} CartSummaryCalculate={this.cartSummaryCalculate} deleteFromCart={this.deleteFromCart} updateCart={this.updateCart}/>;
    } else if (this.state.view === 'checkout') {
      display = <CheckoutForm cart={this.state.cart} setView={this.setView} placeOrder={this.placeOrder} cartSummaryCalculate={this.cartSummaryCalculate} deleteFromCart={this.deleteFromCart}/>;
    } else if (this.state.view === 'thankyouconfirmationpage') {
      display = <ThankYouConfirmationPage cart={this.state.cart} setView={this.setView} cartItemCount={this.cartItemCount} cartSummaryCalculate={this.cartSummaryCalculate} placeOrder={this.placeOrder} />;
    } else if (this.state.view === 'detail') {
      display = <ProductDetails setView={this.setView} productId={this.state.params} AddToCart={this.addToCart}/>;
    }
    const itemCount = this.state.cartItems;

    return (
      <React.Fragment>
        <Header cartItemCount= {itemCount} setView={this.setView} />
        {display}
        <Footer />
      </React.Fragment>
    );
  }
}
