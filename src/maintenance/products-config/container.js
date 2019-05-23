import { connect } from 'react-redux';

import ProductsConfig from '.';
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
    productFeatures: getProductFeaturesAsArraySelector(state)
});

export default connect(mapStateToProps)(ProductsConfig);