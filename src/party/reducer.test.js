import * as PartyActions from './actions';
import PartyReducer from './reducer';

describe('Party Reducer', () => {

    it('returns the default state', () => {
        expect(PartyReducer(undefined, {})).toEqual({
            currentParty: null
        });
    });

    it('sets the current party correctly', () => {
        const NEW_PARTY = {
            partyName: 'Testing'
        };
        const { setCurrentParty } = PartyActions;
        
        expect(PartyReducer(undefined, setCurrentParty(NEW_PARTY))).toEqual({
            currentParty: NEW_PARTY
        });
    });
});