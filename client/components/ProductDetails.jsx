import React from 'react';

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
        <div className="container">
          <div onClick={this.handleClick}>
            Back To Catalog
          </div>
          <div className="row">
            <div className="col-md-6">
              {<img className="image" src={this.state.product.image} />}
            </div>
            <div className="col-md-6">
              <div className="p-2 font-weight-bold">{this.state.product.name}</div>
              <div className="p-2">{'$' + (this.state.product.price * 0.01).toFixed(2)}</div>
              <div className="p-2">{this.state.product.shortDescription}</div>
              <button className="addToCartButton" onClick={e => this.handleAddToCart(this.state.product)}>Add to Cart</button>
            </div>
            <div className="col">
              <div className="mt-5">{this.state.product.longDescription}</div>
            </div>
          </div>
        </div>
      );

    }
  }
}

export default ProductDetails;
