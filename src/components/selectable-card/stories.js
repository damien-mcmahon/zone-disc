import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectableCard from '.';

storiesOf('Components/Selectable Card', module)
    .add('Default', () => 
        <SelectableCard onSelect={action('onSelect')}>
            <p>Some Text here...</p>
        </SelectableCard>
    );