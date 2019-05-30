import { createAction } from 'redux-actions';

export const sendSelectedProducts = 
    createAction('PRODUCT.CONFIG.SEND_SELECTIONS', selections => selections);
export const sendSelectedProductsSuccess = 
    createAction('PRODUCT.CONFIG.SEND_SELECTIONS.SUCCESS');
export const sendSelectedProductsError = 
    createAction('PRODUCT.CONFIG.SEND_SELECTIONS.ERROR', err => err);