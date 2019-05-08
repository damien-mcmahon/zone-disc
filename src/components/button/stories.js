import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

storiesOf('Components/Button', module)
    .add('Standard', () => <Button>Hello</Button>)
    .add('Disabled', () => <Button disabled>Disabled Button</Button>)
