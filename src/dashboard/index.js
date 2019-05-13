import React from 'react';
import AppPanel from 'components/app-panel';
import './styles.scss';

import Card from 'components/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik } from 'formik';
import SearchForm from './search-form';

const searchFormInitialValues = {
    search: ''
};


const Dashboard = ({sendSearch}) => (
    <AppPanel name="Welcome">
        <header className="dashboard__header">
            <Card className="new-party-card__wrapper" depth={2}>
               <FontAwesomeIcon className="new-party-card__icon" icon="plus-square" />
                <h3 className="new-party-card__text">
                    <em className="new-party-card__text-emphasis">Create a new</em>
                    Party Account
                </h3>
            </Card>
            <Card className="search-card__wrapper">
                <header className="search-card__header">
                    <FontAwesomeIcon className="search-card__icon" icon="search" />
                    <h3 className="search-card__text">
                        <em className="search-card__text-emphasis">
                            Search for
                        </em>
                        Party Account
                    </h3>
                </header>
                <div className="search-card__form-wrapper">
                    <Formik
                        initialValues={searchFormInitialValues}
                        onSubmit={sendSearch} 
                        render={SearchForm} />
                </div>
            </Card>
        </header>
        <section className="dashboard___queue">
            <h2 className="dashboard__section-header">Account Queue</h2>
        </section>
    </AppPanel>
);

export default Dashboard;