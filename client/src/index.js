import React from 'react';
import ReactDOM from 'react-dom';
//initialize redux
import { Provider } from 'react-redux';//creates a global state whiuch can be accessed from any file
import{ createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 document.getElementById('root'));

