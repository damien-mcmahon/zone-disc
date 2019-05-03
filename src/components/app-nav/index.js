import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const AppNav = () => (
    <nav className="app__nav-wrapper">
        <NavLink className="nav__link" activeClassName="-active" exact to="/">Home</NavLink>
        <NavLink className="nav__link" activeClassName="-active" to="/create-party">Create Party</NavLink>
    </nav>
);

export default AppNav;