import { connect } from 'react-redux';
import Products from '.';
import { currentPartySelector } from '../selectors';
import { getProductsInfo } from './actions';
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
        console.log("DM => SPT", template);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);