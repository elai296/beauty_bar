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
      <div className="navbar navbar-default">
        <div className="freeShipping" onClick={e => handleClickHome(props)}>  Free 3-Day Shipping over $50</div>
        <div className="home" onClick={e => handleClickHome(props)} >Home
        </div>
        <div className="shop" onClick={e => handleClickProductList(props)}>Shop </div>
        <div className="shoppingBasket">

          <i className="fas fa-shopping-basket" onClick={e => handleClick(props)}>{props.cartItemCount} items</i>
        </div>
      </div>
      <div><h1 className='text-center beautyBar'>beautyBar</h1></div>
    </div>
  );
}

export default Header;
