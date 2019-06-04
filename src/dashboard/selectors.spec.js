import * as selectors from './selectors';

describe('Dashboard Selectors', () => {
    const DASHBOARD_DEFAULT_STATE = {
        searchResults: [],
        searching: false
    };

    const GLOBAL_STATE = {
        dashboard: DASHBOARD_DEFAULT_STATE,
        app: {
            tenant: 'DN',
            parties: [{networkId: 'DN'}, {networkId: 'DCI'}, {networkId: 'DN'}]
        }
    };

    describe('UserQueueSelector', () => {
        const { userQueueSelector } = selectors;

        it('retrieves the DN items', () => {
            const queue = userQueueSelector(GLOBAL_STATE);
            
            expect(queue.length).toBe(2);
        });

        it('retrieves the items for DCI', () => {
            const DCI_APP_STATE = {
                ...GLOBAL_STATE,
                app: {
                    ...GLOBAL_STATE.app,
                    tenant: 'DCI'
                }
            };

            const queue = userQueueSelector(DCI_APP_STATE);

            expect(queue.length).toBe(1);
        });
    });

    describe('SearchResultsSelector', () => {
        const { searchResultsSelector } = selectors;

        it('retrieves the search results', () => {
            const SEARCH_RESULTS = [{partyName: 'AAA'}];
            const SEARCH_RESULTS_STATE = {
                dashboard: {
                    ...DASHBOARD_DEFAULT_STATE,
                    searchResults: SEARCH_RESULTS
                }
            };

            const searchResults = searchResultsSelector(SEARCH_RESULTS_STATE);

            expect(searchResults).toEqual(SEARCH_RESULTS);
        });
    });
});