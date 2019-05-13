import React from 'react';

import './styles.scss';

const Button = ({state = 'default', children, className, ...props}) => (
    <button className={`button--${state} ${className}`} {...props}>{children}</button>
);

export default Button;