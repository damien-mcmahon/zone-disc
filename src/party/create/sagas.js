import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { createPartySuccess, createPartyError } from './actions';
import { POST } from 'store/api';

import { CREATE_PARTY_CONFIRMATION } from 'config/routes';

// TODO - Collect these into an endpoints file?
const CREATE_PARTY = '/parties';

export function * createPartySaga({payload:party}) {
    try {
        const newParty = yield call(POST, CREATE_PARTY, party);
        yield put(createPartySuccess(newParty));
        yield put(push(CREATE_PARTY_CONFIRMATION.path));
    } catch (err) {
        yield put(createPartySuccess(party));
        yield put(push(CREATE_PARTY_CONFIRMATION.path));
    }
}