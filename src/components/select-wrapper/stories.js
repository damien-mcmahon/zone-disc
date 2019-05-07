import React from 'react';
import { storiesOf } from '@storybook/react';
import SelectWrapper from './index';

import { FormikWrapper } from '../../stories/decorators';

const defaultOptions = [
    {label: "One", value: 1},
    {label: "Two", value: 2},
    {label: "Three", value: 3},
]
storiesOf('Components/Form/Select Wrapper')
    .addDecorator(FormikWrapper({test: "someVal"}))
    .add('Default', () => <SelectWrapper label="Label" name="test" options={defaultOptions} />)
    .add('With Default Value', () => 
        <SelectWrapper 
            label="Label" 
            name="test" 
            defaultValue={defaultOptions[2]}
            options={defaultOptions} />
    );