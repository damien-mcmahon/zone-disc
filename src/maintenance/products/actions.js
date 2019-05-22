import { createAction } from 'redux-actions';

export const getProductsInfo = createAction('PRODUCTS.GET_ALL');
export const getProductsInfoSuccess = createAction('PRODUCTS.GET_ALL.SUCCESS', productTemplates => productTemplates);
export const getProductsInfoError = createAction('PRODUCTS.GET_ALL.ERROR', err => err);

export const setSelectedProductTemplate = createAction('PRODUCTS.SET_SELECTED', product => product);