import { handleActions } from 'redux-actions';
import { 
    getProductsInfoSuccess,
    setSelectedProductTemplate
 } from './products/actions';

const defaultState = {
    productTemplates: [],
    productFeatures: {},
    selectedProductTemplates: []
};

const MaintenanceReducer = handleActions({
    [getProductsInfoSuccess]: (state, {payload: {productTemplates, productFeatures}}) => ({
        ...state,
        productTemplates,
        productFeatures  
    }),

    [setSelectedProductTemplate]: (state, {payload: selectedProductTemplate}) => ({
        ...state,
        selectedProductTemplates: [...state.selectedProductTemplates, selectedProductTemplate]
    })
}, defaultState);

export default MaintenanceReducer;
