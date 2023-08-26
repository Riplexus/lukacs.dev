import { defineConfig, toEscapedSelector, presetUno, presetIcons } from 'unocss';

export default defineConfig({
  theme: {
    colors: {
      woodsmoke: {
        50: '#c1c4c7',
        100: '#b1b8b9',
        200: '#75838a',
        300: '#75838a',
        400: '#50585e',
        500: '#383e42',
        600: '#212427',
        700: '#18191b',
        800: '#131416',
        900: '#0c0d0e',
        950: '#000000',
        DEFAULT: '#131416',
      },
      ebony: {
        50: '#f4f7fb',
        100: '#e8eef6',
        200: '#cbdbec',
        300: '#9ebddb',
        400: '#699ac7',
        500: '#467eb1',
        600: '#356494',
        700: '#2c5078',
        800: '#274465',
        900: '#253b55',
        950: '#0b1119',
        DEFAULT: '#253b55',
      },
      camelot: {
        50: '#fbf4f8',
        100: '#f9eaf3',
        200: '#f5d5e8',
        300: '#eeb3d4',
        400: '#e284b7',
        500: '#d65e9c',
        600: '#c2407d',
        700: '#a72f64',
        800: '#83274e',
        900: '#742748',
        950: '#461127',
        DEFAULT: '#83274e',
      },
    },
  },
  rules: [
    // https://unocss.dev/config/rules#full-controlled-rules
    [/^bg-triangle-(\w+)-(\d+)$/, ([, colorName, colorValue], { rawSelector, theme }) => {
      const selector = toEscapedSelector(rawSelector);
      const color = theme.colors[colorName][colorValue];
      return `
        ${selector} {
          color: ${color};
          fill: ${color};
          background: linear-gradient(
            to top left,
            ${color} 0%,
            ${color} calc(50% - 0.8px),
            rgb(0 0 0 / 0%) 50%,
            rgb(0 0 0 / 0%) 100%
          );
        }
        ${selector}.ltr {
          background: linear-gradient(
            to top right,
            ${color} 0%,
            ${color} calc(50% - 0.8px),
            rgb(0 0 0 / 0%) 50%,
            rgb(0 0 0 / 0%) 100%
          );
        }
      `;
    }],
  ],
  safelist: [
    ...[
      'ebony-900',
      'woodsmoke-800',
      'woodsmoke-900',
    ].map((color) => [`bg-${color}`, `bg-triangle-${color}`, `after:bg-${color}`]).flat(),
  ],
  presets: [
    presetUno(),
    presetIcons(),
  ],
});
