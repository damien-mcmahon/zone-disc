import { connect } from 'react-redux';

import CreateParty from './index';
import { createParty } from './actions';

import { 
    countriesSelector,
    currenciesSelector,
    currentUserSelector,
    networksSelector,
    statesSelector,
    tenantSelector, 
} from 'app/selectors';

import { currentCountryIndexSelector } from './selectors';

const mapStateToProps = state => ({
    tenant: tenantSelector(state),
    currencies: currenciesSelector(state),
    states: statesSelector(state),
    countries: countriesSelector(state),
    networks: networksSelector(state),
    currentCountryIndex: currentCountryIndexSelector(state),
    user: currentUserSelector(state)
});

const mapDispatchToProps = dispatch => ({
    submitPartyForm(values) {
        dispatch(createParty(values));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateParty);
