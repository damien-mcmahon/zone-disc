import { connect } from 'react-redux';
import Products from '.';
import { currentPartySelector } from '../selectors';
import { getProductsInfo, setSelectedProductTemplate } from './actions';
import { getProductTemplatesSelector } from './selectors';

const mapStateToProps = state => ({
    party: currentPartySelector(state),
    products: getProductTemplatesSelector(state)
});

const mapDispatchToProps = dispatch => ({
    getProductInfo() {
        dispatch(getProductsInfo());
    },

    setProductTemplate(template) {
        dispatch(setSelectedProductTemplate(template));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);