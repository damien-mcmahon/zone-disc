import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import AppFooter from './index';
import { StyleguideWrapper } from '../../stories/decorators';

storiesOf('Components/App/Footer', module)
    .addDecorator(StoryRouter())
    .addDecorator(StyleguideWrapper)
    .add('Default', () => <AppFooter />)
