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
      <div className="freeShipping text-center mt-4" onClick={e => handleClickHome(props)}></div>
      <nav className="navbar navbar-expand-lg navbar-light stripedNavBar  pl-5 text-dark">
        <a href="#"className="beautyBarLogo my-auto navbar-brand" onClick={e => handleClickHome(props)}><h3 className='text-center beautyBar brand font-italic'>beauty bar</h3></a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active my-auto pl-3 pr-3">
              <a className="home nav-link headerHover text-dark" href="#"onClick={e => handleClickHome(props)} data-toggle="collapse" data-target="#navbarNav">HOME<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item  my-auto pl-3 pr-3">
              <a className="shop nav-link headerHover text-dark" href="#"onClick={e => handleClickProductList(props)} data-toggle="collapse" data-target="#navbarNav">SHOP</a>
            </li>
            <li className="nav-item  my-auto pl-3 pr-3">
              <a href='#' className="nav-link shoppingBasket headerHover text-dark" onClick={e => handleClick(props)} data-toggle="collapse" data-target="#navbarNav"><i className="fas fa-shopping-basket"></i> {props.cartItemCount} items</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
