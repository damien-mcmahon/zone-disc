import React from 'react';
import { storiesOf } from '@storybook/react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCcDiscover, faCcDinersClub } from '@fortawesome/free-brands-svg-icons';

storiesOf('Styleguide/Icons', module)
    .add('Standard', () => 
    <div className="wrapper">
        <div className="styleguide__icon-wrapper">
            <FontAwesomeIcon icon={faCcDiscover} size="5x" /> 
            <code className="styleguide__icon-label">faCcDiscover</code>
        </div>
        <div className="styleguide__icon-wrapper">
            <FontAwesomeIcon icon={faCcDinersClub} size="5x" /> 
            <code className="styleguide__icon-label">faCcDinersClub</code>
        </div>
    </div>
   );
