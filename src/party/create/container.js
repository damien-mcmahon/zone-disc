import { connect } from 'react-redux';

import CreateParty from './index';

const mapStateToProps = ({app}) => ({app});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CreateParty);
