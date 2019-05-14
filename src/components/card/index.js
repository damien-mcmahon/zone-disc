import React from 'react';
import { string, element, number, bool } from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const DEPTH_CLASSNAMES = ["", "small", "regular", "medium", "large" ];

const Card = ({className, children, depth = null, applyHoverStyle = true}) => {
    const cardClassNames = classnames('card__wrapper', className, {
        [`shadow--${DEPTH_CLASSNAMES[depth]}`]: depth,
        '--hover': applyHoverStyle
    });

    return (<div className={cardClassNames}> {children} </div>);
};

Card.propTypes = {
    className: string,
    children: element,
    depth: number,
    applyHoverStyle: bool,
};

export default Card;