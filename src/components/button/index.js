import React from 'react';

import './styles.scss';

const Button = ({type = 'default', children, ...props}) => (
    <button className={`button--${type}`} {...props}>{children}</button>
);

export default Button;