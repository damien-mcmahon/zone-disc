import React from 'react';
import AppPanel from 'components/app-panel';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik } from 'formik';

import { CREATE_PARTY } from 'config/routes';

import Card from 'components/card';
import SearchForm from './search-form';
import QueueCard from 'components/queue-card';

import './styles.scss';

const searchFormInitialValues = { search: '' };

const Dashboard = ({sendSearch, userQueue = []}) => (
    <AppPanel title="Welcome">
        <header className="dashboard__header">
            <Link to={CREATE_PARTY.path} className="new-party-card__wrapper">
                <Card applyHoverStyle depth={2}>
                    <FontAwesomeIcon className="new-party-card__icon" icon="plus-square" />
                        <h3 className="new-party-card__text">
                            <em className="new-party-card__text-emphasis">Create a new</em>
                            Party Account
                        </h3>
                </Card>
            </Link>

            <Card className="search-card__wrapper" applyHoverStyle={false}>
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

        <section className="dashboard__queue">
            <h2 className="dashboard__section-header">Account Queue</h2>
            {userQueue.map(party => (
                <QueueCard key={party.id} party={party} />
            ))}
        </section>

    </AppPanel>
);

export default Dashboard;