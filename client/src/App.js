import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Home from "./Components/Home";
import {Router, Route } from 'react-router';
import { BrowserRouter, Switch  } from 'react-router-dom'
import Admin from "./Components/Admin";
import Users from "./Components/Users";
import Results from "./Components/Results";
import Navbar from "./Components/Navbar";
import Notfound from "./Components/Notfound"

var io = require('socket.io-client');



class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   endpoint: "http://127.0.0.1:4001",
    //   status: 'disconnected'
    // };
    this.state = {
        status:'disconnected',
        title:'',
        member:{}
    }
  }
  // getInitialState(){
  //   return {
  //       status: 'disconnected',
  //       title:'Poll name',

  //   }
  // }
  componentWillMount() {
    this.socket = io('http://127.0.0.1:4001')
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect)
    this.socket.on('welcome', this.welcome)
    this.socket.on('joined', this.joined)
    // const { endpoint } = this.state;
    // const socket = socketIOClient(endpoint);
    // socket.on('connect', this.connect);
    // socket.on("FromAPI", data => this.setState({ response: data }));
   
    // socket.on('disconnect', this.disconnect);
    // socket.on('welcome', this.welcome);
  }

  emit=(eventName, dataFromClient) => {
    this.socket.emit(eventName, dataFromClient);
  }
  connect=()=>{
    this.setState({status: 'connected'})
  }

  disconnect=()=>{
    this.setState({status: 'disconnected'})
  }
  welcome=(serverState)=>{
    this.setState({title:serverState.title})
  }

  joined=(member)=>{
    this.setState({member:member})
  }

  render() {
    // const {response} = this.state;
    return (
      <BrowserRouter>
        <div style={{ textAlign: "center" }}>
          <Navbar />
          <Switch>
            <Route exact path="/" 
              render={(props) => <Home {...props} {...this.state} />} 
            />
            <Route path="/users" 
              render={(props) => <Users  {...props} emit={this.emit} {...this.state} />}
            />
            <Route path="/results" 
              render={(props) => <Results  {...props} {...this.state} />} 
            />
            <Route path="/admin" 
              render={(props) => <Admin  {...props} {...this.state} />}
            />
            <Route component={Notfound} />;   
          </Switch>
        
        {/* <Home title={this.state.title} status={this.state.status}/> */}
        
        </div>
      </BrowserRouter>

    )
  }
}
export default App;