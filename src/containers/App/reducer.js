import produce from 'immer';
import { RECEIVE_CATEGORIES, SET_SORT_METHOD } from './constants';

//  initial state structure the way I like it.
const appInitialState = {
  categories: [],
  currentCategory: 'all',
  sortMethod: 'timestamp', // voteScore
};

/*  disable rules in eslint to accomodate immer */
/*  eslint-disable no-param-reassign */
/*  eslint-disable consistent-return */
/*  eslint-disable no-unused-vars */
/*  eslint-disable default-case */


const app = produce((draft, action) => {
  if (!draft) {
    return appInitialState;
  }

  switch (action.type) {
    case SET_SORT_METHOD:
      draft.sortMethod = action.payload;
      break;
    case RECEIVE_CATEGORIES:
      draft.categories = action.categories;
      break;
    default:
      return draft;
  }
});

//  Function implementation
// Pass in default state structure. WORKS!
// function appReducer2(state = AppState, action) {
//   switch (action.type) {
//     case TEST_ACTION:
//       const temp = Object.assign({}, AppState);
//       temp.testItem = action.payload;
//       return temp;
//     default:
//       return state;
//   }
// }

export default app;
