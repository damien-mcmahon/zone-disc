import { addParameters, configure, addDecorator } from '@storybook/react';
import yourTheme from './discoverTheme';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y)

const req = require.context('../src/components', true, /stories\.js$/);

function loadStories() {
  require('../src/stories');
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: yourTheme,
  },
});

configure(loadStories, module);
