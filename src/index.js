import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import materialUi components

import App from './containers/App/index';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import './global-styles.css';

const store = configureStore();

/* eslint-disable */ // function-paren-new-line
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
