import { call, put } from 'redux-saga/effects';
import { createPartySuccess, createPartyError } from './actions';
import { POST } from 'store/api';

// TODO - Collect these into an endpoints file?
const CREATE_PARTY = '/parties';

export function * createPartySaga(party) {
    try {
        const newParty = yield call(POST, CREATE_PARTY, party);
        yield put(createPartySuccess(newParty));
    } catch (err) {
        yield put(createPartyError(err));
    }
}