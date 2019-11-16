import React from 'react';

function Carousel(props) {
  const frontPageArr = props.frontPageArr;
  return (
    <div id="carouselParent" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {frontPageArr.map((item, i) => {
          let myClass = i === 0 ? 'active' : '';
          return (
            <li data-target="#carouselParent" data-slide-to={i} className={myClass} key={i}></li>
          );

        })}
      </ol>
      <div className="carousel-inner">
        {frontPageArr.map((item, i) => {
          let myClass = i === 0 ? 'carousel-item active' : 'carousel-item';
          return (
            <div className={myClass} key={i}>
              {<img className="imageBorder d-block" src={item} alt="slide" onClick={() => props.setView('catalog', {})}/>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Carousel;
