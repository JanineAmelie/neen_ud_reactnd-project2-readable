import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import materialUi components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './containers/App/index';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

import './global-styles.css';

// @TODO: Move
const muiTheme = getMuiTheme({
  palette: {
    textColor: '#800000',
    primary1Color: '#117743',
  },
  appBar: {
    height: 100,
  },
});
const store = configureStore();

/* eslint-disable */ // function-paren-new-line
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
