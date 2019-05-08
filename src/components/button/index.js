import React from 'react';

import './styles.scss';

const Button = ({state = 'default', children, ...props}) => (
    <button className={`button--${state}`} {...props}>{children}</button>
);

export default Button;