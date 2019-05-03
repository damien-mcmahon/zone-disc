import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../store';
import AppNav from '../components/app-nav';
import AppHeader from '../components/app-header';
import AppFooter from '../components/app-footer';
import Dashboard from '../dashboard/container';
import CreateParty from '../party/create/container';

import './styles.scss';

const App = ({init}) => {
    useEffect(() => init(), [init]); 

    return (
        <ConnectedRouter history={history}>
            <main className="app__wrapper">
                <AppHeader />
                <AppNav />
                <section className="app__panel-wrapper">
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/create-party" component={CreateParty} />
                    </Switch>
                </section>
                <AppFooter />
            </main>
        </ConnectedRouter>
    );
}

export default App;