import React from 'react';
import { storiesOf } from '@storybook/react';

import './grid-story.scss';

storiesOf('Styleguide/Grid', module)
    .add('Default', () => (
        <div className="styleguide__section-wrapper">
            <div className="grid-wrapper">
               <div className="box -span12">12</div>
               <div className="box -span6">6</div>
               <div className="box -span6">6</div>
               <div className="box -span4">4</div>
               <div className="box -span4">4</div>
               <div className="box -span4">4</div>
               <div className="box -span3">3</div>
               <div className="box -span3">3</div>
               <div className="box -span3">3</div> 
               <div className="box -span3">3</div>
               <div className="box -span2">2</div>
               <div className="box -span2">2</div>
               <div className="box -span2">2</div>
               <div className="box -span2">2</div>
               <div className="box -span2">2</div>
               <div className="box -span2">2</div>
               <div className="box">1</div>
               <div className="box">1</div>
               <div className="box">1</div>
               <div className="box">1</div>
               <div className="box">1</div>
               <div className="box">1</div>
               <div className="box">1</div>
               <div className="box">1</div>
               <div className="box">1</div>
               <div className="box">1</div>
               <div className="box">1</div>
               <div className="box">1</div>
            </div>
        </div>
    ));
