import { put } from 'redux-saga/effects';
import { setLoggedInEpicActionFailure, setLoggedInEpicActionSuccess } from './actions';

export function * setLoggedInSaga() {
    try {
        yield put(setLoggedInEpicActionSuccess());
    } catch (err) {
        yield put(setLoggedInEpicActionFailure(err));
    }
}