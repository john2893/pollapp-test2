import React, { Component } from 'react'
import Display from './Display';
import Join from "./Join";
export class Users extends Component {
  render() {
    return (
      <div>
        <Display if={this.props.status === 'connected'}>
          <Display if={this.props.member.name }>
                <h2> Welcome {this.props.member.name}</h2>
          </Display>
          <Display if={!this.props.member.name }>
              <h1> Join the session </h1>
              <Join emit={this.props.emit}/>
          </Display>



        
        </Display>
        <div className="col-xs-2">
            <span id="connection-status" className={this.props.status}></span>
        </div>
      </div>
    )
  }
}

export default Users
