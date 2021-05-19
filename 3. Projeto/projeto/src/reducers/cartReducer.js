import {
  ADD_TO_CART,
  DECREMENT_FROM_CART,
  REMOVE_FROM_CART,
} from '../actions/types';

const INITIAL_STATE = localStorage.getItem('shoppingCart')
  ? JSON.parse(localStorage.getItem('shoppingCart'))
  : [];

export default function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return action.payload;
    case REMOVE_FROM_CART:
      return action.payload;
    case DECREMENT_FROM_CART:
      return action.payload;
    default:
      return state;
  }
}
