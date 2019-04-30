import { handleActions } from 'redux-actions';
import { setLoggedIn } from './actions';

const defaultState = {
    loggedIn: false
};

const AppReducer = handleActions({
    [setLoggedIn] : (state, {payload: loggedIn}) => {
        return {
            ...state,
            loggedIn
        }
    }
}, defaultState);

export default AppReducer;