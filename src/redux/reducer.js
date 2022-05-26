import { ADD_TO_BAG, FILTER_DATA, STORE_DATA, SAVED_BAG, UPDATE_QUANTITY,DELETE_FROM_BAG, USER_NAME, PROFILE,} from "./action";

const initState = {
  products: [{}],
  filter: [],
  cartProducts: [{}],
  uname:"",
  profile:""
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
    case SAVED_BAG:
      return {
        ...store,
        cartProducts: payload,
      };
      case USER_NAME:
        return {
          ...store,
          uname: payload,
        };
        case PROFILE:
          return {
            ...store,
          profile: payload,
          };
      case UPDATE_QUANTITY:
            let updatedarr = [...store.cartProducts];

            updatedarr.map((ele) => {
                if (ele.id === payload.id) {
                    ele.quan =payload.val;
                }
            });

            return {
                ...store,
                cartProducts: updatedarr,
            };
            case DELETE_FROM_BAG:
            const updated_arr = store.cartProducts.filter((item) => {
                return item.id !== payload;
            });
            return {
                ...store,
                cartProducts: updated_arr,
            };
    default:
      return store;
  }
};
