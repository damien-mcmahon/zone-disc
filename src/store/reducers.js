import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from 'app/reducer';
import dashboard from 'dashboard/reducer';
import maintenance from 'maintenance/reducer';
import party from 'party/reducer';

export default history => combineReducers({
    app,
    dashboard,
    party,
    maintenance,
    router: connectRouter(history),
});