import React from 'react';
import { storiesOf } from '@storybook/react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCcDiscover, faCcDinersClub } from '@fortawesome/free-brands-svg-icons';

storiesOf('Styleguide/Icons', module)
    .add('Standard', () => 
    <div className="wrapper">
        <FontAwesomeIcon icon={faCcDiscover} size="5x" /> 
        <FontAwesomeIcon icon={faCcDinersClub} size="5x" /> 
    </div>
   );
