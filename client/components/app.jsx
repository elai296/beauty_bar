import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list.jsx';
import ProductDetails from './ProductDetails.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'catalog',
      params: {}
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: name,
      params: { params }
    });
    // console.log(name, params);
  }

  render() {
    let display;
    if (this.state.view === 'catalog') {
      display = <ProductList setView={this.setView} />;
    } else {
      display = <ProductDetails setView={this.setView}
        productId={this.state.params}/>;
    }
    return (
      <React.Fragment>
        <Header/>
        {display}

        {/* <ProductList
          setView={this.setView}/> */}
        {/* <ProductDetails /> */}

      </React.Fragment>
    );
  }
}
