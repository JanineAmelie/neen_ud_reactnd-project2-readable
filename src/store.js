import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root_reducer';

export default function configureStore() {
  // const logger = (store) => (next) => (action) => {
  //   console.group(action.type);
  //   console.info('dispatching', action);
  //   const result = next(action);
  //   console.log('next state', store.getState());
  //   console.groupEnd(action.type);
  //   return result;
  // };

  const middlewares = [
    thunk,
  ];

  // If Redux DevTools Extension is installed use it. Otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}
