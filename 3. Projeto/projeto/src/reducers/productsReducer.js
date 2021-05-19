import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const INITIAL_STATE = {};

export default function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state };
    case REMOVE_FROM_CART:
      return { ...state };
    default:
      return state;
  }
}
