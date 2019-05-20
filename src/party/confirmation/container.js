import { connect } from 'react-redux';

import Confirmation from '.';

import { newestPartySelector, queueItemsSelector } from './selectors';
import { networksSelector, countriesSelector } from 'app/selectors';

const mapStateToProps = state => ({
    party: newestPartySelector(state),
    queueItemsLength: queueItemsSelector(state),
    networks: networksSelector(state),
    countries: countriesSelector(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);