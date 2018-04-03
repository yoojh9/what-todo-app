import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, hashHistory, useRouterHistory } from 'react-router'

import { createBrowserHistory, useBasename } from 'history';
import ToDoList from './components/ToDoList';
import Login from './components/Login';
import SignUp from './components/SignUp';
import TopBar from './components/TopBar';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <div>
            <TopBar/>
            <Router history={hashHistory}>
              <Route path='/' component={ToDoList} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
            </Router>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
