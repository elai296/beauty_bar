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
      <div className="navbar navbar-default bg-light">
        <div className="freeShipping text-dark" onClick={e => handleClickHome(props)}>  Free 3-Day Shipping over $50</div>
        <div >
          <img className="homeIcon secondary-link" src={'../image/homeIcon.png'} onClick={e => handleClickHome(props)}/>
        </div>
        <div className="shop text-dark" onClick={e => handleClickProductList(props)}>Shop </div>
        <div className="shoppingBasket">

          <i className="fas fa-shopping-basket" onClick={e => handleClick(props)}>{props.cartItemCount} items</i>
        </div>
        {/* <i className="fas fa-shopping-basket" onClick={e => handleClick(props)}>{props.cartItemCount} items</i> */}
      </div>
      <div><h1 className='text-center'>beautyBar</h1></div>
    </div>
  );
}

export default Header;
