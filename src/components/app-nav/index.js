import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';
import classnames from 'classnames';

import { HOME, CREATE_PARTY, ACCOUNT_MAINTENANCE } from 'config/routes';

import './styles.scss';

const NAV_ITEMS = [ HOME, CREATE_PARTY, ACCOUNT_MAINTENANCE ];

const AppNav = ({location: {pathname}}) => {
    const MAINTENANCE_PAGE_REG_EX = /maintenance/gim;
    const isMaintenanceLink = pathname.match(MAINTENANCE_PAGE_REG_EX); 

    // TODO - Get away from this...
    const navLinkClasses = label => classnames('nav__link', {
        '--active': isMaintenanceLink && label === ACCOUNT_MAINTENANCE.label 
    });

    return (
        <nav className="app__nav__wrapper">
            {NAV_ITEMS.map(item => (
                <div key={item.label} className="nav__item-wrapper">
                    <NavLink 
                        className={navLinkClasses(item.label)} 
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
}
export default withRouter(AppNav);