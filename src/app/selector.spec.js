import * as selectors from './selectors';

describe('App Selectors', () => {
    const APP_DEFAULT_STATE = {
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
    };

    const GLOBAL_STATE = {
        app: {
            ...APP_DEFAULT_STATE
        }
    };

    describe('Parties Selector', () => {
        it('returns back the list of parties', () => {
            const STATE_WITH_PARTIES = {
                app: {
                    ...GLOBAL_STATE.app,
                    parties: [{partyName: 'DM Bank'}]
                }
            };

            const { partiesSelector } = selectors;
            expect(partiesSelector(STATE_WITH_PARTIES))
                .toEqual([{ partyName: 'DM Bank'}]);
        });
    });

    describe('Tenant Selector', () => {
        it('returns back the tenant info', () => {
            const { tenantSelector } = selectors;
            expect(tenantSelector(GLOBAL_STATE)).toEqual('DN');
        });
    });


    describe('Config Selector', () => {
        it('returns the config', () => {
            const { configSelector } = selectors;
            expect(configSelector(GLOBAL_STATE)).toEqual(APP_DEFAULT_STATE.config);
        });
    });

    describe('Current User Selector', () => {
        it('returns the current user', () => {
            const { currentUserSelector } = selectors;

            expect(currentUserSelector(GLOBAL_STATE)).toEqual(APP_DEFAULT_STATE.user);
        });
    });

    describe('Countries Selector', () => {
        const COUNTRIES_INFO = [{
            isoCountryName: 'United States',
            isoCountryCode: 'USA'
        }, {
            isoCountryCode: 'CAN',
            isoCountryName: 'Canada'
        }];

        it('transforms and sorts the countries', () => {
            const { countriesSelector } = selectors;
            GLOBAL_STATE.app.config.countries = COUNTRIES_INFO;

            expect(countriesSelector(GLOBAL_STATE)).toEqual([{
                label: 'Canada',
                value: 'CAN'
            }, {
                label: 'United States',
                value: 'USA'
            }]);
        });
    });

    describe('Currencies Selector', () => {
        const CURRENCIES_INFO = [{
            isoCurrencyName: 'US Dollar',
            isoCurrencyCode: 'USD'
        }, {
            isoCurrencyName: 'Canadian Dollar',
            isoCurrencyCode: 'CAD'
        }];

        it('transforms and sorts the currencies', () => {
            const { currenciesSelector } = selectors;
            GLOBAL_STATE.app.config.currencies = CURRENCIES_INFO;

            expect(currenciesSelector(GLOBAL_STATE)).toEqual([{
                label: 'Canadian Dollar',
                value: 'CAD'
            }, {
                label: 'US Dollar',
                value: 'USD'
            }]);
        });
    });

    describe('States Selector', () => {
        const STATES_INFO = {
            AL: 'Alabama',
            AK: 'Alaska'
        };

        it('transforms the list of states', () => {
            const { statesSelector } = selectors;
            GLOBAL_STATE.app.config.states = STATES_INFO;

            expect(statesSelector(GLOBAL_STATE)).toEqual([{
                label: 'Alabama',
                value: 'AL'
            }, {
                label: 'Alaska',
                value: 'AK'
            }]);
        });
    });

    describe('Networks Selector', () => {
        const NETWORKS_INFO = [{
            id: "f75326c9-bbe2-4b54-bfaf-f4d61c3fa493",
            name: "Discover",
            shortCode: "DN",
        }, {
            id: "f75326c9-bbe2-4b54-bfaf-f4d61c3fa494",
            name: "Diners Club",
            shortCode: "DCI",
        }];

        it('transforms and sorts the networks', () => {
            const { networksSelector } = selectors;
            GLOBAL_STATE.app.config.networks = NETWORKS_INFO;

            expect(networksSelector(GLOBAL_STATE)).toEqual([{
                label: 'Diners Club',
                value: 'DCI'
            }, {
                label: 'Discover',
                value: 'DN'
            }]);
        });
    });
});