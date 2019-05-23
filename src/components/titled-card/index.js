import React, { useState } from 'react'
import classnames from 'classnames';
import { any, arrayOf, element, string, oneOfType, number, bool } from 'prop-types';

import Card from '../card';

import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TitledCard = ({className, children, depth, title, collapsible = false}) => {
    const [isCollapsed, setCollapsed] = useState(false);

    const classes = classnames('titled-card__wrapper', className);
    const bodyClasses = classnames('titled-card__body', {
        '--collapsed': isCollapsed
    });

    const COLLAPSED_ICON = 'angle-up';
    const COLLAPSE_ICON = 'angle-down';

    return (
        <Card className={classes} depth={depth}>
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
    collapsible: bool,
    depth: number,
    title: any
};

export default TitledCard;