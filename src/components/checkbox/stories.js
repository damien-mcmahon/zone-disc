import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from '.';

storiesOf('Components/Checkbox', module)
    .add('Various States', () => (
        <div>
            <Checkbox 
                disabled
                checked
                value={1} 
                label="Checked" 
                name="test" 
                onChange={action('onChange')} />

            <Checkbox 
                value={2} 
                label="Checked" 
                name="test" 
                onChange={action('onChange')} />

            <Checkbox
                value={3} 
                label="Checked" 
                name="test" 
                onChange={action('onChange')} />
        </div>
    ));
