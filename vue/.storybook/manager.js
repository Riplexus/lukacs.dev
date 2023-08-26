import { addons } from '@storybook/manager-api';
import theme from './theme.js';

addons.setConfig({
  theme,
  sidebar: {
    showRoots: false,
  },
  enableShortcuts: false,
  showToolbar: false,
});
