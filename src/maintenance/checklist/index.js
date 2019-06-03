import React, { useEffect } from 'react'
import { Redirect } from 'react-router';

import { HOME } from 'config/routes';
import { has } from 'utils';
import AppPanel from 'components/app-panel';
import MaintenanceHeader from 'components/maintenance-header';
import TitledCard from 'components/titled-card';
import TaskCard from 'components/task-card';

import './styles.scss';

const Checklist = ({party, checklist, selectedProducts, getChecklistInfo}) => {
    useEffect(() => getChecklistInfo(), [getChecklistInfo]);

    if (!party) {
        return <Redirect to={HOME.path} />
    }

    return (
        <AppPanel className="checklist__wrapper">
            <MaintenanceHeader party={party} />

            {selectedProducts.map(selected => (
                <section 
                    key={selected.prdctNm} 
                    className="checklist__content-wrapper">
                    <h1 className="checklist__title">
                        {party.partyName} - {selected.prdctNm}
                    </h1> 

                    <section className="checklist__sections-wrapper">
                        {has(checklist) && checklist.map(item => (
                            <TitledCard
                                key={item.header}
                                className="checklist__task-card"
                                title={item.header}
                                collapsible={true}
                                collapsed={true}>

                                {has(item.tasks) && item.tasks.map((task,index) => (
                                    <TaskCard 
                                        key={`${item.header}-${index}`}
                                        className="checklist__task-card"
                                        task={task} />
                                ))}
                            </TitledCard>
                        ))} 
                    </section>
                </section>
            ))}
        </AppPanel>
    );
}

export default Checklist;