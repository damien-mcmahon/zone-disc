import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import get from 'lodash.get';

import AppPanel from 'components/app-panel';
import Button from 'components/button';
import Card from 'components/card';
import Logo from 'components/logo';
import SelectableCard from 'components/selectable-card';
import { has as hasProp } from 'utils';

import './styles.scss';

const hasField = values => field => !!get(values, field);

const PartyProducts = ({party, products, getProductInfo, setProductTemplate}) => {
    useEffect(() => getProductInfo(), [getProductInfo]);

    const [canProgress, setCanProgress] = useState(false);

    if (!party) {
        return <Redirect to="/" />
    }

    const has = hasField(party);
    const hasPostalAddress2 = has('contactDetails.postalAddress.postalAddressLine2');
    const hasTeleAddress = has('contactDetails.teleAddress[0].telecommunicationNumber');
    const hasEmailAddress = has('contactDetails.eAddress[0].address');

    return (
        <AppPanel className="products__wrapper">
            <header className="products__header">
                <Card depth={1} className="products__party-info party-info__wrapper">
                    <Logo className="party-info__tenant-logo" tenant={party.networkId} />

                    <p className="party-info__party-name">{party.partyName}</p>

                    <div className="party-info__account-wrapper">
                        <p className="party-info__account-number">{party.accountNumber || 'Account Number to be defined'}</p>
                        <p className="party-info__activation-date">{party.effectiveDate || 'Not yet Activated'}</p>
                    </div>
                </Card>

                <Card depth={1} className="products__party-address party-address__wrapper">
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

            <section className="products__selection-wrapper">
                <h1 className="products__selection-title">Select Party Type</h1>

                <div className="products__selector-wrapper">
                    {hasProp(products) && products.map(p => (
                        <SelectableCard 
                            onSelect={setProductTemplate}
                            className="products__product product__wrapper"
                            name="product-template" 
                            value={p.prdctCde}>
                            <header className="product__header">
                                <h1 className="product__name">{p.prdctNm}</h1>
                                <p className="product__code">{p.prdctCde}</p>
                            </header>
                            <p className="product__description">{p.prdctDesc}</p>
                        </SelectableCard>
                    ))}

                </div>

                <Button className="products__submit" disabled={!canProgress}>Next</Button>
            </section>
        </AppPanel>
    );
}

export default PartyProducts;