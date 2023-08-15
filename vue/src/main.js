import { createApp, h } from 'vue'
import App from './App.vue'
import useRouter from './router'
import useStore from './store'
import useLazySrc from './directives/lazySrc'

const app = createApp({
    render() { return h(App) }
})

useLazySrc(app)
useStore(app)
const { router } = useRouter(app)

await router.isReady()
app.mount('#app')
