import 'virtual:uno.css';
import '@/assets/animations.scss';
import '@/assets/animations.scss';

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
  },
};

export default preview;
