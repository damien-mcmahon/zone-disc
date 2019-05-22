import { handleActions } from 'redux-actions';
import { getProductsInfoSuccess } from './products/actions';

const defaultState = {
    productTemplates: []
};

const MaintenanceReducer = handleActions({
    [getProductsInfoSuccess]: (state, {payload: productTemplates}) => ({
        ...state,
        productTemplates   
    })
}, defaultState);

export default MaintenanceReducer;
