import * as ProductActions from './products/actions';
import * as ChecklistActions from './checklist/actions';
import MaintenanceReducer from './reducer';

const DEFAULT_STATE = {
    productTemplates: [],
    productFeatures: {},
    selectedProductTemplates: [],
    selectedProductChecklist: []
};

describe('Maintenance Reducer', () => {
    it('returns the default state', () => {
        expect(MaintenanceReducer(undefined, {})).toEqual(DEFAULT_STATE);
    });

    it('sets the features and templates for a product', () => {
        const TEMPLATES = [{id: 'tmplt-1'}]
        const FEATURES = {
            'ftr-1': {
                id: 'feature-1'
            }
        };

        const { getProductsInfoSuccess } = ProductActions

        const newState = MaintenanceReducer(undefined, getProductsInfoSuccess({
            productFeatures: FEATURES,
            productTemplates: TEMPLATES
        }));

        expect(newState.productFeatures).toEqual(FEATURES);
        expect(newState.productTemplates).toEqual(TEMPLATES);
    });

    it('removes the given productTemplate correctly', () => {
        const SELECTED_PRODUCT_TEMPLATES = [
            {resourceId: 1},
            {resourceId: 2},
            {resourceId: 3}
        ];
        const { removeSelectedProductTemplate } = ProductActions;
        const INITIAL_STATE = {
            ...DEFAULT_STATE,
            selectedProductTemplates: SELECTED_PRODUCT_TEMPLATES
        };

        const newState = MaintenanceReducer(
            INITIAL_STATE, 
            removeSelectedProductTemplate(SELECTED_PRODUCT_TEMPLATES[1])
        );

        expect(newState.selectedProductTemplates.length).toBe(2);
        expect(newState.selectedProductTemplates[1].resourceId).toBe(3);
    });

    it('sets the Selected productTemplates correctly', () => {
        const SELECTED_PRODUCT_TEMPLATE = {resourceId: 'SPT-1'};
        const { setSelectedProductTemplate } = ProductActions;
        const newState = MaintenanceReducer(undefined, setSelectedProductTemplate(SELECTED_PRODUCT_TEMPLATE));

        expect(newState.selectedProductTemplates.length).toBe(1);
        expect(newState.selectedProductTemplates[0]).toEqual(SELECTED_PRODUCT_TEMPLATE);
    });

    it('sets the checklist for the product correctly', () => {
        const PRODUCT_CHECKLIST = [{
            header: "Do some more tests",
            tasks: []    
        }];
        const { getChecklistInfoSuccess } = ChecklistActions;
        const newState = MaintenanceReducer(undefined, getChecklistInfoSuccess(PRODUCT_CHECKLIST));

        expect(newState.selectedProductChecklist).toEqual(PRODUCT_CHECKLIST);
    });
});