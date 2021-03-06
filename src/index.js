import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquare, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { 
    faAngleUp,
    faAngleDown,
    faComments,
    faEnvelope, 
    faGripHorizontal, 
    faPlusSquare,
    faCheckSquare,
    faSearch,
    faQuestionCircle,
    faUserCircle, 
    faWrench,
    faCheckCircle as fasCheckCircle,
    faCheckDouble,
    faHourglassStart,
    faTimes,
    faTimesCircle
} from '@fortawesome/free-solid-svg-icons';

import App from 'app/container';
import store from 'store';

import './global.scss';

library.add(
    faAngleUp,
    faAngleDown,
    faCheckCircle,
    fasCheckCircle,
    faComments,
    faEnvelope, 
    faGripHorizontal, 
    faPlusSquare, 
    faCheckSquare,
    faCheckSquare,
    faQuestionCircle, 
    faSquare,
    faSearch, 
    faUserCircle, 
    faWrench,
    faCheckDouble,
    faHourglassStart,
    faTimes,
    faTimesCircle
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
