import React from 'react'
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AppPanel from 'components/app-panel';
import Checkbox from 'components/checkbox';
import MaintenanceHeader from 'components/maintenance-header';
import TitledCard from 'components/titled-card';
import Tooltip from 'components/tooltip';

import { HOME, PRODUCT_CHECKLIST, replaceParam } from 'config/routes';

const getCardTitleFromFeature = ({id}, selectedProducts) => {
    const {prdctNm, prdctCde} = selectedProducts.find(s => s.resourceId === id);

    return ( 
        <span className="product-config__product-title">
            <span className="product__title">{prdctNm}</span> - <span className="product__code">{prdctCde}</span>
        </span>
    );
}

const platformProductLabel = ({prdctNm, prdctDesc}) => (
    <span className="platform-product__title">
        <span className="platform-product__name">{prdctNm}</span> -
        <span className="platform-product__desc">{prdctDesc}</span>
    </span>
);

const ProductsConfig = ({party, hasConfig, productFeatures, selectedProducts}) => {
    if (!party) {
        return <Redirect to={HOME.path} />
    }

    if (!hasConfig) {
        return <Redirect to={replaceParam(PRODUCT_CHECKLIST.path, party.id)} />
    }

    const TOOLTIP_ICON = 'question-circle';
    const MANDATORY_PRODUCT = 'mandatory';

    return (
        <AppPanel className="product-config__wrapper">
            <MaintenanceHeader party={party} />

            <section className="product-config__content">
                <header className="product-config__header">
                    <h1>Now choose the products for {party.partyName}</h1>
                    <Tooltip
                        direction="top" 
                        name="product-config-info"
                        content={`Select the products that ${party.partyName} will use`}>
                        <FontAwesomeIcon icon={TOOLTIP_ICON} />
                    </Tooltip> 
                </header>

                <div className="product-config__configurations-wrapper">
                    {productFeatures.map(feature => (
                        <TitledCard 
                            key={feature} 
                            title={getCardTitleFromFeature(feature, selectedProducts)} 
                            collapsible={productFeatures.length > 1}>
                            
                            {feature.permittedPlatformProducts.map(platformProduct => (
                               <Checkbox
                                    key={platformProduct.prdctCde}
                                    onChange={value => console.log("DM => VAL", value)}
                                    value={platformProduct.prdctCde}
                                    label={platformProductLabel(platformProduct)} 
                                    checked={platformProduct.scope === MANDATORY_PRODUCT} 
                                    disabled={platformProduct.scope === MANDATORY_PRODUCT} /> 
                            ))}
                        </TitledCard>
                    ))}                
                </div>

            </section>
        </AppPanel>
    );
}

export default ProductsConfig;