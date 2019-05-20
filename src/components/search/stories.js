import React from 'react'
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Search from '.';

import '../../global.scss';

const searchResults = [{
    id: '1234',
    partyName: 'Acme Corp'
},{
    id: '3456',
    partyName: 'Acme B Corp'
}]
storiesOf('Components/Search', module)
    .addDecorator(StoryRouter())
    .add('Default', () => <Search results={[]} onSearch={() => {}}/>)
    .add('with Results', () => <Search results={searchResults} onSearch={() => {}}/>)