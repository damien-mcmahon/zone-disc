import { handleActions } from 'redux-actions';

import { searchParties, searchPartiesSuccess } from './actions';

const defaultState = {
    searchResults: [],
    searching: false
};

const DashboardReducer = handleActions({
    [searchParties]: (state) => ({
        ...state,
        searching: true
    }),

    [searchPartiesSuccess]: (state, {payload: searchResults}) => ({
        ...state,
        searchResults
    })
}, defaultState);

export default DashboardReducer;