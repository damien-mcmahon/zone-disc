import React from 'react';
import { storiesOf } from '@storybook/react';
import InputWrapper from './index';

import { FormikWrapper } from '../../stories/decorators';

storiesOf('Components/Form/Input Wrapper')
    .addDecorator(FormikWrapper({test: "someVal"}))
    .add('Text is default', () => <InputWrapper label="Label" name="test"/>)
    .add('Checkbox', () => <InputWrapper label="Checkbox" type="checkbox" name="test" />)
    .add('Radio', () => 
        <div>
            <InputWrapper label="Checkbox" type="radio" name="test" />
            <InputWrapper label="Checkbox" type="radio" name="test" />
        </div>
    )