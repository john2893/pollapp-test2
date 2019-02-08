import React, { Component } from 'react'

export class Admin extends Component {
  render() {
    return (
      <div>
        <h1>Admin : {this.props.title} { this.props.dance}</h1>
        <p> After login this is the page the admin sees.</p>
        <div className="col-xs-2">
            <span id="connection-status" className={this.props.status}></span>
        </div>
      </div>
    )
  }
}

export default Admin
