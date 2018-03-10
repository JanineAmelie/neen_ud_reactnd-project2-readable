import { TEST_ACTION, LOAD_APP, RECEIVE_CATEGORIES } from './constants';
import * as getAPI from '../../services/getAPIs';

export const initialTest = (payload) => ({
  type: TEST_ACTION,
  payload,
});

export const loadApp = () => ({
  type: LOAD_APP,
});


export const fetchInitialCategories = () => (dispatch) => (
  getAPI
    .getAllCategories()
    .then((res) => res.json())
    .then((data) => dispatch(receiveCategories(data.categories)))
);

export const receiveCategories = (categories) => {
  return ({
    type: RECEIVE_CATEGORIES,
    categories,
  });
};

