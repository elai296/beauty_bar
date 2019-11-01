import React, { Component } from 'react';

export class productDetailCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    };
  }
  handleClick(id) {
    this.setState({ position: id });
  }
  render() {
    return (
      <div>
        <div className="ProductDetailMainImg">
          {<img className="d-block w-100" src={this.props.images[this.state.position]} />}
        </div>
        <div className="ProductDetailThumbnails">

          {this.props.images.map((image, x) => {
            return (
              <div key={x}>
                {<img className="" src={image} alt={x} onClick={() => this.handleClick(x)}/>}
              </div>
            );
          })
          }
        </div>
      </div>
    );
  }
}

export default productDetailCarousel;
