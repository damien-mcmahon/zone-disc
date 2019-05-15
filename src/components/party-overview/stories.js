import React from 'react'
import { storiesOf } from '@storybook/react';
import { PARTY_DETAILS} from '../../party/create/mocks';

import PartyOverview from '.';

storiesOf('Components/Party/Overview', module)
    .add('Default', () => <PartyOverview party={PARTY_DETAILS} />);