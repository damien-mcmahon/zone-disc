import React, { useRef, useState } from 'react'
import { bool, func, oneOfType, element, arrayOf, any, string } from 'prop-types';
import classnames from 'classnames';

import Card from '../card';
import Checkbox from '../checkbox';

import './styles.scss';

const SelectableCard = ({className, children, isMulti = false, onSelect, name, selected = false, value}) => {
    const radioRef = useRef(null);
    const [isSelected, setSelected ] = useState(selected);

    const classes = classnames('selectable-card__outer-wrapper', className, {
        '--multi': isMulti,
        '--selected': isMulti && isSelected
    });

    return (
        <div className={classes}>
            {!isMulti &&
                    <input 
                        ref={radioRef}
                        type="radio"
                        name={name}
                        value={value}
                        defaultChecked={selected}
                        className="selectable-card__toggle" />
            }
            <Card 
                className="selectable-card__wrapper" 
                onClick={() => {
                    setSelected(!isSelected);

                    if (!selected) {
                        onSelect(value, name);

                        if (!isMulti) {
                            radioRef.current.checked = true;
                        }
                    }
                }}>
                <div className="selectable-card__selection-wrapper">
                    {isMulti ? (
                        <Checkbox 
                            key={isSelected}
                            className="selectable-card__checkbox-toggle"
                            name={name}
                            size="2x"
                            checked={isSelected}
                            value={value} />
                    ) : (
                        <div className="selectable-card__select-toggle" />
                    )}
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
    isMulti: bool,
    onSelect: func,
    selected: bool,
    value: any.isRequired,
    name: string.isRequired
};

export default SelectableCard;
