import React from 'react';

import './styles.scss';

const Button = ({type = 'default', children}) => (
    <button className={`button___${type}`}>{children}</button>
);

export default Button;