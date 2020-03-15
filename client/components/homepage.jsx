import React from 'react';
import FeaturedProducts from './featuredProducts';
import DemoModal from './demoModal';
import MyAd from './ad1';
import QuickLookModal from './quickLookModal';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      quickLookModal: { show: false, product: {} }
    };
    this.showQuickLook = this.showQuickLook.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  getProducts() {
    fetch('./api/products.php')
      .then(function (response) {
        return response.json();
      })
      .then(products =>
        this.setState({ products: products })
      );
  }
  showQuickLook(product) {
    this.setState({ quickLookModal: { show: true, product: product } });
  }
  handleAddToCart(product) {
    const qty = document.getElementById('qty').value;
    this.props.AddToCart(product, qty);
  }
  componentDidMount() {
    this.getProducts();
  }

  render() {
    let featureProducts;
    if (this.state.products.length > 0) {
      featureProducts = <FeaturedProducts FeaturedProducts = {this.state.products} setView={this.props.setView} showQuickLook={this.showQuickLook}/>;
    }

    return (
      <div className="col-12 mt-4">
        <DemoModal />
        <QuickLookModal product={this.state.quickLookModal.product} handleAddToCart={this.handleAddToCart}/>
        <MyAd setView={this.props.setView} />
        {featureProducts}
      </div>
    );

  }
}

export default HomePage;
