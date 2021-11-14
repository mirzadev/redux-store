import { useReducer } from 'react';
import {
      UPDATE_PRODUCTS,
      UPDATE_CATEGORIES,
      UPDATE_CURRENT_CATEGORY,
      ADD_TO_CART,
      ADD_MULTIPLE_TO_CART,
      REMOVE_FROM_CART,
      UPDATE_CART_QUANTITY,
      CLEAR_CART,
      TOGGLE_CART
} from "./actions";

export const reducer = (state, action) => {
      switch (action.type) {
            // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
            case UPDATE_PRODUCTS:
                  return {
                        ...state,
                        products: [...action.products]
                  };
            // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
            case UPDATE_CATEGORIES:
                  return {
                        ...state,
                        categories: [...action.categories]
                  };

            default:
                  return state;

            // to compare the newState and initialState to confirm if the initialState has changed.
            case UPDATE_CURRENT_CATEGORY:
                  return {
                        ...state,
                        currentCategory: action.currentCategory
                  };

            // for Add to Cart
            case ADD_TO_CART:
                  return {
                        ...state,
                        cartOpen: true,
                        cart: [...state.cart, action.product]
                  };


            // to add multiple items to cart
            case ADD_MULTIPLE_TO_CART:
                  return {
                        ...state,
                        cart: [...state.cart, ...action.products],
                  };

            // to remove items from cart
            case REMOVE_FROM_CART:
                  let newState = state.cart.filter(product => {
                        return product._id !== action._id;
                  });

                  return {
                        ...state,
                        cartOpen: newState.length > 0,
                        cart: newState
                  };

            // to update the item quantity in the cart
            case UPDATE_CART_QUANTITY:
                  return {
                        ...state,
                        cartOpen: true,
                        cart: state.cart.map(product => {
                              if (action._id === product._id) {
                                    product.purchaseQuantity = action.purchaseQuantity;
                              }
                              return product;
                        })
                  };

            // to clear items from the cart
            case CLEAR_CART:
                  return {
                        ...state,
                        cartOpen: false,
                        cart: []
                  };

            // to toggle items in the cart
            case TOGGLE_CART:
                  return {
                        ...state,
                        cartOpen: !state.cartOpen
                  };
      }
};

export function useProductReducer(initialState) {
      return useReducer(reducer, initialState);
}

