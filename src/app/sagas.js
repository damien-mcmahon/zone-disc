import { call, put } from 'redux-saga/effects';
import { 
    setCookieError, 
    setCookieSuccess, 
    getInitialDataError, 
    getInitialDataSuccess,
    getQueueDataSuccess,
    getQueueDataError
} from './actions';
import Cookie from 'js-cookie';
import API_PATHS from 'config/api-paths';
import { GET } from 'store/api';

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

export function * getInitialData() {
    try {
        const countries = yield call(GET, API_PATHS.COUNTRIES);
        const currencies = yield call(GET, API_PATHS.CURRENCIES);
        const states = yield call(GET, API_PATHS.STATES);

        const initialData = {
            countries,
            currencies,
            states
        };

        yield put(getInitialDataSuccess(initialData));
    } catch(err) {
        yield put(getInitialDataError(err));
    }
}

export function * getQueue() {
    try {
        const queueData = yield call(GET, API_PATHS.QUEUE);
        yield put(getQueueDataSuccess(queueData));
    } catch (err) {
        yield put(getQueueDataError(err));
    }
}