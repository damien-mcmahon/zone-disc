//import something from somewhere else 
import { takeEvery} from 'redux-saga/effects';
import { setLoggedIn } from '../app/actions';
import { setLoggedInSaga } from '../app/sagas';

export default function* rootSaga() {
    yield takeEvery(setLoggedIn, setLoggedInSaga);
} 