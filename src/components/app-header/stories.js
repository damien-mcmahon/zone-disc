import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import AppHeader from '.';

storiesOf('Components/App/Header', module)
    .addDecorator(StoryRouter())
    .add('Discover', () => <AppHeader tenant="DN"/>)
    .add('Diners Club', () => <AppHeader tenant="DCI"/>);
