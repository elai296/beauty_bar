import React from 'react';

function handleCatalog(props) {
  props.setView('catalog', {});
}

export default function MyAd(props) {
  const showNow = { backgroundColor: '#bc2226', color: '#fff', borderRadius: '3px', borderColor: '#bc2226', fontSize: '0.75em', width: '65%' };
  return (
    <a href="#">
      <div className='row hero-image position-relative no-gutters' onClick={() => handleCatalog(props)}>
        <div className='col-10 col-sm-6 col-xl-4 promo-box position-absolute d-flex justify-content-center align-items-center flex-column'>
          <h4>Beauty Wish List</h4>
          <button style={showNow}>Shop now</button>
        </div>
        <div className="d-none d-sm-block col-sm-5 p-md-0 text-right"><img src="./image/fresh1.jpg" className="img-fluid" alt="fresh1" />
        </div><div className="col-12 col-sm-7 p-0"><img src="./image/fresh2.jpg" className="img-fluid" alt="fresh1" />
        </div>

      </div>
    </a>
  );
}
