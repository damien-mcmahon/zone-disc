import * as AppActions from './actions';
import * as PartyActions from '../party/create/actions';
import AppReducer from './reducer';

describe('App Reducer', () => {

    it('returns the default state', () => {
        expect(AppReducer(undefined, {})).toEqual({
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
                username: 'Damien McMahon',
                networks: [
                    {shortCode:'DCI', name: 'Diners Club'},
                    {shortCode:'DN', name: 'Discover'},
                ]
            }
        });
    });

    it('updates the Queue info when queue data retreived successfully', () => {
        const { getQueueDataSuccess } = AppActions;
        const QUEUE_DATA = [{id: '1234', partyName: 'Test'}];
        const newState = AppReducer(undefined, getQueueDataSuccess(QUEUE_DATA));

        expect(newState.parties).toEqual(QUEUE_DATA);
    });

    it('sets the config data', () => {
        const { getInitialDataSuccess } = AppActions;
        const CONFIG_DATA = {
            currencies: [{code: 'USD'}],
            countries: [{name: 'United States'}],
            networks: [{name: 'Discover'}],
            states: [{name: 'Chicago'}],
        };

        const newState = AppReducer(undefined, getInitialDataSuccess(CONFIG_DATA));

        expect(newState.config).toEqual({
            currentCountry: 'USA',
            ...CONFIG_DATA
        });
    });

    it('adds a party to the list when created', () => {
        const { createParty } = PartyActions;
        const NEW_PARTY = {
            partyName: 'test'
        };
        const USER = {
            username: 'Damien'
        };
        const newState = AppReducer(undefined, createParty(NEW_PARTY, USER));

        expect(newState.parties.length).toBe(1);
        expect(newState.parties[0].partyName).toEqual(NEW_PARTY.partyName);
    });
});