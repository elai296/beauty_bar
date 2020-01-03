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

  onUpdate(input, btn) {
    let count = input.value;
    if (btn === 'plus') {
      count++;
    } else {
      count--;
    }
    if (count > 0) {
      input.value = count;
    }
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
        <div className="detailContainer container">
          <CheckoutModal product={this.state.product} setView={this.props.setView} itemQty={qty}/>
          <div className="row justify-content-center mt-3">
            <div className="col-md-4">
              <ProductDetailCarousel images={this.state.product.images} />
            </div>
            <div className="col-md-6">
              <div className="detailBrand p-2 font-weight-bold">{this.state.product.brand}</div>
              <div className="detailName p-2">{this.state.product.name}</div>
              <div className="p-2">{'$' + (this.state.product.price * 0.01).toFixed(2)}</div>
              <div className="quantity">
                <button className="plus-btn" type="button" name="plus" onClick={e => this.onUpdate(e.currentTarget.nextSibling, e.currentTarget.name)}>
                  <i className="fas fa-plus"></i>
                </button>
                <input id="qty" className="text-center" type="text" name="quantity" defaultValue="1" />
                <button className="minus-btn" type="button" name="minus" onClick={e => this.onUpdate(e.currentTarget.previousSibling, e.currentTarget.name)}>
                  <i className="fas fa-minus"></i>
                </button>
              </div>
              <button className="addToCartButton mt-4 ml-0" onClick={e => this.handleAddToCart(this.state.product)} data-toggle="modal" data-target="#checkoutModal">ADD TO BASKET</button>
            </div>
            <div className="container">
              <div className="detailDescription p-2">{this.state.product.shortDescription}</div>
              <div className="detailDescription mt-4">{this.state.product.longDescription}</div>
              <a href="#">
                <div className="pt-5"onClick={this.handleClick}>
                  {'< Return to Shopping'}
                </div>
              </a>
            </div>
          </div>
        </div>

      );
    }
  }
}

export default ProductDetails;
