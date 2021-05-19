import { ADD_TO_CART, REMOVE_FROM_CART, DECREMENT_FROM_CART } from './types';

//  [
//    {
//      product: {},
//      amount: num
//    }
//  ]

export const addToCart = (cart, newProduct) => (dispatch) => {
  const newCart = cart.slice();

  let isInCart = false;

  newCart.forEach((productRef) => {
    if (productRef.product.id === newProduct.id) {
      isInCart = true;
      productRef.amount++;
    }
  });
  if (!isInCart) {
    newCart.push({ product: newProduct, amount: 1 });
  }

  localStorage.setItem('shoppingCart', JSON.stringify(newCart));

  console.log(newCart);
  return dispatch({ type: ADD_TO_CART, payload: newCart });
};

export const removeFromCart = (cart, removedProduct) => (dispatch) => {
  const newCart = cart
    .slice()
    .filter((productRef) => productRef.product.id !== removedProduct.id);

  localStorage.setItem('shoppingCart', JSON.stringify(newCart));

  return dispatch({ type: REMOVE_FROM_CART, payload: newCart });
};

export const decrementFromCart = (cart, decrementedProduct) => (dispatch) => {
  const newCart = cart.slice();

  let isInCart = false;

  newCart.forEach((productRef) => {
    if (productRef.product.id === decrementedProduct.id) {
      isInCart = true;
      productRef.amount--;
    }
  });
  if (!isInCart) {
    return;
  }

  localStorage.setItem('shoppingCart', JSON.stringify(newCart));

  console.log(newCart);
  return dispatch({ type: DECREMENT_FROM_CART, payload: newCart });
};
