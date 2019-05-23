import React from 'react'
import classnames from 'classnames';

import Card from '../card';

import './styles.scss';
import { arrayOf, element, string, oneOfType, number } from 'prop-types';

const TitledCard = ({className, children, depth, title}) => {
    const classes = classnames('titled-card__wrapper', className);

    return (
        <Card className={classes} depth={depth}>
           <header className="titled-card__header">{title}</header> 
           <section className="titled-card__body">{children}</section>
        </Card> 
    );
}

TitledCard.propTypes = {
    children: oneOfType([element, arrayOf(element)]),
    className: string,
    depth: number,
    title: string
};

export default TitledCard;