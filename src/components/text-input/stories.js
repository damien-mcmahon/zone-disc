import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './index';

storiesOf('Components/Text Input', module)
    .add('Standard', () => <TextInput label="Label:"/>);
