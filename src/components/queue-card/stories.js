import React from 'react'
import { storiesOf } from '@storybook/react';
import { PARTY_DETAILS } from '../../config/mocks';
import StoryRouter from 'storybook-react-router';
import '../../stories/font-icons';

import QueueCard from '.';

const ACTIVE_PARTY = {
    ...PARTY_DETAILS,
    statusName: 'Active'
};

const AWAITING_APPROVAL_PARTY = {
    ...PARTY_DETAILS,
    statusName: 'Awaiting Approval'
};

const REJECTED_PARTY = {
    ...PARTY_DETAILS,
    statusName: 'Rejected'
};

storiesOf('Components/Queue/Card', module)
    .addDecorator(StoryRouter())
    .add('Active', () => <QueueCard party={ACTIVE_PARTY} />)
    .add('Awaiting', () => <QueueCard party={AWAITING_APPROVAL_PARTY} />)
    .add('Rejected', () => <QueueCard party={REJECTED_PARTY} />)