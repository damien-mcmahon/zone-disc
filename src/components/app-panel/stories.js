import React from 'react';
import { storiesOf } from '@storybook/react';

import AppPanel from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const helpObject = {
    name: 'help-me',
    content: 'Seek help with complex tasks',
    children: <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
};

storiesOf('Components/App/Panel', module)
    .add('With Title', () => <AppPanel name="Storybook"><h1>This is an app panel</h1></AppPanel>)
    .add('with no title', () => <AppPanel><h1>This is an app panel</h1></AppPanel>)
    .add('With Tooltip in title', () => 
        <AppPanel title="Some complex thing" help={helpObject}>
            <h1>This is an app panel</h1>
        </AppPanel>
    )