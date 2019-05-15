import React from 'react'
import { storiesOf } from '@storybook/react';
import { PARTY_DETAILS } from '../../config/mocks';
import StoryRouter from 'storybook-react-router';
import '../../stories/font-icons';

import QueueCard from '.';

const ACTIVE_PARTY = {
    statusName: 'Active',
    ...PARTY_DETAILS
};

const AWAITING_APPROVAL_PARTY = {
    statusName: 'Awaiting Approval',
    ...PARTY_DETAILS
};

const REJECTED_PARTY = {
    statusName: 'Rejected',
    ...PARTY_DETAILS
};

storiesOf('Components/Queue/Card', module)
    .addDecorator(StoryRouter())
    .add('Active', () => <QueueCard party={ACTIVE_PARTY} />)
    .add('Awaiting', () => <QueueCard party={AWAITING_APPROVAL_PARTY} />)
    .add('Rejected', () => <QueueCard party={REJECTED_PARTY} />)