//import something from somewhere else 
import { takeEvery } from 'redux-saga/effects';
import { appInit } from '../app/actions';
import { setProfileCookie } from '../app/sagas';
import { createParty } from '../party/create/actions';
import { createPartySaga } from '../party/create/sagas';

export default function *rootSaga() {
    // App
    yield takeEvery(appInit, setProfileCookie);

    //Party
    yield takeEvery(createParty, createPartySaga);
} 
