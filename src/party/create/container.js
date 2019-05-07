import { connect } from 'react-redux';

import CreateParty from './index';
import { createParty } from './actions';

const mapStateToProps = ({app}) => ({app});

const mapDispatchToProps = dispatch => ({
    submitPartyForm(values) {
        dispatch(createParty(values));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateParty);
