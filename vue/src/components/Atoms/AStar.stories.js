import AStar from './AStar.vue';

export default {
  component: AStar,
  tags: ['atoms', 'atom', 'stars'],
  argTypes: {
    density: {
      control: {
        type: 'range',
        min: 0,
        max: 1000,
        step: 1,
      },
      description: 'Amount of stars displayed per 1000 px².',
    },
    seed: {
      description: 'Seed for the random number generator. Will be used to position the stars.',
    },
    size: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
      description: 'Size of a single star in px.',
    },
    animationDelay: {
      control: {
        type: 'range',
        min: 0,
        max: 20,
        step: 1,
      },
      description: 'Delay in the sprinkle animation of all stars. Animation runs for all stars in this component at the same time.',
    },
  },
};

export const Default = {
  args: {
    density: 200,
    seed: 'STARS',
    size: 2,
    animationDelay: 0,
  },
};
