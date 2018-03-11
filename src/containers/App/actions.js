import { RECEIVE_CATEGORIES, SET_SORT_METHOD } from './constants';
import * as getAPI from '../../services/getAPIs';

export const fetchInitialCategories = () => (dispatch) => (
  getAPI
    .getAllCategories()
    .then((res) => res.json())
    .then((data) => dispatch(receiveCategories(data.categories)))
);

export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

export const setSortMethod = (payload) => ({
  type: SET_SORT_METHOD,
  payload,
});