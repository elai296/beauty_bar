import React from 'react';

function handleCatalog(props) {
  props.setView('catalog', {});
}

export default function MyAd(props) {
  const showNow = { backgroundColor: '#bc2226', color: '#fff', borderRadius: '3px', borderColor: '#bc2226', fontSize: '0.75em', width: '65%', cursor: 'pointer' };
  return (
    <div className="container">
      <div className='row hero-image position-relative no-gutters' >
        <div className='col-10 col-sm-6 col-xl-4 promo-box position-absolute d-flex justify-content-center align-items-center flex-column'>
          <h4>Beauty Wish List</h4>
          <button style={showNow} onClick={() => handleCatalog(props)}>Shop now</button>
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-none d-lg-block col-lg-5 p-lg-0 desktop-images">
            <div className="text-right">
              <img src="./image/fresh1.jpg" className="img-fluid" alt="fresh1" />
            </div>
          </div>
          <div className="col-12 col-lg-7 p-0 main-image-container">
            <img src="./image/fresh2.jpg" className="img-fluid" alt="fresh2" />
          </div>
        </div>
      </div>
    </div>
  );
}
