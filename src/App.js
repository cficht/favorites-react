import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Search.js';
import Favorites from './Favorites.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/" component={Favorites} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
