import { createApp, h } from 'vue';
import App from './App.vue';
import useRouter from './router';
import useStore from './stores';
import 'virtual:uno.css';
import '@/assets/base.scss';
import '@/assets/animations.scss';

const app = createApp({
  render() { return h(App); },
});

useStore(app);
const { router } = useRouter(app);

router.isReady().then(() => app.mount('#app'));
