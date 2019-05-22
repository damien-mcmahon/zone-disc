import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectableCard from '.';

storiesOf('Components/Selectable Card', module)
    .add('Default', () => 
        <SelectableCard onSelect={action('onSelect')}>
            <p>Some Text here...</p>
        </SelectableCard>
    )
    .add('With Selected Prop', () => 
        <SelectableCard onSelect={action('onSelect')} selected={true}>
            <p>This one is selected...</p>
        </SelectableCard>
    );