import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { createPartySuccess, createPartyError } from './actions';
import { POST } from 'store/api';

// TODO - Collect these into an endpoints file?
const CREATE_PARTY = '/parties';

export function * createPartySaga(party) {
    try {
        const newParty = yield call(POST, CREATE_PARTY, party);
        yield put(createPartySuccess(newParty));
        yield put(push('/'));
    } catch (err) {
        yield put(createPartyError(err));
    }
}