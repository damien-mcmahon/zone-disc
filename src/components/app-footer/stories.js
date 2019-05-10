import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import AppFooter from './index';

storiesOf('Components/App/Footer', module)
    .addDecorator(StoryRouter())
    .add('Default', () => 
        <div className="styleguide__footer-wrapper">
            <AppFooter />
        </div>
    )
