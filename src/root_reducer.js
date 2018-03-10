import { combineReducers } from 'redux';
import app from './containers/App/reducer';
import posts from './containers/ListView/reducer';
//  user reducer
//  posts reducer
//  modal reducer
//  category reducer(?)
//  loading reducer

export default combineReducers({
  app,
  posts,
});
