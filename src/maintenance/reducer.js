import { handleActions } from 'redux-actions';
import { 
    getProductsInfoSuccess,
    removeSelectedProductTemplate,
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

    [removeSelectedProductTemplate]: (state, { payload: {resourceId}}) => ({
        ...state,
        selectedProductTemplates: 
            state.selectedProductTemplates.filter(sPT => sPT.resourceId !== resourceId)
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
