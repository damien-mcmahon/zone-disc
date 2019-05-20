import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ACCOUNT_MAINTENANCE, HOME, CREATE_PARTY, SERVICE_PARTY_ID } from 'config/routes';

import AppPanel from 'components/app-panel';
import Banner from 'components/banner';
import Card from 'components/card';
import PartyOverview from 'components/party-overview/container';

import './styles.scss';

const Confirmation = ({party, queueItemsLength}) => {
    if (!party) {
        return <Redirect to="/" />
    }

    return (
        <AppPanel className="confirmation__wrapper">
            <Banner
                className="confirmation__banner"
                state="success"
                title="Party account successfully submitted for approval"
                subTitle="A notification was sent requesting approval" />

            <Card className="confirmation__info-wrapper">
                <h1 className="confirmation__title">Details submitted for approval</h1>    

                <PartyOverview className="confirmation__party-overview" party={party} />

                <Link 
                    to={SERVICE_PARTY_ID.path.replace(':id', party.id)} 
                    className="button--default confirmation__">
                    Edit Details
                </Link>
            </Card>

            <section className="confirmation__actions-wrapper">
                <Card className="confirmation__clone-help" depth={3}>
                    <FontAwesomeIcon className="clone-help__icon" icon="question-circle" size="5x" />
                    <h1 className="clone-help__title">Need to <em className="clone-help__emphasis semi-bold">clone this account?</em></h1>
                </Card>

                <Card className="confirmation__queue-card" depth={1}>
                    <h1 className="queue-card__title">You have <em className="queue-card__emphasis">{queueItemsLength} items </em> in your queue</h1>
                    <Link to={HOME.path} className="queue-card__link">Go to Queue</Link>
                </Card>

                <div className="confirmation__action-cards-wrapper">
                    <Link className="confirmation__link-to-create" to={CREATE_PARTY.path}>
                        <Card applyHoverStyle depth={2}>
                            <FontAwesomeIcon className="new-party-card__icon" icon="plus-square" />
                                <h3 className="new-party-card__text">
                                    <em className="new-party-card__text-emphasis">Create a new</em>
                                    Party Account
                                </h3>
                        </Card>
                    </Link>

                    <Card applyHoverStyle depth={2}>
                        <Link className="confirmation__link-to-create" to={ACCOUNT_MAINTENANCE.path}>
                            <FontAwesomeIcon className="new-party-card__icon" icon="wrench" />
                                <h3 className="new-party-card__text">
                                    Go to
                                    <em className="new-party-card__text-emphasis">Account Maintenance</em>
                                </h3>
                        </Link>
                    </Card>
                </div>
            </section>
        </AppPanel>
    );
}

export default Confirmation;