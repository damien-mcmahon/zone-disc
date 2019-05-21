import { handleActions } from 'redux-actions';
import { setCurrentParty } from './actions';

const defaultState = {
    currentParty: null
};

const PartyReducer = handleActions({
    [setCurrentParty]: (state, {payload: currentParty}) => ({
        ...state,
        currentParty
    }) 
}, defaultState);

export default PartyReducer;