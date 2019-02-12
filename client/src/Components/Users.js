import React, { Component } from 'react'
import Display from './Display';
import Join from "./Join";
import Ask from "./Ask";

export class Users extends Component {
  render() {
    return (
      <div>
        <Display if={this.props.status === 'connected'}>

          <Display if={this.props.member.name }>
            <Display if={!this.props.currentQuestion}>
              <h2> Welcome {this.props.member.name}</h2>
              <p>{this.props.audience.length} members connected</p>
              <p> Questions will go in here. </p>
            </Display>
            
            <Display if={this.props.currentQuestion}>
                <h2> {this.props.member.name}, Please select your choice</h2>
                <Ask question={this.props.currentQuestion} />

            </Display>
                {/* <h2>{this.props.title}</h2>
                <p>Poll created by {this.props.administrator}</p> */}
          </Display>

        <Display>

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
