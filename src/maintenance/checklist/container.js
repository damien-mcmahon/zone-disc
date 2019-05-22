import { connect } from 'react-redux';

import ProductsConfig from '.';
import { currentPartySelector } from 'maintenance/selectors';
import { 
    checkHasConfig,
    getProductTemplatesSelector, 
    selectedProductTemplateSelector 
} from 'maintenance/products/selectors';

const mapStateToProps = state => ({
    party: currentPartySelector(state),
    products: getProductTemplatesSelector(state),
    selectedProduct: selectedProductTemplateSelector(state),
    hasConfig: checkHasConfig(state)
});

export default connect(mapStateToProps)(ProductsConfig);