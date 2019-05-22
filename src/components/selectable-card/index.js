import React, { useRef } from 'react'
import { bool, func, oneOfType, element, arrayOf } from 'prop-types';

import Card from '../card';

import './styles.scss';

const SelectableCard = ({children, onSelect, name, selected = false, value}) => {
    const radioRef = useRef(selected);
    return (
        <div className="selectable-card__outer-wrapper">
            <input 
                ref={radioRef}
                type="radio"
                name={name}
                value={value}
                className="selectable-card__toggle" />
            <Card 
                className="selectable-card__wrapper" 
                onClick={() => {
                    onSelect(value);
                    radioRef.current.checked = true;
                }}>
                <div className="selectable-card__selection-wrapper">
                    <div className="selectable-card__select-toggle" />
                </div>

                <div className="selectable-card__content-wrapper">
                    {children}
                </div>
            </Card>
        </div>
    );
}

SelectableCard.propTypes = {
    children: oneOfType([element, arrayOf(element)]),
    onSelect: func,
    selected: bool
};

export default SelectableCard;
