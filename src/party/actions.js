import { createAction } from 'redux-actions';

export const setCurrentParty = createAction('PARTY.SET_CURRENT', party => party);