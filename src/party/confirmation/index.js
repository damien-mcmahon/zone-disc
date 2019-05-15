import React from 'react'

import AppPanel from 'components/app-panel';
import Banner from 'components/banner';
import Card from 'components/card';

import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Confirmation = ({party}) => {
    console.log("DM => PARTY", party);

    return (
        <AppPanel className="confirmation__wrapper">
            <Banner
                className="confirmation__banner"
                state="success"
                title="Party account successfully submitted for approval"
                subTitle="A notification was sent requesting approval" />

            <Card className="confirmation__info-wrapper">
                <h1 className="confirmation__title">Details submitted for approval</h1>    

                <div className="account-overview__wrapper">
                <h2 className="account-overview__label">Business Name:</h2> 
                <h2 className="account-overview__info">DM Bank</h2>
                </div>
            </Card>

            <section className="confirmation__actions-wrapper">
                <Card className="confirmation__clone-help" depth={3}>
                    <FontAwesomeIcon className="clone-help__icon" icon="question-circle" size="3x" />
                    <h1 className="clone-help__title">Need to <em>clone this account?</em></h1>
                </Card>

                <div className="confirmation__action-cards-wrapper">
                    <Card applyHoverStyle depth={2}>
                        <FontAwesomeIcon className="new-party-card__icon" icon="plus-square" />
                            <h3 className="new-party-card__text">
                                <em className="new-party-card__text-emphasis">Create a new</em>
                                Party Account
                            </h3>
                    </Card>

                    <Card applyHoverStyle depth={2}>
                        <FontAwesomeIcon className="new-party-card__icon" icon="plus-square" />
                            <h3 className="new-party-card__text">
                                Go to
                                <em className="new-party-card__text-emphasis">Account Maintenance</em>
                            </h3>
                    </Card>
                </div>
            </section>
        </AppPanel>
    );
}

export default Confirmation;