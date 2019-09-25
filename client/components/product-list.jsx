import React from 'react';
import ProductListItem from './product-list-item';
// import Carousel from './carousel';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  getProducts() {
    fetch('/api/products.php')
      .then(function (response) {
        return response.json();
      })
      .then(products =>
        this.setState({ products })
      );
  }
  componentDidMount() {
    this.getProducts();
  }

  handleClick(productId) {
    this.props.setView('detail', { id: productId });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.products.map(product => {
            return (
              <div className="col-md-3" key = {product.id}>
                <ProductListItem
                  productId = {product.id}
                  brand={product.brand}
                  name={product.name}
                  price={'$' + (product.price * 0.01).toFixed(2)}
                  image={product.image}
                  shortdescription={product.shortDescription}
                  handleClick={this.handleClick}/>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ProductList;
