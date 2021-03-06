import React, { useState } from 'react'
import classnames from 'classnames';
import { any, string, number, bool, node } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from '../card';

import './styles.scss';

const TitledCard = ({className, children, depth, title, collapsible = false, collapsed = false, selected = false}) => {
    const [isCollapsed, setCollapsed] = useState(collapsed);
    const [isSelected, setSelected] = useState(selected);
    const classes = classnames('titled-card__wrapper', className, {
        '--collapsed': isCollapsed,
        '--selected': isSelected,
        '--collapsible': collapsible
    });
    const bodyClasses = classnames('titled-card__body');
    const COLLAPSED_ICON = 'angle-up';
    const COLLAPSE_ICON = 'angle-down';

    return (
        <Card 
            className={classes} 
            depth={depth} 
            onClick={() => setSelected(!isSelected)}>
            <header 
            onClick={() => collapsible && setCollapsed(!isCollapsed)}
            className="titled-card__header">
                {title}

                {collapsible &&
                    <span className="titled-card__collapse-wrapper">
                        <FontAwesomeIcon
                            className="titled-card__collapse-icon" 
                            icon={isCollapsed ? COLLAPSE_ICON : COLLAPSED_ICON} />
                    </span>
                }
            </header> 

           <section className={bodyClasses}>{children}</section>
        </Card> 
    );
}

TitledCard.propTypes = {
    children: node,
    className: string,
    collapsed: bool,
    collapsible: bool,
    depth: number,
    title: any
};

export default TitledCard;