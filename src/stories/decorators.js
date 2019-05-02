import React from 'react';

export const StyleguideWrapper = storyFn => (
    <div className="styleguide__wrapper">{storyFn()}</div>
);