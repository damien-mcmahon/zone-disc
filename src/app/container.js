import { connect } from 'react-redux';
import { setLoggedIn } from './actions';
import App from './index';

const mapStateToProps = ({app: {loggedIn}}) => ({loggedIn});

const mapDispatchToProps = dispatch => ({
    login() {
        dispatch(setLoggedIn(true));
    },

    logOut() {
        dispatch(setLoggedIn(false));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);