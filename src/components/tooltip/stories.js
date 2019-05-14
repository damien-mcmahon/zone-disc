import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';

import { StyleguideWrapper } from '../../stories/decorators';

storiesOf('Components/Tooltip', module)
    .addDecorator(StyleguideWrapper)
    .add('With Icon', () => (
        <div className="styleguide__section-wrapper">
            <Tooltip direction="top" name="info-help" content="This is some text">
                <FontAwesomeIcon icon={faInfoCircle} size="3x"/>
            </Tooltip>
        </div>
    ))
    .add('With HTML in the content', () => (
        <div className="styleguide__section-wrapper">
            <Tooltip direction="top" name="info-help" content={<h1>HEADER1</h1>}>
                <p>This is a paragraph with a header in the tooltip</p>
            </Tooltip>
        </div>
    ))