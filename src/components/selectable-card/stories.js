import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectableCard from '.';
import { FormikWrapper } from '../../stories/decorators';

storiesOf('Components/Selectable Card', module)
    .addDecorator(FormikWrapper({test: ''}))
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
        <SelectableCard onSelect={action('onSelect')} selected={true}>
            <p>This one is selected...</p>
        </SelectableCard>
    );