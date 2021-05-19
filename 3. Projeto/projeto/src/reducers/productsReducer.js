import { FETCH_PRODUCTS } from '../actions/types';

const INITIAL_STATE = {};

export default function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
}
