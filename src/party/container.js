import { connect } from 'react-redux';
import { currentPartySelector } from './selectors';

import { 
    countriesSelector,
    networksSelector,
} from 'app/selectors';
import { searchParties } from 'dashboard/actions';
import PartyIndex from '.';
import { searchResultsSelector } from 'dashboard/selectors';

const mapStateToProps = (state, props) => ({ 
    countries: countriesSelector(state),
    networks: networksSelector(state),
    party: currentPartySelector(state, props),
    searchResults: searchResultsSelector(state) 
});

const mapDispatchToProps = dispatch => ({
    sendSearch(search) {
        dispatch(searchParties(search));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PartyIndex);