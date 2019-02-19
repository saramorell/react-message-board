import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
          <nav className="navbar navbar-dark bg-secondary">
            <div className="navbar-brand">Message Board</div>
            <div>
            <button type="button" className="btn btn-light"
            onClick={this.props.composeToggle}>+ New Message</button>
            </div>
          </nav>
        )
    }
}
export default Header;
