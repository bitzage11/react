import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import DTH from './components/Dth';

export default (
    <Route component={App}>
    <Route path='/' component={Home}></Route>   
    <Route path='/dth' component={DTH}></Route>   
  </Route>
);
