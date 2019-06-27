import * as selectors from './selectors';

describe('Maintenance Selectors', () => {
    const GLOBAL_STATE = {
        app: {
            parties: [{
                partyName: 'DM Acquirer',
                id: '1'
            }, {
                partyName: 'DM Issuer',
                id: '2'
            }]
        },

        party: {
            currentParty: {partyName: 'DM'}
        }
    };

    describe('PartyIdFromParamsSelector', () => {
        const APP_PROPS = {
            match: {
                params: {
                    id: '123'
                }
            }
        };
        const { partyIdFromParamsSelector } = selectors;

        it('retrieves the id from the url params', () => {
            expect(partyIdFromParamsSelector(GLOBAL_STATE, APP_PROPS)).toEqual('123');
        });

        it('returns an empty string when no url params', () => {
            expect(partyIdFromParamsSelector(GLOBAL_STATE)).toEqual('');
        })
    });

    describe('PartyInStateSelector', () => {
        const { partyInStateSelector } = selectors;

        it('retrieves the current party', () => {
            expect(partyInStateSelector(GLOBAL_STATE)).toEqual({partyName: 'DM'});
        });
    });

    describe('currentPartySelector', () => {
        const { currentPartySelector } = selectors;

        it('retrieves the current party when its set', () => {
            expect(currentPartySelector(GLOBAL_STATE)).toEqual({partyName: 'DM'});
        });

        it('retrieves the party from the list when no currentParty set', () => {
            const APP_PROPS = {
                match: {
                    params: {
                        id: '2'
                    }
                }
            };

            GLOBAL_STATE.party.currentParty = null;
            expect(currentPartySelector(GLOBAL_STATE, APP_PROPS)).toEqual({
                id: '2',
                partyName: 'DM Issuer'
            });
        })
    });
});