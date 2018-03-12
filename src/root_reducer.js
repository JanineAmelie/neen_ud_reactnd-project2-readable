import { combineReducers } from 'redux';

import app from './containers/App/reducer';
import posts from './containers/ListView/reducer';
import modal from './containers/Modal/reducer';
import detail from './containers/DetailView/reducer';

export default combineReducers({
  app,
  posts,
  modal,
  detail,
});
