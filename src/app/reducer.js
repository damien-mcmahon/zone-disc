import { handleActions } from 'redux-actions';
import { setLoggedIn } from './actions';
import { createParty } from 'party/create/actions';

import {QUEUE_MOCKS} from '../config/mocks';

const defaultState = {
    loggedIn: false,
    parties: [...QUEUE_MOCKS],
    tenants: [],
    currentTenant: 'DN',
    tenant: 'DCI'
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