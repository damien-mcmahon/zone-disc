import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectableCard from '.';

storiesOf('Components/Selectable Card', module)
    .add('Default', () =>
        <div>
            <SelectableCard name="test" value="One" onSelect={action('onSelect')}>
                <p>One</p>
            </SelectableCard> 
            <SelectableCard name="test" value="Two" onSelect={action('onSelect')}>
                <p>Two</p>
            </SelectableCard>
        </div>
    )
    .add('With Selected Prop', () => 
        <SelectableCard 
            name="thing" 
            value="Singular" 
            onSelect={action('onSelect')} 
            selected={true}>
            <p>This one is selected...</p>
        </SelectableCard>
    );