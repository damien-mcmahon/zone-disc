import React from 'react'
import { storiesOf } from '@storybook/react';

import TitledCard from '.';

storiesOf('Components/Titled Card', module)
    .add('Default', () => 
        <TitledCard title="Titled Card">
            <p>This is some content inside the card</p> 
        </TitledCard>
    )