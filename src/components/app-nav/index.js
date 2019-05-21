import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HOME, CREATE_PARTY, ACCOUNT_MAINTENANCE } from '../../config/routes';

import './styles.scss';

const NAV_ITEMS = [ HOME, CREATE_PARTY, ACCOUNT_MAINTENANCE ];

const AppNav = () => (
    <nav className="app__nav__wrapper">
        {NAV_ITEMS.map(item => (
            <div key={item.label} className="nav__item-wrapper">
                <NavLink 
                    className="nav__link" 
                    activeClassName="--active" 
                    exact
                    to={item.path}>
                    <FontAwesomeIcon 
                        className="nav__icon"
                        icon={item.icon} />
                    {item.label}
                </NavLink>
            </div>
        ))}
    </nav>
);

export default AppNav;