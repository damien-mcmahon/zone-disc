import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from 'store';
import AppNav from 'components/app-nav';
import AppHeader from 'components/app-header';
import AppFooter from 'components/app-footer';

import Dashboard from 'dashboard/container';
import CreateParty from 'party/create/container';
import Confirmation from 'party/confirmation/container';
import MaintenanceIndex from 'maintenance/container';
import MaintenanceEdit from 'maintenance/edit';
import MaintenanceProducts from 'maintenance/products/container';
import MaintenanceProductsConfig from 'maintenance/products-config/container';
import Checklist from 'maintenance/checklist/container';

import { 
    ACCOUNT_EDIT,
    ACCOUNT_MAINTENANCE,
    ACCOUNT_MAINTENANCE_ID,
    ACCOUNT_PRODUCTS,
    ACCOUNT_TEMPLATE_CONFIG,
    CREATE_PARTY,
    CREATE_PARTY_CONFIRMATION,
    HOME,
    PRODUCT_CHECKLIST, 
} from 'config/routes';

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
                        <Route path={HOME.path} exact component={Dashboard} />
                        <Route path={CREATE_PARTY.path} exact component={CreateParty} />
                        <Route path={CREATE_PARTY_CONFIRMATION.path} exact component={Confirmation} />
                        <Route path={ACCOUNT_MAINTENANCE.path} exact component={MaintenanceIndex} />
                        <Route path={ACCOUNT_MAINTENANCE_ID.path} exact component={MaintenanceIndex} />
                        <Route path={ACCOUNT_EDIT.path} exact component={MaintenanceEdit} />
                        <Route path={ACCOUNT_PRODUCTS.path} exact component={MaintenanceProducts} />
                        <Route path={ACCOUNT_TEMPLATE_CONFIG.path} exact component={MaintenanceProductsConfig} />
                        <Route path={PRODUCT_CHECKLIST.path} exact component={Checklist} />
                    </Switch>

                    <AppFooter />
                </section>

            </main>
        </ConnectedRouter>
    );
}

export default App;