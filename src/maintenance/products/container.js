import { connect } from 'react-redux';
import Products from '.';
import { currentPartySelector } from '../selectors';
import { 
    getProductsInfo, 
    removeSelectedProductTemplate,
    setSelectedProductTemplate 
} from './actions';
import { 
    getProductTemplatesSelector, 
    selectedProductTemplateSelector 
} from './selectors';

const mapStateToProps = state => ({
    party: currentPartySelector(state),
    products: getProductTemplatesSelector(state),
    selectedProducts: selectedProductTemplateSelector(state)
});

const mapDispatchToProps = dispatch => ({
    getProductInfo() {
        dispatch(getProductsInfo());
    },

    setProductTemplate(template) {
        dispatch(setSelectedProductTemplate(template));
    },

    removeProductTemplate(template) {
        dispatch(removeSelectedProductTemplate(template));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);