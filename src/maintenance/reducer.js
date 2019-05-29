import { handleActions } from 'redux-actions';
import { 
    getProductsInfoSuccess,
    setSelectedProductTemplate
 } from './products/actions';
import { getChecklistInfoSuccess } from './checklist/actions';

const defaultState = {
    productTemplates: [],
    productFeatures: {},
    selectedProductTemplates: [],
    selectedProductChecklist: {}
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
    }),

    [getChecklistInfoSuccess]: (state, {payload: selectedProductChecklist}) => ({
        ...state,
        selectedProductChecklist
    }),

}, defaultState);

export default MaintenanceReducer;
