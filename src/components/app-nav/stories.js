import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import { StyleguideWrapper } from '../../stories/decorators';
import AppNav from '.';

storiesOf('Components/App/Nav', module)
    .addDecorator(StoryRouter())
    .addDecorator(StyleguideWrapper)
    .add('Default', () => 
        <div className="styleguide__nav-container">
            <AppNav />
        </div>
    );