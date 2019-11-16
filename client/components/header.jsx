import React from 'react';

function handleClick(props) {
  props.setView('cart', { });
}
function handleClickHome(props) {
  props.setView('home page', {});
}
function handleClickProductList(props) {
  props.setView('catalog', {});
}
function Header(props) {
  return (
    <div className=''>
      <div className="freeShipping text-center mt-4" onClick={e => handleClickHome(props)}>FREE 3-DAY SHIPPING OVER $50</div>
      <nav className="navbar navbar-expand-lg navbar-dark stripedNavBar  pl-5">
        <a className="beautyBarLogo my-auto navbar-brand" onClick={e => handleClickHome(props)}><h3 className='text-center beautyBar brand'>beautyBar</h3></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item active my-auto pl-3 pr-3">
              <a className="home nav-link text-white" href="#"onClick={e => handleClickHome(props)}>HOME<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item  my-auto pl-3 pr-3">
              <a className="shop nav-link text-white" href="#"onClick={e => handleClickProductList(props)}>SHOP</a>
            </li>
            <li className="nav-item  my-auto pl-3 pr-3">
              <a className="fas fa-shopping-basket shoppingBasket" onClick={e => handleClick(props)}>   {props.cartItemCount} items</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
