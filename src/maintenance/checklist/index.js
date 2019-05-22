import React from 'react'
import { Redirect } from 'react-router';

import AppPanel from 'components/app-panel';
import MaintenanceHeader from 'components/maintenance-header';
import { HOME, PRODUCT_CHECKLIST, replaceParam } from 'config/routes';

const ProductsConfig = ({party, hasConfig}) => {
    if (!party) {
        return <Redirect to={HOME.path} />
    }

    return (
        <AppPanel>
                <MaintenanceHeader party={party} />
                <h1>CHECKLIST</h1>
        </AppPanel>
    );
}

export default ProductsConfig;