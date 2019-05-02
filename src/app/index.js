import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../store';
import AppHeader from '../components/app-header';
import Dashboard from '../dashboard/container';
import CreateParty from '../party/create/container';

const App = ({init}) => {
    useEffect(() => init(), [init]); 

    return (
        <ConnectedRouter history={history}>
            <main>
                <AppHeader />
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/create-party" component={CreateParty} />
                </Switch>
            </main>
        </ConnectedRouter>
    );
}

export default App;