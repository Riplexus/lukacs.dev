import MStars from './MStars.vue';

export default {
  component: MStars,
  tags: ['molecules', 'molecule', 'stars'],
  argTypes: {
    density: {
      control: {
        type: 'range',
        min: 0,
        max: 200,
        step: 1,
      },
      description: 'Amount of stars. Will be used to create x instances of [AStar](?path=/story/components-atoms-astar--default) with y stars per 1000 px² in a considerate ratio.',
    },
    seed: {
      description: 'Seed for the random number generator. Will be used to position the stars.',
    },
  },
};

export const Default = {
  args: {
    density: 100,
    seed: 'STARS',
  },
};
