import React from 'react'
import { storiesOf } from '@storybook/react';

import NotificationMessage from '.';

const message = {
    icon: 'times-circle',
    message: 'Your application was rejected',
    timestamp: '21 minutes ago'
}

storiesOf('Components/Notifications/Message', module)
    .add('Default', () => <NotificationMessage info={message} />);