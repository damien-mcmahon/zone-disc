import { handleActions } from 'redux-actions';
import { 
    getProductsInfoSuccess,
    setSelectedProductTemplate
 } from './products/actions';

const defaultState = {
    productTemplates: [],
    productFeatures: {},
    selectedProductTemplate: null
};

const MaintenanceReducer = handleActions({
    [getProductsInfoSuccess]: (state, {payload: {productTemplates, productFeatures}}) => ({
        ...state,
        productTemplates,
        productFeatures  
    }),

    [setSelectedProductTemplate]: (state, {payload: selectedProductTemplate}) => ({
        ...state,
        selectedProductTemplate
    })
}, defaultState);

export default MaintenanceReducer;
