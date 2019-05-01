import { connect } from 'react-redux';
import { appInit, setLoggedIn } from './actions';
import App from './index';

const mapStateToProps = ({app: {loggedIn}}) => ({loggedIn});

const mapDispatchToProps = dispatch => ({
    init() {
        dispatch(appInit());
    },

    login() {
        dispatch(setLoggedIn(true));
    },

    logOut() {
        dispatch(setLoggedIn(false));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);