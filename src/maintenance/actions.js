import { createAction } from 'redux-actions';

export const clearCurrentParty = createAction('PARTY.CLEAR');
export const clearCurrentPartyError = createAction('PARTY.CLEAR.ERROR', err => err);