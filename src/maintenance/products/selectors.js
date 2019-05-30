import { createSelector } from 'reselect';

export const getChecklistSelector = state => state.maintenance.selectedProductChecklist;
export const getProductTemplatesSelector = state => state.maintenance.productTemplates;
export const selectedProductTemplateSelector = state => state.maintenance.selectedProductTemplates;
export const getProductFeaturesSelector = state => state.maintenance.productFeatures;
export const getProductFeaturesAsArraySelector = createSelector(
    selectedProductTemplateSelector,
    getProductFeaturesSelector,
    (selectedProducts, productFeatures) => 
        Object.keys(productFeatures).reduce((features, key, i) => {
            const selectedFeature = 
                selectedProducts.find(sP => sP.resourceId === key);

            if (selectedFeature) {
                features = [...features, {
                    id: key,
                    ...productFeatures[key]
                }];
            }
            return features; 
        }, [])
);

export const checkHasConfig = createSelector(
    getProductFeaturesSelector,
    selectedProductTemplateSelector,
    (productFeatures, selected) => 
        selected.some(s => 
            Object.keys(productFeatures).some(key => key === s.resourceId)
        )
);