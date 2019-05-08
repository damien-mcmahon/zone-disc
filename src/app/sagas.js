import { call, put } from 'redux-saga/effects';
import { setCookieError, setCookieSuccess } from './actions';
import Cookie from 'js-cookie';

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