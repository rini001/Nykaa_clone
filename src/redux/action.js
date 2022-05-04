
export const STORE_DATA = "STORE_DATA";
export const FILTER_DATA = "FILTER_DATA";
export const storeData = (value) => ({
    type: STORE_DATA,
    payload:value
});
export const filterData = (payload) => ({
  type: FILTER_DATA,
  payload,
});
export const getData = (dispatch) => {
	return (dispatch)=>{
		fetch("http://localhost:8000/products")
        .then((response) => {
          return response.json();
        })
        .then((res) => {
			dispatch(storeData(res));
        });
}
}
