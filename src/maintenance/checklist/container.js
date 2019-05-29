import { connect } from 'react-redux';

import ProductsConfig from '.';
import { currentPartySelector } from 'maintenance/selectors';
import { getChecklistSelector, selectedProductTemplateSelector } from 'maintenance/products/selectors';

import { getChecklistInfo } from './actions';

const mapStateToProps = state => ({
    party: currentPartySelector(state),
    checklist: getChecklistSelector(state),
    selectedProduct: selectedProductTemplateSelector(state)
});

const mapDispatchToProps = dispatch => ({
    getChecklistInfo() {
        dispatch(getChecklistInfo())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsConfig);