import { call, put } from 'redux-saga/effects';
import { searchPartiesSuccess, searchPartiesError } from './actions';
import { GET } from 'store/api';
import API_PATHS from 'config/api-paths';

export function * searchPartiesSaga({payload: search}) {
    try {
        const {parties} = yield call(GET, API_PATHS.SEARCH_PARTIES, {'partyName_like': search});

        //do the filtering on the client side for now (whilst using local-mocks)...
        const FILTER_REG_EX = new RegExp(`${search}(.*)`, 'gi');
        const searchResults = parties.filter(({partyName}) => FILTER_REG_EX.test(partyName));

        yield put(searchPartiesSuccess(searchResults));

    } catch (err) {
       yield put(searchPartiesError(err)); 
    }
}