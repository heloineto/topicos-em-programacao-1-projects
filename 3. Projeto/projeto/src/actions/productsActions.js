import { FETCH_PRODUCTS } from './types';
import { products } from '../data/db.json';

export const fetchProducts = () => (dispatch) => {
  return dispatch({ type: FETCH_PRODUCTS, payload: products });
};
