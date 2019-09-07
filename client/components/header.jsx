import React from 'react';
function handleClick(props) {
  props.setView('cart', { });
}
function handleClickHome(props) {
  props.setView('catalog', {});
}
function Header(props) {
  return (
    <div className="navbar navbar-default">
      <div className="fas fa-random" onClick={e => handleClickHome(props)}>  Wicked Sales</div>
      <div className="fas fa-shopping-cart " onClick={e => handleClick(props)}>{props.cartItemCount} items</div>
    </div>
  );
}

export default Header;
