import React from 'react'
import { storiesOf } from '@storybook/react';

import Banner from '.';

storiesOf('Components/Banner', module)
    .add('Default', () => (
        <Banner title="Default Banner" subTitle="This is the subtitle" />
    ))
    .add('Success', () => (
        <Banner state="success" title="Default Banner" subTitle="This is the subtitle" />
    ));