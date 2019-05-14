import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from 'store';
import AppNav from 'components/app-nav';
import AppHeader from 'components/app-header';
import AppFooter from 'components/app-footer';

import Dashboard from 'dashboard/container';
import CreateParty from 'party/create/container';
import PartyIndex from 'party';

import './styles.scss';

const App = ({init, tenant}) => {
    useEffect(() => init(), [init]); 

    return (
        <ConnectedRouter history={history}>
            <main className="app__wrapper">
                <AppHeader tenant={tenant} />

                <AppNav />

                <section className="app__panel-wrapper">
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/party/create" component={CreateParty} />
                        <Route path="/party" exact component={PartyIndex} />
                    </Switch>

                    <AppFooter />
                </section>

            </main>
        </ConnectedRouter>
    );
}

export default App;