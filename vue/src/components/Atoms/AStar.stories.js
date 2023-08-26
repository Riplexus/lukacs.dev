import AStar from './AStar.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  component: AStar,
  tags: ['atoms', 'atom'],
  argTypes: {
    // backgroundColor: {
    //   control: 'color',
    // },
    // onClick: {},
    // size: {
    //   control: {
    //     type: 'select',
    //   },
    //   options: ['small', 'medium', 'large'],
    // },
  },
};

export const Default = {
  args: {
    // primary: true,
    // label: 'Button',
  },
};
