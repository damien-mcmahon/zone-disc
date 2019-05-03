import React from 'react';

import './styles.scss';

const AppPanel = ({name, children}) => (
    <div className="app__panel-wrapper">
        {name && <h2 className="panel__header">{name}</h2>}
        <div className="panel__content-container">
            {children}
        </div>
    </div>
);

export default AppPanel;