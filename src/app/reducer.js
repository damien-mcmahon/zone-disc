import { handleActions } from 'redux-actions';
import { setLoggedIn } from './actions';
import { createParty } from 'party/create/actions';
import { getQueueDataSuccess, getInitialDataSuccess } from 'app/actions';

const defaultState = {
    loggedIn: false,
    parties: [],
    tenants: [],
    currentTenant: 'DN',
    tenant: 'DN',
    config: {
        currencies: [],
        countries: [],
        states: []
    }
};

const AppReducer = handleActions({
    [setLoggedIn] : (state, {payload: loggedIn}) => ({
        ...state,
        loggedIn
    }),

    [getQueueDataSuccess] : (state, { payload: parties}) => ({
        ...state,
        parties
    }),

    [getInitialDataSuccess] : (state, { payload: { countries, currencies, states}}) => ({
        ...state,
        config: {
            ...state.config,
            countries,
            currencies
        }
    }),

    [createParty] : (state, { payload: party}) => ({
        ...state,
        parties: [...state.parties, party],
    })
    
}, defaultState);

export default AppReducer;