import { createAction } from 'redux-actions';

export const setLoggedIn = createAction('APP.LOGIN', loggedIn => loggedIn);
export const setLoggedInEpicActionSuccess = createAction('APP.LOGIN.SUCCESS');
export const setLoggedInEpicActionFailure = createAction('APP.LOGIN.FAILURE', err => err);