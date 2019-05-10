import { addParameters, configure } from '@storybook/react';
import yourTheme from './discoverTheme';


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
