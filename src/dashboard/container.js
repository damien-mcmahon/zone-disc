import { connect } from 'react-redux';

import Dashboard from './index';
import { userQueueSelector } from './selectors';

const mapStateToProps = state => ({
    userQueue: userQueueSelector(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);