import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './components/App';
import Home from './components/Home';

export default (
    <Route component={App}>
    <Route path='/' component={Home}></Route>   
  </Route>
);
