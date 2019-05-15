import { handleActions } from 'redux-actions';
import { setLoggedIn } from './actions';
import { createParty } from 'party/create/actions';

const defaultState = {
    loggedIn: false,
    parties: [],
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