import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from './index';

storiesOf('Components/App/Logo', module)
    .add('Discover', () => <Logo tenant="DN" />)
    .add('Diners Club', () => <Logo tenant="DCI" />);