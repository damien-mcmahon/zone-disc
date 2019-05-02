import { connect } from 'react-redux';
import { appInit } from './actions';
import App from './index';

const mapStateToProps = ({app: {loggedIn}}) => ({loggedIn});

const mapDispatchToProps = dispatch => ({
    init() {
        dispatch(appInit());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);