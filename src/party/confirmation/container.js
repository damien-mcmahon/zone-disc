import { connect } from 'react-redux';

import Confirmation from '.';

const mapStateToProps = ({app}) => ({app});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);