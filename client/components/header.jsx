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
    <div>
      <div className="freeShipping text-center mt-4" onClick={e => handleClickHome(props)}>FREE 3-DAY SHIPPING OVER $50</div>
      <div className="navbar navbar-default d-flex justify-content-around">
        <div className="beautyBarLogo"><h4 className='text-center beautyBar'>beautyBar</h4></div>
        <div className="home" onClick={e => handleClickHome(props)} >HOME
        </div>
        <div className="shop" onClick={e => handleClickProductList(props)}>SHOP </div>
        <div className="shoppingBasket">

          <i className="fas fa-shopping-basket" onClick={e => handleClick(props)}>{props.cartItemCount} items</i>
        </div>
      </div>
    </div>
  );
}

export default Header;
