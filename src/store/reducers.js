import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from 'app/reducer';
import dashboard from 'dashboard/reducer';
import party from 'party/reducer';

export default history => combineReducers({
    app,
    dashboard,
    party,
    router: connectRouter(history),
});