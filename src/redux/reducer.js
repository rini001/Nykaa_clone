
import {
    FILTER_DATA,
    STORE_DATA,
} from "./action";

const initState = {
    products: [{}],
    filter:[]
};

export const reducer = (store = initState,{ type, payload }) => {
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
        default:
            return store;
    }
};