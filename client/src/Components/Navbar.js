import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/results">Results</a></li>
            <li><a href="/admin">Admin</a></li>
        </ul>
        <div className="col-xs-2">
            <span id="connection-status" className={this.props.status}></span>
        </div>
      </div>
    )
  }
}

export default Navbar
