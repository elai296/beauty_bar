import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // Header() {
  //   return (
  //     <div>Wicked Sales</div>
  //   );
  // }

  // ProductListItem() {
  //   return (
  //     <div>
  //       <h1>The Very Hungry Caterpillar</h1>
  //       <p>The best book ever!</p>
  //     </div>
  //   );
  // }

  // ProductList() {
  //   // this.state = [];

  // }
  render() {
    return (
      <React.Fragment>
        <Header/>
        <ProductList/>
      </React.Fragment>

    );
  }
}
