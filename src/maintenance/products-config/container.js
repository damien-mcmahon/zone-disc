import { connect } from 'react-redux';

import ProductsConfig from '.';
import { sendSelectedProducts } from './actions';
import { currentPartySelector } from 'maintenance/selectors';
import { 
    checkHasConfig,
    getProductTemplatesSelector, 
    selectedProductTemplateSelector,
    getProductFeaturesAsArraySelector 
} from 'maintenance/products/selectors';

const mapStateToProps = state => ({
    party: currentPartySelector(state),
    products: getProductTemplatesSelector(state),
    selectedProducts: selectedProductTemplateSelector(state),
    hasConfig: checkHasConfig(state),
    selectedProductsFeatures: getProductFeaturesAsArraySelector(state)
});

const mapDispatchToProps = dispatch => ({
    sendSelectedProducts(productSelections) {
        dispatch(sendSelectedProducts(productSelections));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsConfig);