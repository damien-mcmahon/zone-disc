import { connect } from 'react-redux';

import CreateParty from './index';
import { createParty } from './actions';

import { tenantSelector } from 'app/selectors';
import { countriesSelector, currenciesSelector, statesSelector, currentCountryIndexSelector } from './selectors';

const mapStateToProps = state => ({
    tenant: tenantSelector(state),
    currencies: currenciesSelector(state),
    states: statesSelector(state),
    countries: countriesSelector(state),
    currentCountryIndex: currentCountryIndexSelector(state)
});

const mapDispatchToProps = dispatch => ({
    submitPartyForm(values) {
        dispatch(createParty(values));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateParty);
