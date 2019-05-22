import { createAction } from 'redux-actions';

export const createParty = createAction(
    'PARTY.CREATE', 
    party => party, 
    (_, user) => ({
        log: `Party created by ${user.username}`, 
        ts: Date.now()
    })
);
export const createPartySuccess = createAction('PARTY.CREATE.SUCCESS', party => party);
export const createPartyError = createAction('PARTY.CREATE.ERROR', err => err);