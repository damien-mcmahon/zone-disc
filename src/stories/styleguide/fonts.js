import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Styleguide/Fonts', module)
    .add('Sizing', () => (
        <div className="styleguide__section-wrapper">
            <h1 className="font--display1">Display 1 Open Sans 64px</h1>
            <h1 className="font--display2">Display 2</h1>
            <h1 className="font--h1">Header 1</h1>
            <h2 className="font--h2">Header 2</h2>
            <h3 className="font--h3">Header 3</h3>
            <h4 className="font--h4">Header 4</h4>
            <h5 className="font--h5">Header 5</h5>
            <p className="font--body">lorem ipsum</p>
            <p className="font--body-bold">lorem ipsum</p>
            <span className="font--note">This is a note</span>
        </div>
    ))
    .add('Weights', () => (
        <div className="styleguide__section-wrapper">
            <p className="font--body bold">Bold Text, using the <code>.bold</code> class </p>
            <p className="font--body semi-bold">Semi-Bold Text, using the <code>.semi-bold</code> class </p>
            <p className="font--body normal">Normal, using the <code>.normal</code> class </p>
        </div>
    ))
