import React from 'react';
import { arrayOf, oneOfType, string, element, number, bool } from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const DEPTH_CLASSNAMES = ["", "small", "regular", "medium", "large" ];

const Card = ({className, children, depth = null, applyHoverStyle = false, ...props}) => {
    const cardClassNames = classnames('card__wrapper', className, {
        [`shadow--${DEPTH_CLASSNAMES[depth]}`]: depth,
        '--hover': applyHoverStyle
    });

    return (<div className={cardClassNames} {...props}> {children} </div>);
};

Card.propTypes = {
    className: string,
    children: oneOfType([element, arrayOf(element)]),
    depth: number,
    applyHoverStyle: bool,
};

export default Card;