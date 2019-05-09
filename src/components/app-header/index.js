import React from 'react';

import Logo from '../logo';

import './styles.scss';

const AppHeader = ({tenant = 'DN'}) => (
    <header className="app__header-wrapper">
        <Logo tenant={tenant} />
    </header>
);

export default AppHeader;