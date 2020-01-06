/* eslint-disable no-console */
import React from 'react';
import ProductListItem from './product-list-item';
import QuickLookModal from './quickLookModal';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      quickLookModal: { show: false, product: {} }

    };
    this.handleClick = this.handleClick.bind(this);
    this.showQuickLook = this.showQuickLook.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  getProducts() {
    fetch('/api/products.php')
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

  handleClick(productId) {
    this.props.setView('detail', { id: productId });
  }
  handleAddToCart(product) {
    const qty = document.getElementById('qty').value;
    this.props.AddToCart(product, qty);
  }
  showQuickLook(product) {
    this.setState({ quickLookModal: { show: true, product: product } });
  }
  render() {

    return (
      <div className="containerProductList text-center allProductsLogo">
        <h4 className='mt-5 py-2 text-center underlineRed'>ALL BEAUTY PRODUCTS</h4>
        <div className="row d-flex flex-wrap">
          <QuickLookModal product={this.state.quickLookModal.product} handleAddToCart={this.handleAddToCart}/>
          {this.state.products.map(product => {
            return (
              <div
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6 dotsBordersRight my-3"
                key={product.id}
              >
                <ProductListItem
                  productId={product.id}
                  brand={product.brand}
                  name={product.name}
                  price={'$' + (product.price * 0.01).toFixed(2)}
                  image={product.image}
                  shortdescription={product.shortDescription}
                  handleClick={this.handleClick}
                  product={product}
                  showQuickLook = {this.showQuickLook}
                />

              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ProductList;
