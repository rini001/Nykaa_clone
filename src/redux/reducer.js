import { ADD_TO_BAG, FILTER_DATA, STORE_DATA, RELOAD_BAG } from "./action";

const initState = {
  products: [{}],
  filter: [],
  cartProducts: [{}],
};

export const reducer = (store = initState, { type, payload }) => {
  switch (type) {
    case STORE_DATA:
      return {
        ...store,
        products: payload,
      };
    case FILTER_DATA:
      return {
        ...store,
        filter: payload,
      };
    case ADD_TO_BAG:
      return {
        ...store,
        cartProducts: [...store.cartProducts, payload],
      };
    case RELOAD_BAG:
      return {
        ...store,
        cartProducts: payload,
      };
    default:
      return store;
  }
};
