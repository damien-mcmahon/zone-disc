import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../logo';

import './styles.scss';

const NAV_ACTIONS = [
    {icon: 'envelope'},
    {icon: 'user-circle'}
];

const AppHeader = ({tenant}) => (
    <header className="app__header__wrapper">
        <Logo tenant={tenant} />

        <h1 className="header__title">Servicing Portal</h1>

        <div className="header__actions-wrapper">
            {NAV_ACTIONS.map(action => (
                <div key={action.icon} className="header__nav-action">
                    <FontAwesomeIcon icon={action.icon} />
                </div>
            ))}
        </div>
    </header>
);

export default AppHeader;