//import something from somewhere else 
import { takeEvery } from 'redux-saga/effects';
import { appInit } from 'app/actions';
import { setProfileCookie, getInitialData, getQueue } from 'app/sagas';
import { createParty } from 'party/create/actions';
import { createPartySaga } from 'party/create/sagas';
import { searchParties } from 'dashboard/actions';
import { searchPartiesSaga } from 'dashboard/sagas';
import { getProductsInfo } from 'maintenance/products/actions';
import { 
    getProductTemplatesSaga, 
    sendSelectedProductsSaga,
    getChecklistItemsSaga
} from 'maintenance/sagas';
import { sendSelectedProducts} from 'maintenance/products-config/actions';
import { getChecklistInfo } from 'maintenance/checklist/actions';

export default function *rootSaga() {
    // App
    yield takeEvery(appInit, setProfileCookie);
    yield takeEvery(appInit, getInitialData);
    yield takeEvery(appInit, getQueue);

    //Party
    yield takeEvery(createParty, createPartySaga);

    //Dashboard
    yield takeEvery(searchParties, searchPartiesSaga);

    //Maintenance
    yield takeEvery(getProductsInfo, getProductTemplatesSaga);
    yield takeEvery(sendSelectedProducts, sendSelectedProductsSaga);
    yield takeEvery(getChecklistInfo, getChecklistItemsSaga);
} 
