import produce from 'immer';
import { TEST_ACTION } from './constants';

//  initial state structure the way I like it.
const appInitialState = {
  testItem: '',
  testBool: false,
  testArray: ['item1', 'item2', 'item3'],
  testDeepObject: {
    0: {
      foo: '',
      koo: '',
      yay: [''],
    },
    2: {
      foo: '',
      koo: '',
      yay: [''],
    },
  },
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
    case TEST_ACTION:
      draft.testBool = !draft.testBool;
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
