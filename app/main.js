import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, match } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import routes from './routes';
import reducer from './reducers/reducer';


const store = createStore(reducer);

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));
