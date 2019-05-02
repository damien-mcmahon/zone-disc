import React from 'react';
import { storiesOf } from '@storybook/react';
import { StyleguideWrapper } from '../decorators';
import Button from '../../components/button';

storiesOf('Styleguide/Buttons', module)
    .addDecorator(StyleguideWrapper)
    .add('Standard Button', () => (
        <h1>asfafaf</h1>
    ));