import '@/assets/scss/base.scss'
import '@/assets/scss/fonts.scss'
import '@/assets/scss/normalize.scss'
import '@/assets/scss/variables.scss'

import { createPinia } from 'pinia'
import { createSSRApp } from 'vue';
import App from './App.vue';

import { VueHeadMixin, createHead } from '@unhead/vue'
import router from './router'

export const createApp = () => {
    /**
     * use createSSRApp to render the Vue App on the server
     * and send it to the user to do the hydration process
     */
    const app = createSSRApp(App);
    app.use(createPinia())
    app.use(router)
    app.use(createHead()).mixin(VueHeadMixin)
    return {
        app,
    };
};
