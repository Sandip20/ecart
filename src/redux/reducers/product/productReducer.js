import { FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILED } from '../../actions/product/productType';
const productReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case FETCH_PRODUCT_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;

    }

}
export default productReducer;
