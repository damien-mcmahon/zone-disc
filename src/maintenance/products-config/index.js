import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AppPanel from 'components/app-panel';
import Button from 'components/button';
import Checkbox from 'components/checkbox';
import MaintenanceHeader from 'components/maintenance-header';
import TitledCard from 'components/titled-card';
import Tooltip from 'components/tooltip';

import { HOME, PRODUCT_CHECKLIST, PRODUCT_CHECKLIST, replaceParam } from 'config/routes';

class ProductsConfig extends Component {
    state = {
        productSelections: {},
        validSelections: []
    };

    static MANDATORY_PRODUCT = 'mandatory';
    static DEFAULT_PRODUCT = 'default';

    componentDidMount() {
        const { props } = this;
        const { selectedProducts, productFeatures, hasConfig } = props;
        const { setSelectedProduct } = this;

        if (hasConfig && selectedProducts.length) {
            selectedProducts.forEach(selected => {
                //grab the mandatory items from the productFeatures
                const productFeatureSet = productFeatures.find(f => f.id === selected.resourceId);

                if (!productFeatureSet) {
                    return
                }

                const {permittedPlatformProducts} = productFeatureSet;
                permittedPlatformProducts.forEach(permitted => {
                    if (permitted.scope === ProductsConfig.MANDATORY_PRODUCT || permitted.scope === ProductsConfig.DEFAULT_PRODUCT) {
                        setSelectedProduct(selected.resourceId, permitted.prdctCde);
                    }
                })
            });
        }
    }

    removeSelectedProduct = (featureId, productCode) => {
        const { state, validateFeatureSelection } = this;
        const { productSelections } = state;

        const {productCodes} = productSelections[featureId];

        if (!productCodes) {
            return;
        }

        productSelections[featureId].productCodes = productCodes.filter(p => p !== productCode);;

        this.setState(state => ({
            ...state,
            productSelections
        }), () => {
            validateFeatureSelection(featureId);
        });
    }

    setSelectedProduct = (featureId, productCode) => {
        const { state, validateFeatureSelection } = this;
        const { productSelections } = state;

        if (!productSelections[featureId]) {
            productSelections[featureId] = {
                productCodes: [productCode]
            }
        } else {
            productSelections[featureId].productCodes.push(productCode);
        }

        this.setState(state => ({
            ...state,
            productSelections
        }), () => {
            validateFeatureSelection(featureId);
        });
    }

    getCardTitleFromFeature = ({id}, selectedProducts) => {
        const {prdctNm, prdctCde} = selectedProducts.find(s => s.resourceId === id);

        return ( 
            <span className="product-config__product-title">
                <span className="product__title">{prdctNm}</span> - <span className="product__code">{prdctCde}</span>
            </span>
        );
    }

    platformProductLabel = ({prdctNm, prdctDesc}) => (
        <span className="platform-product__title">
            <span className="platform-product__name">{prdctNm}</span> -
            <span className="platform-product__desc">{prdctDesc}</span>
        </span>
    );

    setChecked = (featureId, productCode, value) => {
        const { removeSelectedProduct, setSelectedProduct } = this;
        if (value) {
            setSelectedProduct(featureId, productCode, );
        } else {
            removeSelectedProduct(featureId, productCode);
        }
    }

    // TODO - So much business logic in a component...
    validateFeatureSelection = featureId => {
        //get the product codes for this featureId
        const { props, state } = this;
        const { productFeatures } = props; 
        const { productSelections, validSelections } = state;

        if (!productSelections[featureId]) {
            return;
        }

        //get the rules for this featureSet
        const {prdctClssCdeRules:ruleSet} = productFeatures.find(feature => feature.id === featureId);

        if (!ruleSet) {
            return;
        }

        //TODO - Loop over the rules
        const [{minOccurs: min, maxOccurs: max}] = ruleSet;
        const {productCodes} = productSelections[featureId];
        let updatedSelections = validSelections;

        if (productCodes.length >= min && productCodes.length <= max) {
            if (validSelections.includes(featureId)) {
                return;
            }
            updatedSelections = [...validSelections, featureId];
        } else {
            if (validSelections.includes(featureId)) {
                updatedSelections = validSelections.filter(vS => vS !== featureId);
            }
        }

        this.setState(state => ({
            ...state,
            validSelections: updatedSelections
        }))
    };

    canProceed = () => {
        const { props, state } = this;
        const { productFeatures } = props;
        const { validSelections } = state;

        return validSelections.length === productFeatures.length;
    }

    defaultChecked = platformProduct =>
        platformProduct.scope === ProductsConfig.MANDATORY_PRODUCT || platformProduct.scope === ProductsConfig.DEFAULT_PRODUCT        
    
    defaultDisabled = platformProduct =>
        platformProduct.scope === ProductsConfig.MANDATORY_PRODUCT

    render() {
        const {canProceed, defaultChecked, defaultDisabled, props, getCardTitleFromFeature, platformProductLabel, setChecked} = this; 
        const {party, hasConfig, productFeatures, selectedProducts} = props;

        if (!party) {
            return <Redirect to={HOME.path} />
        }

        if (!hasConfig) {
            return <Redirect to={replaceParam(PRODUCT_CHECKLIST.path, party.id)} />
        }

        const TOOLTIP_ICON = 'question-circle';

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
                                    onChange={(productCode, checked) => setChecked(feature.id, productCode, checked)}
                                    value={platformProduct.prdctCde}
                                    label={platformProductLabel(platformProduct)} 
                                    name={`${platformProduct.prdctNm}`}
                                    checked={defaultChecked(platformProduct)} 
                                    disabled={defaultDisabled(platformProduct)} /> 
                                ))}
                            </TitledCard>
                        ))}                
                    </div>
                    <div className="product-config__proceed-wrapper">
                        <Button disabled={!canProceed()}>Next Steps</Button>
                    </div>
                </section>
            </AppPanel>
        );
    }
}

export default ProductsConfig;