import { connect } from 'react-redux';

import Dashboard from './index';
import { searchResultsSelector, userQueueSelector } from './selectors';
import { searchParties } from './actions';

const mapStateToProps = state => ({
    userQueue: userQueueSelector(state),
    searchResults: searchResultsSelector(state),
});

const mapDispatchToProps = dispatch => ({
    sendSearch({search}) {
        dispatch(searchParties(search));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);