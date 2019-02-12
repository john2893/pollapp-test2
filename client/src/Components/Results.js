import React, { Component } from 'react'

export class Results extends Component {
  render() {
    return (
      <div>
        <h1> Results: {this.props.dance}</h1>
        <p>The graph of the result... real time.</p>
        <div className="col-xs-2">
            <span id="connection-status" className={this.props.status}></span>
        </div>
      </div>
    )
  }
}

export default Results
