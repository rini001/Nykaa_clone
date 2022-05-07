export const STORE_DATA = "STORE_DATA";
export const FILTER_DATA = "FILTER_DATA";
export const ADD_TO_BAG = "ADD_TO_BAG";
export const SAVED_BAG = "SAVED_BAG";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const DELETE_FROM_BAG = "DELETE_FROM_BAG";
export const storeData = (value) => ({
  type: STORE_DATA,
  payload: value,
});
export const filterData = (payload) => ({
  type: FILTER_DATA,
  payload,
});
export const addingToBag = (payload) => ({
  type: ADD_TO_BAG,
  payload,
});
export const savedBag = (payload) => ({
  type: SAVED_BAG,
  payload,
});
export const updateQuan = (payload) => ({
  type: UPDATE_QUANTITY,
  payload,
});
export const deleteFromBag = (payload) => ({
  type: DELETE_FROM_BAG,
  payload,
});
export const getData = (dispatch) => {
  return (dispatch) => {
    fetch("http://localhost:8000/products")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        dispatch(storeData(res));
      });
  };
};
export const getCartData = (dispatch) => {
  return (dispatch) => {
    fetch("http://localhost:8000/cartProducts")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        dispatch(savedBag(res));
      });
  };
};
