import 'virtual:uno.css';
import '@/assets/index.scss';
import './preview.scss';

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0c0d0e',
        },
      ],
    },
    controls: { expanded: true },
  },
};

export default preview;
