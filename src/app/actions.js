import { createAction } from 'redux-actions';

export const setLoggedIn = createAction('APP.LOGIN', loggedIn => loggedIn);
export const setLoggedInEpicActionSuccess = createAction('APP.LOGIN.SUCCESS');
export const setLoggedInEpicActionFailure = createAction('APP.LOGIN.FAILURE', err => err);

export const appInit = createAction('APP.INIT');
export const setCookieSuccess = createAction('APP.SET_COOKIE.SUCCESS');
export const setCookieError = createAction('APP.SET_COOKIE.ERROR', err => err);