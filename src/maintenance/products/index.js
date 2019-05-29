import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

import AppPanel from 'components/app-panel';
import Button from 'components/button';
import MaintenanceHeader from 'components/maintenance-header';
import SelectableCard from 'components/selectable-card';
import { has } from 'utils';
import { ACCOUNT_TEMPLATE_CONFIG, replaceParam } from 'config/routes';

import './styles.scss';


const PartyProducts = ({history, party, products, getProductInfo, setProductTemplate}) => {
    useEffect(() => getProductInfo(), [getProductInfo]);

    const [canProgress, setCanProgress] = useState(false);

    //TODO - Handle this better
    if (!party) {
        return <Redirect to="/" />
    }

    return (
        <AppPanel className="products__wrapper">
            <MaintenanceHeader party={party} />

            <section className="products__selection-wrapper">
                <h1 className="products__selection-title">Select Party Type</h1>

                <div className="products__selector-wrapper">
                    {has(products) && products.map(p => (
                        <SelectableCard 
                            key={p.prdctCde}
                            onSelect={() => {
                                setProductTemplate(p)
                                setCanProgress(true);
                            }}
                            isMulti
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

                <Button 
                    onClick={() => history.push(replaceParam(ACCOUNT_TEMPLATE_CONFIG.path, party.id))}
                    className="products__submit" 
                    disabled={!canProgress}>
                    Next</Button>
            </section>
        </AppPanel>
    );
}

export default PartyProducts;