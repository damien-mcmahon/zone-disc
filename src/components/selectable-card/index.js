import React, { useRef } from 'react'
import { bool, func, oneOfType, element, arrayOf, any, string } from 'prop-types';
import classnames from 'classnames';

import Card from '../card';

import './styles.scss';

const SelectableCard = ({className, children, onSelect, name, selected = false, value}) => {
    const radioRef = useRef(null);
    const classes = classnames('selectable-card__outer-wrapper', className);
    return (
        <div className={classes}>
            <input 
                ref={radioRef}
                type="radio"
                name={name}
                value={value}
                defaultChecked={selected}
                className="selectable-card__toggle" />
            <Card 
                className="selectable-card__wrapper" 
                onClick={() => {
                    if (!selected) {
                        onSelect(value);
                        radioRef.current.checked = true;
                    }
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
    selected: bool,
    value: any.isRequired,
    name: string.isRequired
};

export default SelectableCard;
