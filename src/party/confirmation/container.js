import { connect } from 'react-redux';

import Confirmation from '.';

import { newestPartySelector } from './selectors';

const mapStateToProps = state => ({
    party: newestPartySelector(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);