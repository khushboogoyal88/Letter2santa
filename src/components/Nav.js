import React, { Component } from "react";

export class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper red darken-2">
          <a href="#" className="brand-logo">
            <i class="material-icons">{this.props.icon}</i>
            {this.props.title}
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a>Go to Santa's List</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
