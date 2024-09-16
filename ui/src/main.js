import '@/assets/scss/base.scss'
import '@/assets/scss/fonts.scss'
import '@/assets/scss/normalize.scss'
import '@/assets/scss/variables.scss'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { VueHeadMixin, createHead } from '@unhead/vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createHead()).mixin(VueHeadMixin)
app.mount('#app')
