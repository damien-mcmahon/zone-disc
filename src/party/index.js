import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { array, any, func } from 'prop-types'; 

import AppPanel from 'components/app-panel';
import Card from 'components/card';
import PartyOverview from 'components/party-overview';
import Search from 'components/search';
import { CREATE_PARTY } from 'config/routes';

import './styles.scss';

const PartyIndex = ({countries, networks, party, searchResults, sendSearch}) => {
    const searchTerm = party && party.partyName;

    return (
        <AppPanel className="party-index__wrapper" title="Account Maintenance">
            <header className="party-index__header">
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
                        <Search 
                            currentSearch={searchTerm}
                            results={searchResults}
                            onSearch={sendSearch}
                        />
                    </div>
                </Card>
            </header>

            {party &&
                <section className="party-index__content">
                    <Card className="party-index__party-info-wrapper" depth={2}>
                        {party && 
                            <Fragment>
                                <h1 className="party-index__party-title">{party.partyName}</h1>

                                <PartyOverview 
                                    countries={countries} 
                                    networks={networks} 
                                    party={party} />

                                <Link 
                                    className="party-index__edit button--default" 
                                    to={`party/${party.id}/edit`}>
                                    Edit Details
                                </Link>
                            </Fragment>
                        }
                    </Card> 

                    <Card className="party-index__product-info-wrapper" depth={2}>
                        {party &&
                            <Fragment>
                                <ul className="party-index__products">
                                    <li className="product-info__item --empty">
                                        Waiting for Product Templates
                                    </li>
                                </ul>

                                <Link 
                                    className="button--default" 
                                    to={`/party/${party.id}/products/`}>
                                    Assign Products
                                </Link>
                            </Fragment> 
                        }
                    </Card>
                </section>
            }
        </AppPanel>
    );
};

PartyIndex.propTypes = {
    countries: array,
    networks: array,
    party: any,
    searchResults: array,
    sendSearch: func
};

export default PartyIndex;