import { connect } from 'react-redux';

import Dashboard from './index';

const mapStateToProps = ({app}) => ({app});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);