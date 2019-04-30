import { createAction } from 'redux-actions';

export const setLoggedIn = createAction('APP.LOGIN', loggedIn => loggedIn);
