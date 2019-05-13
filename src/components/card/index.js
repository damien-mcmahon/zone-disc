import React from 'react';

import './styles.scss';

const DEPTH_CLASSNAMES = ["", "small", "regular", "medium", "large" ];
const Card = ({children, depth = null}) => (
    <div className={`card__wrapper ${depth ? `shadow--${DEPTH_CLASSNAMES[depth]}` : ''}`}>
        {children}
    </div>
);

export default Card;