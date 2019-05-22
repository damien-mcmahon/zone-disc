import { call, put } from 'redux-saga/effects';
import {
    clearCurrentParty,
    clearCurrentPartyError
} from './actions';
import { GET } from 'store/api';
import API_PATHS from 'config/api-paths';
import { getProductsInfoSuccess, getProductsInfoError } from './products/actions';

export function * clearCurrentPartySaga() {
    try {
        yield put(clearCurrentParty())
    } catch (err) {
        yield put(clearCurrentPartyError(err));
    }
}

export function * getProductTemplatesSaga() {
    try {
        const {productTemplates} = yield call(GET, API_PATHS.PRODUCT_TEMPLATES);
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
        yield call(getProductsInfoError(err));
    }
}