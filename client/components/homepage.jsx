import React from 'react';
// import Carousel2 from './carousel copy';
import FeaturedProducts from './featuredProducts';
import DemoModal from './demoModal';
import MyAd from './ad1';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

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

  componentDidMount() {
    this.getProducts();
  }

  render() {
    // const frontPageArr = ['../image/frontCover1.jpeg', '../image/frontCover2.jpg', '../image/frontCover4.jpg'];
    let featureProducts;
    if (this.state.products.length > 0) {
      featureProducts = <FeaturedProducts FeaturedProducts = {this.state.products} setView={this.props.setView}/>;
    }

    return (
      <div className="col-12 mt-4">
        <DemoModal />
        {/* <Carousel2 frontPageArr={frontPageArr} setView={this.props.setView}/> */}
        <MyAd setView={this.props.setView} />
        {featureProducts}
      </div>
    );

  }
}

export default HomePage;