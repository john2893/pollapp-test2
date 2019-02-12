import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import Admin from "./Components/Admin";
import Users from "./Components/Users";
import Results from "./Components/Results";
import App from './App';
import * as serviceWorker from './serviceWorker';
import Notfound from './Components/Notfound';

const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/results">Results</Link>
          </li>
        </ul>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/users" component={Users} />
            <Route path="/results" component={Results} />
            <Route path="/admin" component={Admin} />
            <Route component={Notfound} />;   
        </Switch>
        
      </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
