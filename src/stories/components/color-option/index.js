import React from 'react';

import './styles.scss';

const ColorOption = ({color, name}) => (
    <div className={`color-option__wrapper ${name}`}>
        <label className="color-option__label">{name}</label>
        <span className="color-option__value">{color}</span>
    </div>
);

export default ColorOption;