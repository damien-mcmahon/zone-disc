import { handleActions } from 'redux-actions';
import { setLoggedIn } from './actions';
import { createParty } from 'party/create/actions';
import { getQueueDataSuccess, getInitialDataSuccess } from 'app/actions';

const defaultState = {
    config: {
        currencies: [],
        countries: [],
        states: [],
        currentCountry: 'USA',
        networks: []
    },
    loggedIn: false,
    parties: [],
    tenant: 'DN',
    tenants: [],
    user: {
        networks: [
            {shortCode:'DN', name: 'Discover'},
        ]
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

    [getInitialDataSuccess] : (state, { payload }) => ({
        ...state,
        config: {
            ...state.config,
            ...payload
        }
    }),

    [createParty] : (state, { payload: party}) => ({
        ...state,
        parties: [...state.parties, party],
    })
    
}, defaultState);

export default AppReducer;