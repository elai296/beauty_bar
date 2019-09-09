import React from 'react';
function handleClick(props) {
  props.setView('cart', { });
}
function handleClickHome(props) {
  props.setView('catalog', {});
}
function Header(props) {
  return (
    <div>
      <div className="navbar navbar-default">
        <div className="fas fa-random" onClick={e => handleClickHome(props)}>  Free 3-Day Shipping over $50</div>
        <div className="fas fa-shopping-cart " onClick={e => handleClick(props)}>{props.cartItemCount} items</div>
      </div>
      <div><h1 className='text-center'>RADIANT BEAUTY</h1></div>
    </div>
  );
}

export default Header;
