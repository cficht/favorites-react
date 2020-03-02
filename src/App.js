import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header.js';
import Search from './Search.js';
import Favorites from './Favorites.js';
import Login from './Login.js';
import PrivateRoute from './PrivateRoute.js';

export default class App extends Component {
  state = { user: null };

  setUser = user => {
    this.setState({ user: user.body })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <Header></Header>
          <Switch>
            <PrivateRoute exact path="/" component={Search} user={this.state.user}/>
            <PrivateRoute exact path="/favorites" component={Favorites} user={this.state.user}/>
            <Route exact path="/login" render={(props) => <Login {...props} setUser={this.setUser} user={this.state.user}/>}  />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
