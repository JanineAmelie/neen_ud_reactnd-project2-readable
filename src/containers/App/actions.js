import { TEST_ACTION } from './constants';

export function initialTest(payload) {
  return {
    type: TEST_ACTION,
    payload,
  };
}
