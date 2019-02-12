import React, { Component } from 'react'
import Display from "./Display"
import JoinAdmin from "./JoinAdmin"


export class Admin extends Component {
  render() {
    return (
      <div>
        
        <Display if={this.props.status === 'connected'}>
          
          <Display if={this.props.administrator.name && this.props.administrator.type === 'administrator'}>
            <p> Questions</p>
            <p>Attendance</p>
          </Display>

          <Display if={!this.props.administrator.name}>
            <h2>Start Poll </h2>
            <JoinAdmin emit={this.props.emit}/>
          </Display>
        </Display>
        
      
       

        {/* decice on if we need this */}
        <div className="col-xs-2"> 
            <span id="connection-status" className={this.props.status}></span>
        </div>
      </div>
    )
  }
}

export default Admin
