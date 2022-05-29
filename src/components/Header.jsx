import React from 'react';

function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="headerLeft d-flex align-center">
        <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="" />
        <div>
          <h3 className="text-uppercase"> React Sneakers</h3>
          <p className="opacity-5">Магазин найкращих кросівок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg" alt="" />
          <span className="ml-10"> 2000 грн</span>
        </li>
        <li className="mr-30">
          <img width={18} height={18} src="/img/like.svg" alt="" />
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
