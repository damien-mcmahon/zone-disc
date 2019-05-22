import React from 'react'
import { Redirect } from 'react-router';

import AppPanel from 'components/app-panel';
import MaintenanceHeader from 'components/maintenance-header';
import { HOME, PRODUCT_CHECKLIST, replaceParam } from 'config/routes';

const ProductsConfig = ({party, hasConfig}) => {
    if (!party) {
        return <Redirect to={HOME.path} />
    }

    if (!hasConfig) {
        return <Redirect to={replaceParam(PRODUCT_CHECKLIST.path, party.id)} />
    }

    return (
        <AppPanel>
                <MaintenanceHeader party={party} />
                <h1>Configuration</h1>
        </AppPanel>
    );
}

export default ProductsConfig;