import React from 'react';
import Carousel2 from './carousel copy';

function HomePage(props) {
  // const myArr = ['https://www.sephora.com/productimages/sku/s1501311-av-01-zoom.jpg', 'https://www.sephora.com/productimages/sku/s2129922-av-01-zoom.jpg', 'https://www.sephora.com/productimages/product/p449116-av-10-zoom.jpg'];
  const frontPageArr = ['../image/frontCover1.jpeg', '../image/frontCover2.jpg', '../image/frontCover4.jpg'];
  return (
    <div>
      <div className="container">
        {/* <Carousel /> */}
        <Carousel2 frontPageArr={frontPageArr}/>
      </div>
    </div>
  );
}

export default HomePage;
