import { ADD_TO_CART, REMOVE_FROM_CART } from './types';
import { products } from '../data/db.json';

//  [
//    {
//      product: {},
//      amount: num
//    }
//  ]

export const addToCart = (cart, newProduct) => (dispatch) => {
  const newCart = cart.splice();

  let isAlreadyInCart = false;

  newCart.forEach((product) => {
    if (product.id === newProduct.id) {
      isAlreadyInCart = true;
      product.amount++;
    }
  });
  if (!isAlreadyInCart) {
    newCart.push({ product: newProduct, amount: 1 });
  }

  localStorage.setItem('shoppingCart', JSON.stringify(newCart));

  return dispatch({ type: ADD_TO_CART, payload: newCart });
};

export const removeFromCart = () => (dispatch) => {
  return dispatch({ type: REMOVE_FROM_CART, payload: products });
};
