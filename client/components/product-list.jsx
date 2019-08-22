import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  getProducts() {
    fetch('/api/products.php')
      .then(function (response) {
        return response.json();
      })
      .then(products =>
        this.setState({ products }));
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.products.map(product => {
            return (
              <div className="col-md-3" key = {product.id}>
                <ProductListItem
                  name={product.name}
                  price={'$' + (product.price * 0.01).toFixed(2)}
                  image={product.image}
                  shortdescription={product.shortDescription} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ProductList;
