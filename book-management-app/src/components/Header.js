import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>WhatsApp 2</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          lista de contatos
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          add contatos
        </NavLink>
      </div>
    </header>
  );
};

export default Header;