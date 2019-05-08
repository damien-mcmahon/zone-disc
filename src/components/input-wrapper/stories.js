import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import * as Yup from 'yup';
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

const errorValidationSchema = Yup.object().shape({
    name: Yup.string().min(2, '2 or mor characters required').required('Please enter a valid string')
});

storiesOf('Components/Form/Input Wrapper')
    .addDecorator(FormikWrapper({name: ''}, errorValidationSchema))
    .add('Text with Error', () => 
        <Fragment>
            <InputWrapper name="name" label="Name" />
            <button type="submit">Save</button>
        </Fragment>
    )