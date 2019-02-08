import React, { Component } from 'react'

export class Display extends Component {
  render() {
    return (this.props.if) ? <div>{this.props.children}</div>: null;
      
    
  }
}

export default Display
