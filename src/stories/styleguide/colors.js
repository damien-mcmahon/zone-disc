import React from 'react';
import { storiesOf } from '@storybook/react';

import ColorOption from '../components/color-option';

// TODO - Styled Components would handle this better
const colors = {
    "primary": "hsl(199, 100%, 42%)", 
    "primary-dark": "hsl(199, 99%, 34%)",
    "complementary": "hsl(19.2, 85%, 55.3%)",
    "complementary-dark":"hsl(19, 92%, 41%)", 
    "secondary-blue": "hsl(210, 65%, 30%)",
    "secondary-light-blue": "hsl(186, 45%, 76%)",
    "secondary-gray": "hsl(216, 33%, 97%)",
    "gray-1": "hsl(0, 0%, 13%)",
    "gray-2": "hsl(0, 0%, 26%)",
    "gray-3": "hsl(0, 0%, 38%)",
    "gray-4": "hsl(0, 0%, 62%)",
    "gray-5": "hsl(0, 0%, 93%)",
    "success": "hsl(123, 41%, 45%)",
    "error": "hsl(0, 73%, 41%)",
    "warning": "hsl(46, 100%, 50%)",
};

storiesOf('Styleguide/Colors', module)
    .add('All', () => (
        <div className="styleguide__section-wrapper">
            <div className="colour__wrapper">
                <h2 className="styleguide__section-title">Primary Colors</h2>
                <ColorOption color={colors['primary']} name="primary" />
                <ColorOption color={colors['primary-dark']} name="primary-dark" />
            </div>

            <div className="colour__wrapper">
                <h2 className="styleguide__section-title">Complementary Colors</h2>
                <ColorOption color={colors['complementary']} name="complementary" />
                <ColorOption color={colors['complementary-dark']} name="complementary-dark" />
            </div>

            <div className="colour__wrapper">
                <h2 className="styleguide__section-title">Secondary Colors</h2>
                <ColorOption color={colors['secondary-blue']} name="secondary-blue" />
                <ColorOption color={colors['secondary-light-blue']} name="secondary-light-blue" />
                <ColorOption color={colors['secondary-gray']} name="secondary-gray" />
            </div>

            <div className="colour__wrapper">
                <h2 className="styleguide__section-title">Grays</h2>
                <ColorOption color={colors['gray-1']} name="gray-1" />
                <ColorOption color={colors['gray-2']} name="gray-2" />
                <ColorOption color={colors['gray-3']} name="gray-3" />
                <ColorOption color={colors['gray-4']} name="gray-4" />
                <ColorOption color={colors['gray-5']} name="gray-5" />
            </div>

            <div className="colour__wrapper">
                <h2 className="styleguide__section-title">Status Colors</h2>
                <ColorOption color={colors['success']} name="success" />
                <ColorOption color={colors['error']} name="error" />
                <ColorOption color={colors['warning']} name="warning" />
            </div>
        </div>
    ));
