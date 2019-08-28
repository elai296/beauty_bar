import React from 'react';

function Header(props) {
  return (
    <div className="navbar navbar-default">
      <div className="fas fa-random">  Wicked Sales</div>
      <div className="fas fa-shopping-cart">{props.cartItemCount}</div>
    </div>
  );
}

export default Header;
