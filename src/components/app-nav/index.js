import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

// TODO - Put this into config?
const NAV_ITEMS = [
    {path: '/', label: "Home", icon: 'grip-horizontal'},
    {path: '/party/create', label: 'Create Account', icon: 'plus-square'},
    {path: '/party', label: 'Servicing Party', icon: 'wrench'}
];

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