import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page404 from '../views/Page404.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: Page404,
            meta: { requires404: true }
        }
    ]
})

// Middleware для установки статуса 404
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requires404)) {
        document.title = '404 Not Found';
        next();
    } else {
        next();
    }
});

export default router
