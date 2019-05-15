import { handleActions } from 'redux-actions';
import { setLoggedIn } from './actions';
import { createParty } from 'party/create/actions';

import {PARTY_DETAILS} from '../party/create/mocks';

const defaultState = {
    loggedIn: false,
    parties: [PARTY_DETAILS],
    tenants: [],
    currentTenant: 'DN',
    tenant: 'DN'
};

const AppReducer = handleActions({
    [setLoggedIn] : (state, {payload: loggedIn}) => {
        return {
            ...state,
            loggedIn
        }
    },

    [createParty] : (state, { payload: party}) => {
        return {
            ...state,
            parties: [...state.parties, party],
        };
    }
}, defaultState);

export default AppReducer;