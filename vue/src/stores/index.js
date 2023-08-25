import { createPinia } from 'pinia';

export default (app) => {
  const pinia = createPinia();

  app.use(pinia);

  return {
    pinia,
  };
};
