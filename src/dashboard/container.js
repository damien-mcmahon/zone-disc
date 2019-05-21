import { connect } from 'react-redux';

import Dashboard from './index';
import { searchResultsSelector, userQueueSelector } from './selectors';
import { searchParties } from './actions';
import { setCurrentParty } from 'party/actions';

const mapStateToProps = state => ({
    userQueue: userQueueSelector(state),
    searchResults: searchResultsSelector(state),
});

const mapDispatchToProps = dispatch => ({
    sendSearch(search) {
        dispatch(searchParties(search));
    },

    selectParty(party) {
        dispatch(setCurrentParty(party));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);