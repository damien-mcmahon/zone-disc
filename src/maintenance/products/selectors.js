import { createSelector } from 'reselect';

export const getChecklistSelector = state => state.maintenance.selectedProductChecklist;
export const getProductTemplatesSelector = state => state.maintenance.productTemplates;
export const selectedProductTemplateSelector = state => state.maintenance.selectedProductTemplates;
export const getProductFeaturesSelector = state => state.maintenance.productFeatures;
export const getProductFeaturesAsArraySelector = ({maintenance: {productFeatures}}) => 
   Object.keys(productFeatures).map(key => ({
        id: key,
        ...productFeatures[key]
   }));

export const checkHasConfig = createSelector(
    getProductFeaturesSelector,
    selectedProductTemplateSelector,
    (productFeatures, selected) => 
        selected.some(s => 
            Object.keys(productFeatures).some(key => key === s.resourceId)
        )
);