import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcDiscover } from '@fortawesome/free-brands-svg-icons';

storiesOf('Components/Card', module)
    .add('Default', () => <Card><h1>Card Text</h1></Card>)
    .add('With and without hover style', () => 
        <div style={{background: "#EEE", padding: "50px"}}>
            <Card depth={1}><h1>WITH HoverStyle</h1></Card>
            <Card depth={1} applyHoverStyle={false}><h1>WITHOUT HoverStyle</h1></Card>
        </div>
    )
    .add('Various Depths', () => (
        <div style={{background: "#EEE", padding: "50px"}}>
            <Card><h1>Depth 0</h1></Card>
            <Card depth={1}>
                <FontAwesomeIcon icon={faCcDiscover} size="5x"/>
                <h1>Depth 1</h1>
            </Card>
            <Card depth={2}><h1>Depth 2</h1></Card>
            <Card depth={3}><h1>Depth 3</h1></Card>
            <Card depth={4}><h1>Depth 4</h1></Card>
        </div>
    ));