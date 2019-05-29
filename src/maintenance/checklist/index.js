import React, { useEffect } from 'react'
import { Redirect } from 'react-router';

import AppPanel from 'components/app-panel';
import MaintenanceHeader from 'components/maintenance-header';
import { HOME } from 'config/routes';

const Checklist = ({party, checklist, selectedProduct, getChecklistInfo}) => {
    useEffect(() => getChecklistInfo(), [getChecklistInfo]);

    if (!party) {
        return <Redirect to={HOME.path} />
    }

    return (
        <AppPanel>
            <MaintenanceHeader party={party} />
            <section className="checklist__content-wrapper">
                <h1 className="checklist__title">{party.partyName} - CHECKLIST</h1> 
            </section>
        </AppPanel>
    );
}

export default Checklist;