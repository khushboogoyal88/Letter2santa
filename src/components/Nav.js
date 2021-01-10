import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ icon, title }) => {
  return (
    <nav>
      <div className="nav-wrapper red darken-2">
        <Link to="/" className="brand-logo">
          <i class="material-icons">{icon}</i>
          {title}
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/letters">Go to Santa's List</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
