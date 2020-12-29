import React from "react";
import {Link ,Navlink , withRouter} from 'react-router-dom'
const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // },2000) 
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Garuda Times</a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar
