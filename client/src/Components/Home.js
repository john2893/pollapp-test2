import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Router, Route } from 'react-router';
export class Home extends Component {
   
  
    getDefaultProps(){
        return {
            status: 'disconnected'
        }
    }
    render() {
    return (
      <div>
        <header className="row">
            <div className="col-xs-10">
                <h1> Home Page {this.props.title}</h1>
                <p> This is our home page with the 
                    public poll feeds and the login on the right
                </p>
            </div>
            <div className="col-xs-2">
                <span id="connection-status" className={this.props.status}></span>
            </div>
        </header>
      </div>
    )
  }
}

Home.propTypes= {
    title: PropTypes.string.isRequired
}

export default Home
