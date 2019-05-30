import { call, put } from 'redux-saga/effects';
import {
    clearCurrentParty,
    clearCurrentPartyError
} from './actions';
import { GET, POST } from 'store/api';
import API_PATHS from 'config/api-paths';
import { 
    getProductsInfoSuccess, 
    getProductsInfoError 
} from './products/actions';

import { 
    sendSelectedProductsSuccess, 
    sendSelectedProductsError 
} from './products-config/actions';
import { 
    getChecklistInfoError, 
    getChecklistInfoSuccess 
} from './checklist/actions';

export function * clearCurrentPartySaga() {
    try {
        yield put(clearCurrentParty())
    } catch (err) {
        yield put(clearCurrentPartyError(err));
    }
}

export function * getProductTemplatesSaga() {
    try {
        const {productTemplates} = yield call(GET, API_PATHS.PRODUCT.TEMPLATES);
        //map the product features
        const productFeatures = productTemplates.reduce((features, template) => {
            if (!template.prdctFeatures) {
                return features;
            }

            features[template.resourceId] = template.prdctFeatures;
            return features;
        }, {});

        yield put(getProductsInfoSuccess({productTemplates, productFeatures})) 
    } catch (err) {
        yield put(getProductsInfoError(err));
    }
}

export function * sendSelectedProductsSaga({payload: selections}) {
    try {
        //TODO - Match the correct format...
        const selectionsToSend = Object.keys(selections).reduce((selected, key) => {
            selected = [...selected, {resourceId:key, productCodes: selections[key].productCodes}]
            return selected;
        }, []);

        yield call(POST, API_PATHS.PRODUCT.SELECTIONS, {productTemplates: selectionsToSend});
        yield put(sendSelectedProductsSuccess());
    } catch (err) {
        yield put(sendSelectedProductsError(err));
    }
}

export function * getChecklistItemsSaga({payload: party}) {
    try {
        const {checklist} = yield call(GET, API_PATHS.PRODUCT.CHECKLIST, {party});
        yield put(getChecklistInfoSuccess(checklist));
    } catch (err) {
        yield put(getChecklistInfoError(err));
    }
}