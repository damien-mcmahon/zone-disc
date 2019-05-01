//import something from somewhere else 
import { takeEvery} from 'redux-saga/effects';
import { appInit, setLoggedIn } from '../app/actions';
import { setLoggedInSaga, setProfileCookie } from '../app/sagas';

export default function* rootSaga() {
    yield takeEvery(setLoggedIn, setLoggedInSaga);
    yield takeEvery(appInit, setProfileCookie);
} 