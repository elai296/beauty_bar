import React from 'react';
function Carousel(props) {
  return (
    <div>
      <div id="carouselParent" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselParent" data-slide-to="0" className="active"></li>
          <li data-target="#carouselParent" data-slide-to="1"></li>
          <li data-target="#carouselParent" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">BEAUTY MUST-HAVES
            {<img className="d-block" src="https://www.sephora.com/productimages/sku/s1501311-av-01-zoom.jpg" alt="First slide" />}
          </div>
          <div className="carousel-item">
            {<img className="d-block" src="https://www.sephora.com/productimages/sku/s2129922-av-01-zoom.jpg" alt="Second slide" />}
          </div>
          <div className="carousel-item">
            <img className="d-block" src="https://www.sephora.com/productimages/product/p449116-av-10-zoom.jpg" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
export default Carousel;
