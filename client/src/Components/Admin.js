import React, { Component } from 'react'
import Display from "./Display"
import JoinAdmin from "./JoinAdmin"
import Attendance from "./Attendance";
import Questions from "./Questions";



export class Admin extends Component {
  render() {
    return (
      <div>
        
        <Display if={this.props.status === 'connected'}>
          
          <Display if={this.props.member.name && this.props.member.type === 'administrator'}>
            <h1>Welcome {this.props.member.name}</h1>
            <Questions questions={this.props.questions} emit={this.props.emit} />
            <Attendance audience={this.props.audience} />
            
            
          </Display>

          <Display if={!this.props.member.name}>
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
