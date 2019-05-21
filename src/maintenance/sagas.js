import { put } from 'redux-saga/effects';
import {
    clearCurrentParty,
    clearCurrentPartyError
} from './actions';

export function * clearCurrentPartySaga() {
    try {
        yield put(clearCurrentParty())
    } catch (err) {
        yield put(clearCurrentPartyError(err));
    }
}