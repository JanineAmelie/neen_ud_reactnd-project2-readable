import { RECEIVE_CATEGORIES } from './constants';
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

