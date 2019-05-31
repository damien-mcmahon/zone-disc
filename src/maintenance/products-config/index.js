import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AppPanel from 'components/app-panel';
import Button from 'components/button';
import Checkbox from 'components/checkbox';
import MaintenanceHeader from 'components/maintenance-header';
import TitledCard from 'components/titled-card';
import Tooltip from 'components/tooltip';

import { HOME, PRODUCT_CHECKLIST, replaceParam } from 'config/routes';

import './styles.scss';

class ProductsConfig extends Component {
    state = {
        productSelections: {},
        validSelections: []
    };

    static MANDATORY_PRODUCT = 'mandatory';
    static DEFAULT_PRODUCT = 'default';

    componentDidMount() {
        const { props } = this;
        const { selectedProducts, selectedProductsFeatures, hasConfig } = props;
        const { setSelectedProduct } = this;

        if (hasConfig && selectedProducts.length) {
            selectedProducts.forEach(selected => {
                //grab the mandatory items from the productFeatures
                const productFeatureSet = selectedProductsFeatures.find(f => f.id === selected.resourceId);

                if (!productFeatureSet) {
                    return;
                }

                const {permittedPlatformProducts, prdctClssCdeRules } = productFeatureSet;

                permittedPlatformProducts.forEach(permitted => {
                    if (permitted.scope === ProductsConfig.MANDATORY_PRODUCT || permitted.scope === ProductsConfig.DEFAULT_PRODUCT) {
                        setSelectedProduct(selected.resourceId, permitted.prdctCde, prdctClssCdeRules[0]);
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

    setSelectedProduct = (featureId, productCode, rules) => {
        const { state, validateFeatureSelection, setSelectionLimits } = this;
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
            setSelectionLimits(featureId);
        });
    }

    setSelectionLimits = featureId => {
        const { state, props } = this;
        const { productSelections } = state;
        const { selectedProductsFeatures } = props;
        const {prdctClssCdeRules: rules} = 
            selectedProductsFeatures.find(sPF => sPF.id === featureId);
        
        if (rules) {
            const [{minOccurs, maxOccurs}] = rules;

            productSelections[featureId] = {
                minimumSelectable: minOccurs,
                maximumSelectable: maxOccurs, 
                ...productSelections[featureId]
            }

            this.setState(state => ({
                ...state,
                productSelections
            }));
        }
    }

    getCardTitleFromFeature = ({id}, selectedProducts = []) => {
        const { state } = this;
        const { productSelections } = state;
        const {prdctNm, prdctCde} = selectedProducts.find(s => s.resourceId === id);

        //TODO - Remove this <NASTY-BLOCK>
        let minimumSelectable;
        let productCodes;
        let maximumSelectable;

        if (productSelections[id]) {
            minimumSelectable = productSelections[id].minimumSelectable;
            productCodes = productSelections[id].productCodes;
            maximumSelectable = productSelections[id].maximumSelectable;
        }
        // </NASTY-BLOCK>

        return ( 
            <Fragment>
                <span className="product-config__product-title">
                    <span className="product__title">{prdctNm}</span> - <span className="product__code--header">{prdctCde}</span>
                </span>

                {minimumSelectable &&
                    <div className="product-config__selection-rules-wrapper">
                        {productCodes.length} selected, Minimum of { minimumSelectable} and maximum of {maximumSelectable}
                    </div>
                }
            </Fragment>
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
            setSelectedProduct(featureId, productCode);
        } else {
            removeSelectedProduct(featureId, productCode);
        }
    }

    // TODO - So much business logic in a component...
    validateFeatureSelection = featureId => {
        //get the product codes for this featureId
        const { props, state } = this;
        const { selectedProductsFeatures } = props; 
        const { productSelections, validSelections } = state;

        if (!productSelections[featureId]) {
            return;
        }

        //get the rules for this featureSet
        const {prdctClssCdeRules:ruleSet} = selectedProductsFeatures.find(feature => feature.id === featureId);

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
        const { selectedProductsFeatures } = props;
        const { validSelections } = state;

        return validSelections.length === selectedProductsFeatures.length;
    }

    defaultChecked = platformProduct =>
        platformProduct.scope === ProductsConfig.MANDATORY_PRODUCT || platformProduct.scope === ProductsConfig.DEFAULT_PRODUCT        
    
    defaultDisabled = platformProduct =>
        platformProduct.scope === ProductsConfig.MANDATORY_PRODUCT
    
    handleCheckboxSelection = feature => (productCode, checked) => {
        const { setChecked } = this;
        setChecked(feature.id, productCode, checked)
    }

    submitProducts = () => {
        const { props, state } = this;
        const { history, party, sendSelectedProducts } = props;
        const { productSelections } = state;
        
        sendSelectedProducts(productSelections);

        history.push(replaceParam(PRODUCT_CHECKLIST.path, party.id));
    }

    render() {
        const {
            canProceed, 
            defaultChecked, 
            defaultDisabled, 
            getCardTitleFromFeature, 
            handleCheckboxSelection, 
            platformProductLabel,
            props, 
            submitProducts,
        } = this; 
        const {
            hasConfig, 
            party, 
            selectedProducts,
            selectedProductsFeatures, 
        } = props;
    
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
                        <h1 className="product-config__title">Now choose the products for {party.partyName}</h1>
                        <Tooltip
                            className="product-config__tooltip"
                            direction="top" 
                            name="product-config-info"
                            content={`Select the products that ${party.partyName} will use`}>
                            <FontAwesomeIcon 
                                className="product-config__tooltip-icon"
                                icon={TOOLTIP_ICON} />
                        </Tooltip> 
                    </header>

                    <div className="product-config__configurations-wrapper">
                        {selectedProductsFeatures.map(feature => (
                            <TitledCard 
                                depth={1}
                                className="product-config__feature-card"
                                key={feature.id} 
                                title={getCardTitleFromFeature(feature, selectedProducts)} 
                                collapsible={selectedProductsFeatures.length > 1}>
                                {feature.permittedPlatformProducts.map(platformProduct => (
                                    <Checkbox
                                        className="product-config__checkbox"
                                        key={platformProduct.prdctCde}
                                        onChange={handleCheckboxSelection(feature)}
                                        value={platformProduct.prdctCde}
                                        label={platformProductLabel(platformProduct)} 
                                        name={`${platformProduct.prdctNm}`}
                                        checked={defaultChecked(platformProduct)} 
                                        disabled={defaultDisabled(platformProduct)} /> 
                                    ))
                                }
                            </TitledCard>
                        ))}                
                    </div>

                    <div className="product-config__proceed-wrapper">
                        <Button 
                            disabled={!canProceed()} 
                            onClick={submitProducts}>
                            Save Products for {party.partyName}
                        </Button>
                    </div>
                </section>
            </AppPanel>
        );
    }
}

export default ProductsConfig;