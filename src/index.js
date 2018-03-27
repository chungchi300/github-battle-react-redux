import {Provider} from 'react-redux';

import configureStore from './configureStore';
import Action from './actions';
import App from './views/App';
const store = configureStore();
var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// //vertify the actions,can see plain action is created
// console.log('Action', Action.Battle.setPlayerName('One', 'Jeff'));
//state
//lifecycle evemt
//UI
window.store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
