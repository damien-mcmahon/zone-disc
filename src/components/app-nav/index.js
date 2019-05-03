import React from 'react';
import { NavLink } from 'react-router-dom';

const AppNav = () => (
    <nav className="app__nav-wrapper">
        <NavLink to="/">Home Time</NavLink>
        <NavLink to="/create-party">Create Party</NavLink>
    </nav>
);

export default AppNav;