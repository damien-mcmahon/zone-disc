import React, { useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../store';
import Dashboard from '../dashboard/container';
import CreateParty from '../party/create/container';

const App = ({init}) => {
    useEffect(() => {
        // set the cookie
        init();
    }, [init]); 

    return (
        <ConnectedRouter history={history}>
            <main>
                <header>
                    <h1>App</h1>
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
}

export default App;