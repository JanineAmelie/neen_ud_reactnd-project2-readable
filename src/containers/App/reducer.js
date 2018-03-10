import produce from 'immer';
import { RECEIVE_CATEGORIES } from './constants';

//  initial state structure the way I like it.
const appInitialState = {
  categories: [],
};

/*  disable rules in eslint to accomodate immer */
/*  eslint-disable no-param-reassign */
/*  eslint-disable consistent-return */
/*  eslint-disable no-unused-vars */
/*  eslint-disable default-case */


const appReducer1 = produce((draft, action) => {
  if (!draft) {
    return appInitialState;
  }

  switch (action.type) {
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

export default appReducer1;
