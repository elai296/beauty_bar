import React from 'react';
import ProductDetailCarousel from './productDetailCarousel';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    const productId = this.props.productId.params.id;
    fetch('/api/products.php?id=' + productId)
      .then(res => res.json())
      .then(json => {
        this.setState({ product: json[0] });
      });
  }

  handleClick(productId) {
    this.props.setView('catalog', { id: productId });
  }
  handleAddToCart(product) {
    this.props.AddToCart(product);
  }

  render() {
    if (this.state.product === null) {
      return null;
    } else {
      return (
        <div className="detailContainer">
          <div className="row justify-content-center mt-3">
            <div className="col-md-4">
              <ProductDetailCarousel images={this.state.product.images} />
            </div>
            <div className="col-md-6">
              <div className="detailBrand p-2 font-weight-bold">{this.state.product.brand}</div>
              <div className="detailName p-2">{this.state.product.name}</div>
              <div className="p-2">{'$' + (this.state.product.price * 0.01).toFixed(2)}</div>
              <div className="borderDetail">
                <button className="addToCartButton" onClick={e => this.handleAddToCart(this.state.product)}>ADD TO BASKET</button>
              </div>
              <div className="detailDescription p-2">{this.state.product.shortDescription}</div>
              <div className="detailDescription mt-4">{this.state.product.longDescription}</div>
              <div className="pt-5"onClick={this.handleClick}>
                {'< Return to Shopping'}
              </div>
            </div>
          </div>
        </div>
      );

    }
  }
}

export default ProductDetails;
