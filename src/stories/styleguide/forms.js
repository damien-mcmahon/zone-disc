import React from 'react';
import { storiesOf } from '@storybook/react';
import {StyleguideWrapper } from '../decorators';

storiesOf('Styleguide/Forms', module)
    .addDecorator(StyleguideWrapper)
    .add('Default', () => (
        <div className="">adasdasd</div>
    ));