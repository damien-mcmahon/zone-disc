import React, { useState } from 'react'
import { bool, func, oneOfType, element, arrayOf } from 'prop-types';
import classnames from 'classnames';

import Button from '../button';
import Card from '../card';

import './styles.scss';

const SelectableCard = ({children, onSelect, selected = false}) => {
    const [isSelected, setSelected] = useState(selected);
    const cardClassnames = classnames('selectable-card__wrapper', {
        '--selected': isSelected,
    });
    return (
        <Card className={cardClassnames} onClick={() => {
            setSelected(!isSelected)
            onSelect(!isSelected)
        }}>
            <div className="selectable-card__selection-wrapper">
                <Button 
                    className="selectable-card__select-toggle" 
                    role="radio" 
                    ariaChecked={isSelected} />
            </div>

            <div className="selectable-card__content-wrapper">
                {children}
            </div>
        </Card>
    );
}

SelectableCard.propTypes = {
    children: oneOfType([element, arrayOf(element)]),
    onSelect: func,
    selected: bool
};

export default SelectableCard;
