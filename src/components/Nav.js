import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper red darken-2">
          <Link to="/" className="brand-logo">
            <i class="material-icons">{this.props.icon}</i>
            {this.props.title}
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/letters">Go to Santa's List</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
