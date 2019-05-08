import React from 'react';

import './styles.scss';

const ColorOption = ({color, name}) => (
    <div className={`color-option__wrapper ${name}`}>
        <label className="color-option__label">{color}</label>
    </div>
);

export default ColorOption;