import { createSelector } from 'reselect';

export const getProductTemplatesSelector = state => state.maintenance.productTemplates;
export const selectedProductTemplateSelector = state => state.maintenance.selectedProductTemplate;
export const getProductFeaturesSelector = state => state.maintenance.productFeatures;

export const checkHasConfig = createSelector(
    getProductFeaturesSelector,
    selectedProductTemplateSelector,
    (productFeatures, selected) => Object.keys(productFeatures).some(key => key === selected.resourceId)
);