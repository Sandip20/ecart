import * as productTypes from './productType';
const fetchProductDetails = async dispatch => {
    dispatch(productTypes.FETCH_PRODUCT_DETAILS);
    try {
        let result = await fetch("https://localhost:3001/products/1");
        dispatch({ type: productTypes.FETCH_PRODUCT_SUCCESS, payload: result });
    } catch (error) {
        dispatch({ type: productTypes.FETCH_PRODUCT_FAILED, payload: error.message })
    }
}
export default fetchProductDetails;