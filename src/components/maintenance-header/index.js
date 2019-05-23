import React from 'react'
import get from 'lodash.get';

import Card from 'components/card';
import Logo from 'components/logo';

import './styles.scss';

const hasField = values => field => !!get(values, field);

const MaintenanceHeader = ({party}) => {
    const has = hasField(party);
    const hasPostalAddress2 = has('contactDetails.postalAddress.postalAddressLine2');
    const hasTeleAddress = has('contactDetails.teleAddress[0].telecommunicationNumber');
    const hasEmailAddress = has('contactDetails.eAddress[0].address');

    return (
        <header className="products-header__wrapper">
            <Card depth={1} className="products-header__party-info party-info__wrapper">
                <Logo className="party-info__tenant-logo" tenant={party.networkId} />

                <p className="party-info__party-name">{party.partyName}</p>

                <div className="party-info__account-wrapper">
                    <p className="party-info__account-number">{party.accountNumber || 'Account Number to be defined'}</p>
                    <p className="party-info__activation-date">{party.effectiveDate || 'Not yet Activated'}</p>
                </div>
            </Card>

            <Card depth={1} className="products-header__party-address party-address__wrapper">
                <p className="party-address__line1">{party.contactDetails.postalAddress.postalAddressLine1}</p>

                {hasPostalAddress2 &&
                    <p className="party-address__line2">{party.contactDetails.postalAddress.postalAddressLine2}</p>
                }

                <p className="party-address__city">{party.contactDetails.postalAddress.city}</p>
                <p className="party-address__state">{party.contactDetails.postalAddress.state}</p>
                <p className="party-address__postalCode">{party.contactDetails.postalAddress.postalCode}</p>
                
                {(hasTeleAddress || hasEmailAddress) &&
                    <div className="party-address__contact-wrapper">
                        {hasTeleAddress && <p className="party-addess__contact-telephone">{party.contactDetails.teleAddress[0].telecommunicationNumber}</p>}
                        {hasEmailAddress && <p className="party-addess__contact-email">{party.contactDetails.eAddress[0].address}</p>}
                    </div>
                }
            </Card>
        </header>
    );
}
export default MaintenanceHeader;