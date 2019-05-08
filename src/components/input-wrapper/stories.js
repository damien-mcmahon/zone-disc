import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import * as Yup from 'yup';
import InputWrapper from './index';

import { FormikWrapper } from '../../stories/decorators';
import Button from '../button';

storiesOf('Components/Form/Input Wrapper')
    .addDecorator(FormikWrapper({test: '', test2: ''}))
    .add('Text is default', () => 
        <div>
            <InputWrapper label="Label" name="test" placeholder="This is a story..."/>
            <InputWrapper label="Label" name="test2"/>
        </div>
    )

const errorValidationSchema = Yup.object().shape({
    name: Yup.string().min(2, '2 or more characters required').required('Please enter a valid string')
});

storiesOf('Components/Form/Input Wrapper')
    .addDecorator(FormikWrapper({name: ''}, errorValidationSchema))
    .add('Text with Error', ({errors}) => 
        <Fragment>
            <InputWrapper name="name" label="Name" errors={errors['name']} />
            <Button type="submit">Save</Button>
        </Fragment>
    )