import React, { Component } from 'react';

class ProductDetailCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    };
  }

  handleImage(id) {
    this.setState({
      position: id
    });
  }

  render() {
    return (
      <div>
        <div className="firstPicProductDetailCarousel">{<img src={this.props.images[this.state.position]} />}</div>
        <div>
          <div className="carouselPicturesDetails">
            {this.props.images.map((picture, i) => {
              return (
                <div key={i}>
                  {<img src={picture} onClick={() => this.handleImage(i)}/>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

}
export default ProductDetailCarousel;
