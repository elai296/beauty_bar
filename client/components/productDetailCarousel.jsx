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
      <a href="#">
        <div className="productCarousel">
          <div className="firstPicProductDetailCarousel">
            {<img src={this.props.images[this.state.position]} className='imgObjFitContain' />}
          </div>
          <div className="carouselPictures">
            {this.props.images.map((picture, i) => {
              return (
                <div className="carouselDetail " key={i} >
                  {<img src={picture} onMouseOver={() => this.handleImage(i)} className='imgObjFitContain'/>}
                </div>
              );
            })}
          </div>
        </div>
      </a>
    );
  }

}
export default ProductDetailCarousel;
