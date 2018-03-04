import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './global-styles.css';

// @TODO: how to have those fancy imports
import App from './containers/App/index';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

const store = configureStore();
/* eslint-disable */ // function-paren-new-line
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
