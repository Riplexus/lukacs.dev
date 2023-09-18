import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',

  brandTitle: `Back home`,
  brandUrl: '/',
  brandImage: '/android-chrome-512x512.png',
  brandTarget: '_self',

  colorPrimary: '#83274e',
  colorSecondary: '#c2407d',

  // UI
  appBg: '#18191b',
  appContentBg: '#212427',
  appBorderColor: '#212427',
  // appBorderRadius: 4,
  //
  // // Text colors
  textColor: '#c1c4c7',
  // textInverseColor: '#ffffff',
  //
  // // Toolbar default and active colors
  // barTextColor: '#9E9E9E',
  // barSelectedColor: '#585C6D',
  // barBg: '#ffffff',
  //
  // // Form colors
  // inputBg: '#ffffff',
  // inputBorder: '#10162F',
  // inputTextColor: '#10162F',
  // inputBorderRadius: 2,
});
