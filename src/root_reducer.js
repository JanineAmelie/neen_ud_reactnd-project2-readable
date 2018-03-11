import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './containers/App/reducer';
import posts from './containers/ListView/reducer';
import modal from './containers/Modal/reducer';
import detail from './containers/DetailView/reducer';

export default combineReducers({
  routing: routerReducer,
  app,
  posts,
  modal,
  detail,
});
