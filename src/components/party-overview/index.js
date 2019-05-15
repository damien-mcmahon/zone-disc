import React from 'react'
import get from 'lodash.get';
import classnames from 'classnames';

import COUNTRIES from '../../config/countries.json';

import './styles.scss';

// TODO - Handle this better
const getTenantName = tenantId => {
    const TENANTS = {
        "DN": "Discover",
        "DCI": "Diners Club"
    };
    return TENANTS[tenantId];
}

const countryCodeToLabel = cCode => {
    const { name } = COUNTRIES.find(c => c.code === cCode);
    return name || 'United States';
};

const PartyOverview = ({className, party}) => {
    const hasPostalAddress2 = !!get(party, 'contactDetails.postalAddress.postalAddressLine2');
    const hasDXSCode = !!get(party, 'DXSCode');
    const overviewClasses = classnames('party-overview__wrapper', className);

    return (
        <div className={overviewClasses}>
            <div className="party-overview__info-group">
                <div className="party-overview__info-item-wrapper">
                    <p className="party-overview__info-value --network">{getTenantName(party.networkId)}</p>
                </div>
            </div>

            <div className="party-overview__info-group">
                <div className="party-overview__info-item-wrapper">
                    <p className="party-overview__info-value">{party.partyName}</p>
                </div>

                <div className="party-overview__info-item-wrapper">
                    <p className="party-overview__info-value">{party.primaryContactName}</p>
                </div>
            
            </div>

            <div className="party-overview__info-group">
                <div className="party-overview__info-item-wrapper">
                    <p className="party-overview__info-value">{countryCodeToLabel(party.contactDetails.postalAddress.country)}</p>
                </div>

                <div className="party-overview__info-item-wrapper">
                    <p className="party-overview__info-value">{party.contactDetails.postalAddress.postalAddressLine1}</p>
                </div>

                {hasPostalAddress2 &&
                    <div className="party-overview__info-item-wrapper">
                        <p className="party-overview__info-value">{party.contactDetails.postalAddress.postalAddressLine2}</p>
                    </div>
                }

                <div className="party-overview__info-item-wrapper">
                    <p className="party-overview__info-value">{party.contactDetails.postalAddress.state}</p>
                </div>

                <div className="party-overview__info-item-wrapper">
                    <p className="party-overview__info-value">{party.contactDetails.postalAddress.postalCode}</p>
                </div>
            </div>


            <div className="party-overview__info-group">
                <div className="party-overview__info-item-wrapper">
                    {party.currencyCode.map(c => (
                        <p key={c} className="party-overview__info-value --currency-code">{c}</p>
                    ))}
                </div>

                {hasDXSCode &&
                    <div className="party-overview__info-item-wrapper">
                        <p className="party-overview__info-value">{party.DXSCode}</p>
                    </div>
                }
            </div>

        </div>
    );
}

export default PartyOverview;