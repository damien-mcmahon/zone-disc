import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logo';

const AppHeader = () => (
    <header className="app-header__wrapper">
        <Logo />

        <nav className="app-header__nav">
            <Link to="/">Home</Link>
            <Link to="/create-party">Create Party</Link>
        </nav>
    </header>
);

export default AppHeader;