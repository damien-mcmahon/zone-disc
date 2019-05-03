import React from 'react';
import { storiesOf } from '@storybook/react';

import AppPanel from './index';

storiesOf('Components/App/Panel', module)
    .add('With Title', () => <AppPanel name="Storybook"><h1>This is an app panel</h1></AppPanel>)
    .add('with no title', () => <AppPanel><h1>This is an app panel</h1></AppPanel>)