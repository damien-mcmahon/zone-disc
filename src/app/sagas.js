import { call, put } from 'redux-saga/effects';
import { setCookieError, setLoggedInEpicActionFailure, setLoggedInEpicActionSuccess, setCookieSuccess } from './actions';
import Cookie from 'js-cookie';

export function * setLoggedInSaga() {
    try {
        yield put(setLoggedInEpicActionSuccess());
    } catch (err) {
        yield put(setLoggedInEpicActionFailure(err));
    }
}

export function * setProfileCookie() {
    const COOKIE_NAME = 'dn__user';
    const COOKIE_VALUE = '123456789';

    try {
        yield call(Cookie.set, COOKIE_NAME, COOKIE_VALUE);
        yield put(setCookieSuccess());
    } catch (err) {
        yield put(setCookieError(err));
    }
}