import React from 'react';
import ProductDetailCarousel from './productDetailCarousel';
import CheckoutModal from './checkoutModal';

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
    const qty = document.getElementById('qty').value;
    this.props.AddToCart(product, qty);
  }

  render() {
    let qty = document.getElementById('qty') == null ? 0 : document.getElementById('qty').value;
    if (this.state.product === null) {
      return null;
    } else {
      return (
        <div className="detailContainer">
          <CheckoutModal product={this.state.product} setView={this.props.setView} itemQty={qty}/>
          <div className="row justify-content-center mt-3">
            <div className="col-md-4">
              <ProductDetailCarousel images={this.state.product.images} />
            </div>
            <div className="col-md-6">
              <div className="detailBrand p-2 font-weight-bold">{this.state.product.brand}</div>
              <div className="detailName p-2">{this.state.product.name}</div>
              <div className="p-2">{'$' + (this.state.product.price * 0.01).toFixed(2)}</div>
              <div className="borderDetail">
                <select name="quantity" className="col-1 cartQty align-items-center my-auto mr-3" id='qty'>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <button className="addToCartButton" onClick={e => this.handleAddToCart(this.state.product)} data-toggle="modal" data-target="#checkoutModal">ADD TO BASKET</button>
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
