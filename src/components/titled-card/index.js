import React, { useState } from 'react'
import classnames from 'classnames';
import { any, arrayOf, element, string, oneOfType, number, bool } from 'prop-types';

import Card from '../card';

import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TitledCard = ({className, children, depth, title, collapsible = false, collapsed = false, selected = false}) => {
    const [isCollapsed, setCollapsed] = useState(collapsed);
    const [isSelected, setSelected] = useState(selected);
    const classes = classnames('titled-card__wrapper', className, {
        '--collapsed': isCollapsed,
        '--selected': isSelected
    });
    const bodyClasses = classnames('titled-card__body');
    const COLLAPSED_ICON = 'angle-up';
    const COLLAPSE_ICON = 'angle-down';

    return (
        <Card className={classes} depth={depth} onClick={() => setSelected(!isSelected)}>
           <header className="titled-card__header">
            {title}

            {collapsible &&
                <span className="titled-card__collapse-wrapper">
                    <FontAwesomeIcon
                        className="titled-card__collapse-icon" 
                        onClick={() => setCollapsed(!isCollapsed)}
                        icon={isCollapsed ? COLLAPSE_ICON : COLLAPSED_ICON} />
                </span>
            }
           </header> 

           <section className={bodyClasses}>{children}</section>
        </Card> 
    );
}

TitledCard.propTypes = {
    children: oneOfType([element, arrayOf(element)]),
    className: string,
    collapsed: bool,
    collapsible: bool,
    depth: number,
    title: any
};

export default TitledCard;