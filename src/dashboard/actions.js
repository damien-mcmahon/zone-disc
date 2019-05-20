import { createAction } from 'redux-actions';

export const searchParties = createAction('DASHBOARD.SEARCH', search => search);
export const searchPartiesSuccess = createAction('DASHBOARD.SEARCH.SUCCESS', searchResults => searchResults);
export const searchPartiesError = createAction('DASHBOARD.SEARCH.ERROR', err => err);
