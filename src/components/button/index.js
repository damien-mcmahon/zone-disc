import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const Button = ({state = 'default', children, className, ...props}) => {
    const buttonClassNames = classnames(`button--${state}`, className);

    return (
        <button className={buttonClassNames} {...props}>{children}</button>
    );
}

export default Button;