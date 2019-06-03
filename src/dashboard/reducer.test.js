import * as actions from './actions';
import DashboardReducer from './reducer';

describe('Dashboard Reducer', () => {
    it('returns the default state', () => {
        expect(DashboardReducer(undefined, {})).toEqual({
            searchResults: [],
            searching: false
        });
    });

    it('sets searching `true` when searching parties', () => {
        const { searchParties } = actions;
        expect(DashboardReducer(undefined, searchParties('12345'))).toEqual({
            searchResults: [],
            searching: true
        });
    });

    it('updates search results when successfully retrieving results', () => {
        const { searchPartiesSuccess } = actions;
        const SEARCH_RESULTS = [{id: '12345'}];
        const newState = DashboardReducer(undefined, searchPartiesSuccess(SEARCH_RESULTS));

        expect(newState.searchResults).toEqual(SEARCH_RESULTS);
    });

    it('resets searching to false when successfully retrieving results', () => {
        const { searchParties, searchPartiesSuccess } = actions;
        const SEARCH_RESULTS = [{id: '12345'}];

        const prevState = DashboardReducer(undefined, searchParties('test'));
        const newState = DashboardReducer(prevState, searchPartiesSuccess(SEARCH_RESULTS));

        expect(newState.searching).toBe(false);
    })
});