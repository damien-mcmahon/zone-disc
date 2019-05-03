//import something from somewhere else 
import { takeEvery } from 'redux-saga/effects';
import { appInit } from '../app/actions';
import { setProfileCookie } from '../app/sagas';

export default function *rootSaga() {
    yield takeEvery(appInit, setProfileCookie);
} 