import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import AppHeader from '.';

storiesOf('Components/App Header', module)
    .addDecorator(StoryRouter())
    .add('Default', () => <AppHeader />);
