import React, { useEffect } from 'react'
import { Redirect } from 'react-router';

import AppPanel from 'components/app-panel';
import MaintenanceHeader from 'components/maintenance-header';
import { HOME } from 'config/routes';
import TitledCard from 'components/titled-card';
import { has } from 'utils';

const Checklist = ({party, checklist, selectedProducts, getChecklistInfo}) => {
    useEffect(() => getChecklistInfo(), [getChecklistInfo]);

    if (!party) {
        return <Redirect to={HOME.path} />
    }

    return (
        <AppPanel>
            <MaintenanceHeader party={party} />
            {selectedProducts.map(selected => (
                <section key={selected.prdctNm} className="checklist__content-wrapper">
                    <h1 className="checklist__title">{party.partyName} - {selected.prdctNm}</h1> 

                    <section className="checklist__sections-wrapper">
                        {has(checklist) && checklist.map(item => (
                            <TitledCard
                                title={item.header}
                                collapsible={true}
                                collapsed={true}>
                                <h1>SSSS</h1>
                                </TitledCard>
                        ))} 
                    </section>
                </section>
            ))}
        </AppPanel>
    );
}

export default Checklist;