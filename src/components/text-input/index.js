import React from 'react';

import './styles.scss';

const TextInput = ({type = 'text', label = ''}) => (
    <div className="text-input__wrapper">
        <label>{label}</label>
        <input type={type} />
        <div className="text-input__validation-wrapper"></div>
    </div>
);

export default TextInput;