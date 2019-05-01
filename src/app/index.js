import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../store';
import Dashboard from '../dashboard/container';
import CreateParty from '../party/create/container';

const App = ({loggedIn, login, logOut}) => (
    <ConnectedRouter history={history}>
        <main>
            <header>
                <h1>APP</h1>
                <button onClick={() => loggedIn ? logOut() : login() }>Toggle Login State</button>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/create-party">Create Party</Link>
                </nav>
            </header>

            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/create-party" component={CreateParty} />
            </Switch>
        </main>
    </ConnectedRouter>
);

export default App;