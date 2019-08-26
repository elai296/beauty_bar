import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const productId = parseInt(this.props.productId.params.id);
    fetch('/api/products.php?id=' + productId)
      .then(res => res.json())
      .then(json => {
        this.setState({ product: json[0] });
      });
  }

  handleClick(productId) {
    this.props.setView('catalog', { id: productId });
  }

  render() {
    if (this.state.product === null) {
      return null;
    } else {
      return (
        <div className="container"onClick={this.handleClick}>Back To Catalog
          <div className="row">
            <div className="col-md-6">
              {<img className="image" src={this.state.product.image} />}
            </div>
            <div className="col-md-6">
              <div className="p-2 font-weight-bold">{this.state.product.name}</div>
              <div className="p-2">{'$' + (this.state.product.price * 0.01).toFixed(2)}</div>
              <div className="p-2">{this.state.product.shortDescription}</div>
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
